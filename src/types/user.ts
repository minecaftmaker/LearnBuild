export type Provider='google'|'apple'|'email';
export interface Profile{ id:string; displayName:string; avatarUrl?:string; xp:number; streak:number; level:number; }
