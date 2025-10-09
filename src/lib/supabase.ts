import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface AccessRequest {
  id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  status?: 'pending' | 'approved' | 'rejected';
  created_at?: string;
  updated_at?: string;
  reviewed_by?: string;
  reviewed_at?: string;
}
