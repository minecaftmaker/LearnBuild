export type Difficulty='sprout'|'builder'|'engineer'|'architect';
export interface Lesson{ id:string; slug:string; title:string; trackId:string; stage:number; xp:number; minutes:number; difficulty:Difficulty; goal:string; steps:string[]; challenge:string; }
