import type {Lesson} from '../types/lesson';
export function searchLessons(lessons:Lesson[],query:string){const q=query.trim().toLowerCase();return q?lessons.filter(l=>(l.title+' '+l.goal+' '+l.trackId).toLowerCase().includes(q)):lessons}
