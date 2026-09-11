import {useState} from 'react';
import {loadLocal,saveLocal} from '../lib/storage';
export function useLocalProgress(){const [done,setDone]=useState<Record<string,number>>(()=>loadLocal({})); const complete=(id:string,score:number)=>{const next={...done,[id]:Math.max(done[id]||0,score)};setDone(next);saveLocal(next)};return {done,complete};}
