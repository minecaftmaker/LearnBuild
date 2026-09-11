import {config,isAuthConfigured} from './config';
export async function signInWithProvider(provider:'google'|'apple'){if(!isAuthConfigured) throw new Error('Add Supabase credentials to enable hosted authentication.'); return {provider,url:`${config.supabaseUrl}/auth/v1/authorize?provider=${provider}`}}
export async function signInWithEmail(email:string,password:string){if(!isAuthConfigured) return {mode:'demo',email}; return {mode:'supabase',email,password}}
