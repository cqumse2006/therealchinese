import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false
  }
});

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
  try {
    console.log('Adding comment:', { name, message });
    
    if (!name || !message) {
      throw new Error('Name and message are required');
    }

    const { data, error } = await supabase
      .from('comments')
      .insert([{ 
        name: name.trim(), 
        message: message.trim() 
      }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      });
      throw new Error(error.message || 'Failed to add comment');
    }

    console.log('Comment added successfully:', data);
    return data;
  } catch (error) {
    console.error('Error in addComment:', error);
    throw error;
  }
};
