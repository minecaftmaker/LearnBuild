import Editor from '@monaco-editor/react';
export function CodeEditor({language='javascript',value,onChange}:{language?:string;value:string;onChange:(v:string)=>void}){return <div className="editor"><Editor theme="vs-dark" language={language} value={value} onChange={v=>onChange(v||'')} options={{minimap:{enabled:false},fontSize:14,automaticLayout:true}} /></div>}
