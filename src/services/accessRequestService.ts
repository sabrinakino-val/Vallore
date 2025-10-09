import { supabase, AccessRequest } from '../lib/supabase';

export const accessRequestService = {
  async createRequest(data: Omit<AccessRequest, 'id' | 'status' | 'created_at' | 'updated_at'>): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('access_requests')
        .insert([
          {
            name: data.name,
            email: data.email,
            company: data.company || null,
            phone: data.phone || null,
            message: data.message || null,
            status: 'pending'
          }
        ]);

      if (error) {
        console.error('Error creating access request:', error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Unexpected error:', error);
      return { success: false, error: 'Erro ao enviar solicitação' };
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

  async updateRequestStatus(
    id: string,
    status: 'approved' | 'rejected'
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('access_requests')
        .update({
          status,
          updated_at: new Date().toISOString(),
          reviewed_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) {
        console.error('Error updating request status:', error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Unexpected error:', error);
      return { success: false, error: 'Erro ao atualizar status' };
    }
  }
};
