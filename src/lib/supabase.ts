import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Comment {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export const fetchComments = async () => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
  
  return data;
};

export const addComment = async (name: string, message: string) => {
  const { data, error } = await supabase
    .from('comments')
    .insert([{ name, message }])
    .select();
    
  if (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
  
  return data?.[0];
};
