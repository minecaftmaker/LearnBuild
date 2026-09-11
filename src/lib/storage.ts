const key='learnbuild.progress.v1';
export function loadLocal<T>(fallback:T):T{try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}}
export function saveLocal<T>(value:T){localStorage.setItem(key,JSON.stringify(value))}
