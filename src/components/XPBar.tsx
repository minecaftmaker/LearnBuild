export function XPBar({current,next}:{current:number;next:number}){return <div className="xpbar"><div style={{width:`${Math.min(100,current/next*100)}%`}}/><span>{current} / {next} XP</span></div>}
