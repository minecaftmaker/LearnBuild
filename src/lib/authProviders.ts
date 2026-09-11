import {supabase} from './supabaseClient';
export async function emailSignUp(email:string,password:string,name:string){if(!supabase)throw new Error('Supabase is not configured');return supabase.auth.signUp({email,password,options:{data:{name}}})}
export async function emailSignIn(email:string,password:string){if(!supabase)throw new Error('Supabase is not configured');return supabase.auth.signInWithPassword({email,password})}
export async function oauth(provider:'google'|'apple'){if(!supabase)throw new Error('Supabase is not configured');return supabase.auth.signInWithOAuth({provider,options:{redirectTo:window.location.origin}})}
export async function signOut(){if(supabase)return supabase.auth.signOut()}
