import {useEffect,useState} from 'react';
export function useTheme(){const [dark,setDark]=useState(()=>localStorage.getItem('learnbuild.theme')==='dark');useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('learnbuild.theme',dark?'dark':'light')},[dark]);return {dark,toggle:()=>setDark(v=>!v)};}
