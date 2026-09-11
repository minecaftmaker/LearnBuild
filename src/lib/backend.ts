export type AuthUser={id:string;email:string;name:string};
const key='learnbuild:backend';
export const backend={
 async signUp(email:string,password:string,name:string){const u={id:crypto.randomUUID(),email,name,password};localStorage.setItem(key,JSON.stringify(u));return {user:{id:u.id,email:u.email,name:u.name} as AuthUser,error:null}},
 async signIn(email:string,password:string){const raw=localStorage.getItem(key);if(!raw)return{user:null,error:'No local account yet'};const u=JSON.parse(raw);if(u.email!==email||u.password!==password)return{user:null,error:'Email or password is incorrect'};return{user:{id:u.id,email:u.email,name:u.name}as AuthUser,error:null}},
 async signOut(){localStorage.removeItem(key)},
};
export const supabaseConfig={url:import.meta.env.VITE_SUPABASE_URL||'',anonKey:import.meta.env.VITE_SUPABASE_ANON_KEY||'',enabled:!!(import.meta.env.VITE_SUPABASE_URL&&import.meta.env.VITE_SUPABASE_ANON_KEY)};
