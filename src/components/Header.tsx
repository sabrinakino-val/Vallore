import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Calculator, User, Send, CheckCircle, LogOut } from 'lucide-react';
import Notification from './Notification';
import { useNotification } from '../hooks/useNotification';
import { sendLoginNotification, sendAccessRequest } from '../services/emailService';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<'register' | 'login' | 'success'>('login');
  const [requestData, setRequestData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { notification, showSuccess, showError, showInfo, hideNotification } = useNotification();

  // Verificar se já está logado ao carregar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Verificar sessão existente
    const savedAuth = sessionStorage.getItem('vallore_auth');
    const savedUser = sessionStorage.getItem('vallore_user');
    if (savedAuth === 'true' && savedUser) {
      setIsLoggedIn(true);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simular usuários aprovados (em produção, isso viria de uma API)
  const approvedUsers = [
    { username: 'cliente1', password: 'senha123' },
    { username: 'empresa1', password: 'pass456' },
    { username: 'demo', password: 'demo123' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar se o usuário está na lista de aprovados
    const user = approvedUsers.find(
      u => u.username === loginData.username && u.password === loginData.password
    );

    if (user) {
      // Enviar notificação real por email
      sendRealLoginNotification(loginData.username);
      
      setIsLoggedIn(true);
      setIsAccessModalOpen(false);
      // Salvar sessão de autenticação
      sessionStorage.setItem('vallore_auth', 'true');
      sessionStorage.setItem('vallore_user', loginData.username);
      
      // Limpar dados do formulário
      setLoginData({ username: '', password: '' });
    } else {
      alert('Credenciais inválidas. Solicite acesso se ainda não possui conta.');
    }
  };

  const sendRealLoginNotification = async (username: string) => {
    const currentDate = new Date().toLocaleString('pt-BR');
    
    try {
      // Mostrar notificação de processamento
      showInfo(
        'Processando Login...',
        'Enviando notificação para a administração...'
      );
      
      // Enviar email real
      const emailSent = await sendLoginNotification(username);
      
      // Esconder notificação de processamento
      setTimeout(() => {
        hideNotification();
        
        if (emailSent) {
          setTimeout(() => {
            showSuccess(
              'Login Realizado com Sucesso!',
              `Bem-vindo, ${username}! Notificação enviada para contato@valloregestao.com.br em ${currentDate}.`
            );
          }, 300);
        } else {
          setTimeout(() => {
            showError(
              'Login Realizado',
              `Bem-vindo, ${username}! Houve um problema no envio da notificação, mas seu login foi efetuado com sucesso.`
            );
          }, 300);
        }
      }, 1500);
      
    } catch (error) {
      console.error('Erro no login:', error);
      hideNotification();
      setTimeout(() => {
        showSuccess(
          'Login Realizado com Sucesso!',
          `Bem-vindo, ${username}! Login efetuado em ${currentDate}.`
        );
      }, 300);
    }
  };

  const sendRealAccessRequest = async (requestData: any) => {
    try {
      const { accessRequestService } = await import('../services/accessRequestService');
      const result = await accessRequestService.createRequest(requestData);

      if (result.success) {
        const formData = new FormData();
        formData.append('name', requestData.name);
        formData.append('email', requestData.email);
        formData.append('company', requestData.company);
        formData.append('phone', requestData.phone);
        formData.append('subject', `🆕 Novo Cadastro - ${requestData.name}`);
        formData.append('message', `
NOVA SOLICITAÇÃO DE CADASTRO - VALLORE

👤 Nome: ${requestData.name}
📧 Email: ${requestData.email}
🏢 Empresa: ${requestData.company}
📱 Telefone: ${requestData.phone}
🕐 Data/Hora: ${new Date().toLocaleString('pt-BR')}

AÇÕES NECESSÁRIAS:
1. Analisar os dados do solicitante
2. Criar credenciais de acesso
3. Enviar email de aprovação para: ${requestData.email}

Sistema Vallore - CNPJ: 52.633.207/0001-05
        `);

        await fetch('https://formspree.io/f/mrbgkqpw', {
          method: 'POST',
          body: formData
        });
      }

      return result;
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      return { success: false };
    }
  };

  const handleAccessRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mostrar notificação de processamento
    showInfo(
      'Processando Solicitação...',
      'Aguarde enquanto enviamos sua solicitação de acesso.'
    );
    
    try {
      const result = await sendRealAccessRequest(requestData);
      
      // Mostrar sucesso
      setTimeout(() => {
        hideNotification();
        setTimeout(() => {
          if (result.success) {
            showSuccess(
              'Cadastro Solicitado!',
              `Olá ${requestData.name}! Sua solicitação foi enviada com sucesso. Você receberá um email de confirmação quando for aprovado.`
            );
          } else {
            showError(
              'Erro no Envio',
              'Houve um problema no envio. Entre em contato diretamente pelo WhatsApp: (32) 9848-2483'
            );
          }
          
          setModalStep('success');
          // Reset form
          setRequestData({
            name: '',
            email: '',
            company: '',
            phone: ''
          });
        }, 300);
      }, 1500);
      
    } catch (error) {
      console.error('Erro no envio da solicitação:', error);
      hideNotification();
      setTimeout(() => {
        showError(
          'Erro no Envio',
          'Entre em contato diretamente pelo WhatsApp: (32) 9848-2483'
        );
      }, 300);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('vallore_auth');
    sessionStorage.removeItem('vallore_user');
  };

  const openCalculator = () => {
    if (isLoggedIn) {
      window.open('https://merry-lamington-572be3.netlify.app/', '_blank');
    } else {
      openAccessModal();
    }
  };

  const openAccessModal = () => {
    setIsAccessModalOpen(true);
    setModalStep('login');
  };

  const closeModal = () => {
    setIsAccessModalOpen(false);
    setModalStep('login');
    setRequestData({
      name: '',
      email: '',
      company: '',
      phone: ''
    });
    setLoginData({ username: '', password: '' });
  };

  return (
    <>
      {/* Notification Component */}
      <Notification
        type={notification.type}
        title={notification.title}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
      
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(32) 9848-2483</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>contato@valloregestao.com.br</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>CNPJ: 52.633.207/0001-05</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full top-8 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-xl top-0' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/LOGO EM PNG_Prancheta 1.png" 
                alt="Vallore" 
                className="h-48 w-auto"
              />
            </div>
            
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#financial-solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                Soluções Financeiras
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <button 
                    onClick={openCalculator}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    <Calculator size={18} />
                    <span>Calculadora</span>
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
                  >
                    <LogOut size={18} />
                    <span>Sair</span>
                  </button>
                </>
              ) : (
                <button 
                  onClick={openAccessModal}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  <User size={18} />
                  <span>Login</span>
                </button>
              )}
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Consultoria Gratuita
              </a>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Início
                </a>
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Serviços
                </a>
                <a href="#financial-solutions" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Soluções Financeiras
                </a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Sobre
                </a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Contato
                </a>
                {isLoggedIn ? (
                  <>
                    <button 
                      onClick={openCalculator}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                    >
                      Calculadora
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600"
                    >
                      Sair
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={openAccessModal}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                  >
                    Login
                  </button>
                )}
                <a 
                  href="#contact" 
                  className="block w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Consultoria Gratuita
                </a>
                <a href="tel:+553298482483" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  (32) 9848-2483
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Access Control Modal */}
        {isAccessModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
              
              {modalStep === 'login' && (
                <>
                  <div className="text-center mb-8">
                    <img 
                      src="/LOGO EM PNG_Prancheta 1.png" 
                      alt="Vallore" 
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Login Vallore
                    </h2>
                    <p className="text-gray-600">
                      Entre com suas credenciais para acessar os recursos exclusivos
                    </p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                        Usuário
                      </label>
                      <input
                        type="text"
                        id="username"
                        value={loginData.username}
                        onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Digite seu usuário"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                        Senha
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Digite sua senha"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <User className="mr-2 w-5 h-5" />
                      Fazer Login
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => setModalStep('register')}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Não possui conta? Cadastrar-se
                    </button>
                  </div>
                </>
              )}

              {modalStep === 'register' && (
                <>
                  <div className="text-center mb-8">
                    <img 
                      src="/LOGO EM PNG_Prancheta 1.png" 
                      alt="Vallore" 
                      className="h-16 w-auto mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Cadastro de Cliente
                    </h2>
                    <p className="text-gray-600">
                      Preencha seus dados para solicitar acesso aos recursos exclusivos da Vallore
                    </p>
                  </div>

                  <form onSubmit={handleAccessRequest} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={requestData.name}
                        onChange={(e) => setRequestData({...requestData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={requestData.email}
                        onChange={(e) => setRequestData({...requestData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={requestData.company}
                        onChange={(e) => setRequestData({...requestData, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Nome da sua empresa"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={requestData.phone}
                        onChange={(e) => setRequestData({...requestData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>

                    <div>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-sm text-blue-800">
                          <strong>📋 Processo de Aprovação:</strong><br />
                          1. Preencha seus dados corretamente<br />
                          2. Nossa equipe analisará sua solicitação<br />
                          3. Você receberá um email de confirmação<br />
                          4. Após aprovação, poderá fazer login
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Solicitar Cadastro
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <button 
                      onClick={() => setModalStep('login')}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Já possui conta? Fazer login
                    </button>
                  </div>
                </>
              )}

              {modalStep === 'success' && (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Cadastro Solicitado!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Sua solicitação de cadastro foi enviada com sucesso! Nossa equipe analisará 
                    seus dados e você receberá um email de confirmação quando for aprovado.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      <strong>Próximos passos:</strong><br />
                      1. Nossa equipe analisará sua solicitação<br />
                      2. Você receberá um email de aprovação<br />
                      3. Suas credenciais serão enviadas por email<br />
                      4. Faça login e acesse os recursos exclusivos
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Fechar
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;