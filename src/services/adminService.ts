import { supabase, AccessRequest } from '../lib/supabase';

export interface AdminUser {
  id: string;
  username: string;
  name: string;
  email: string;
  is_active: boolean;
  last_login?: string;
}

export const adminService = {
  async login(username: string, password: string): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    try {
      console.log('Tentando login com:', { username, password });
      console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);

      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('username', username)
        .eq('password_hash', password)
        .eq('is_active', true)
        .maybeSingle();

      console.log('Resposta do Supabase:', { data, error });

      if (error) {
        console.error('Error logging in:', error);
        return { success: false, error: `Erro do banco: ${error.message} (${error.code})` };
      }

      if (!data) {
        return { success: false, error: 'Credenciais inválidas' };
      }

      await supabase
        .from('admin_users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', data.id);

      return { success: true, user: data };
    } catch (error) {
      console.error('Unexpected error:', error);
      return { success: false, error: 'Erro ao fazer login' };
    }
  },

  async getPendingRequests(): Promise<AccessRequest[]> {
    try {
      const { data, error } = await supabase
        .from('access_requests')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching pending requests:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Unexpected error:', error);
      return [];
    }
  },

  async getAllRequests(): Promise<AccessRequest[]> {
    try {
      const { data, error } = await supabase
        .from('access_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching all requests:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Unexpected error:', error);
      return [];
    }
  },

  async approveRequest(id: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('access_requests')
        .update({
          status: 'approved',
          updated_at: new Date().toISOString(),
          reviewed_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) {
        console.error('Error approving request:', error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Unexpected error:', error);
      return { success: false, error: 'Erro ao aprovar solicitação' };
    }
  },

  async rejectRequest(id: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('access_requests')
        .update({
          status: 'rejected',
          updated_at: new Date().toISOString(),
          reviewed_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) {
        console.error('Error rejecting request:', error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Unexpected error:', error);
      return { success: false, error: 'Erro ao rejeitar solicitação' };
    }
  }
};
