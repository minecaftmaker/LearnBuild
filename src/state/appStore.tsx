import React,{createContext,useContext,useEffect,useMemo,useState}from'react';

type Progress={xp:number;completed:string[];streak:number;level:number};
type Store={progress:Progress;complete:(id:string,xp?:number)=>void;reset:()=>void};
const C=createContext<Store|null>(null);
const key='learnbuild:progress';
export function AppStoreProvider({children}:{children:React.ReactNode}){const[s,setS]=useState<Progress>(()=>{try{return JSON.parse(localStorage.getItem(key)||'')}catch{return{xp:0,completed:[],streak:0,level:1}}});useEffect(()=>localStorage.setItem(key,JSON.stringify(s)),[s]);const v=useMemo(()=>({progress:s,complete:(id:string,xp=25)=>setS(p=>p.completed.includes(id)?p:{...p,completed:[...p.completed,id],xp:p.xp+xp,level:Math.floor((p.xp+xp)/500)+1}),reset:()=>setS({xp:0,completed:[],streak:0,level:1})}),[s]);return <C.Provider value={v}>{children}</C.Provider>}
export const useAppStore=()=>{const c=useContext(C);if(!c)throw Error('AppStoreProvider missing');return c};
