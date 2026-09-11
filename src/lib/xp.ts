export function levelForXp(xp:number){return Math.floor(Math.sqrt(xp/80))+1}
export function xpForLevel(level:number){return Math.pow(level-1,2)*80}
export function streakBonus(days:number){return Math.min(2,1+days/10)}
