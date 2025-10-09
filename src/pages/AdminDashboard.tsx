import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, CheckCircle, XCircle, Clock, User, Mail, Building, Phone, Calendar, Filter } from 'lucide-react';
import { adminService } from '../services/adminService';
import { AccessRequest } from '../lib/supabase';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<AccessRequest[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [adminUser, setAdminUser] = useState<any>(null);

  useEffect(() => {
    const authCheck = sessionStorage.getItem('admin_auth');
    const userStr = sessionStorage.getItem('admin_user');

    if (authCheck !== 'true' || !userStr) {
      navigate('/admin');
      return;
    }

    setAdminUser(JSON.parse(userStr));
    loadRequests();
  }, [navigate]);

  useEffect(() => {
    filterRequests();
  }, [filter, requests]);

  const loadRequests = async () => {
    setIsLoading(true);
    const data = await adminService.getAllRequests();
    setRequests(data);
    setIsLoading(false);
  };

  const filterRequests = () => {
    if (filter === 'all') {
      setFilteredRequests(requests);
    } else {
      setFilteredRequests(requests.filter(req => req.status === filter));
    }
  };

  const handleApprove = async (id: string) => {
    if (!confirm('Deseja aprovar esta solicitação?')) return;

    const result = await adminService.approveRequest(id);
    if (result.success) {
      alert('Solicitação aprovada com sucesso!');
      loadRequests();
    } else {
      alert('Erro ao aprovar solicitação: ' + result.error);
    }
  };

  const handleReject = async (id: string) => {
    if (!confirm('Deseja rejeitar esta solicitação?')) return;

    const result = await adminService.rejectRequest(id);
    if (result.success) {
      alert('Solicitação rejeitada.');
      loadRequests();
    } else {
      alert('Erro ao rejeitar solicitação: ' + result.error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    sessionStorage.removeItem('admin_user');
    navigate('/admin');
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-4 h-4 mr-1" />
            Pendente
          </span>
        );
      case 'approved':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-4 h-4 mr-1" />
            Aprovado
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <XCircle className="w-4 h-4 mr-1" />
            Rejeitado
          </span>
        );
      default:
        return null;
    }
  };

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    approved: requests.filter(r => r.status === 'approved').length,
    rejected: requests.filter(r => r.status === 'rejected').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
              <p className="text-sm text-gray-600 mt-1">Bem-vindo, {adminUser?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              <LogOut className="w-5 h-5" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pendentes</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Aprovados</p>
                <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Rejeitados</p>
                <p className="text-3xl font-bold text-red-600">{stats.rejected}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-900">Solicitações de Acesso</h2>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Todas</option>
                  <option value="pending">Pendentes</option>
                  <option value="approved">Aprovadas</option>
                  <option value="rejected">Rejeitadas</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Carregando...</p>
              </div>
            ) : filteredRequests.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-gray-600">Nenhuma solicitação encontrada.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredRequests.map((request) => (
                  <div key={request.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">{request.name}</h3>
                          {getStatusBadge(request.status)}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="w-4 h-4 mr-2 text-gray-400" />
                            {request.email}
                          </div>
                          {request.company && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Building className="w-4 h-4 mr-2 text-gray-400" />
                              {request.company}
                            </div>
                          )}
                          {request.phone && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="w-4 h-4 mr-2 text-gray-400" />
                              {request.phone}
                            </div>
                          )}
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                            {new Date(request.created_at || '').toLocaleString('pt-BR')}
                          </div>
                        </div>

                        {request.message && (
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-sm text-gray-700">{request.message}</p>
                          </div>
                        )}
                      </div>

                      {request.status === 'pending' && (
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleApprove(request.id!)}
                            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                          >
                            <CheckCircle className="w-4 h-4" />
                            <span>Aprovar</span>
                          </button>
                          <button
                            onClick={() => handleReject(request.id!)}
                            className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                          >
                            <XCircle className="w-4 h-4" />
                            <span>Rejeitar</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
