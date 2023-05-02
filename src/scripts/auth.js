import { supabase } from './supabaseClient';

export async function signInWithGoogle() {
  console.log('just checking');
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if (error) {
    console.error('Error signing in:', error);
  } else {
    console.log('User signed in:', data);
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error);
  } else {
    console.log('User signed out');
  }
}
