import type {Track} from '../types/track';
export const tracks:Track[]=[
{id:'web',title:'Web Foundations',tagline:'Understand the browser, HTML, CSS, JS and the request lifecycle.',emoji:'🌐',color:'violet',estimatedMonths:2,prerequisites:[],lessonIds:['web-01','web-02','web-03','web-04']},
{id:'git',title:'Git & Version Control',tagline:'Rebuild a tiny Git client and learn how history really works.',emoji:'🌱',color:'green',estimatedMonths:2,prerequisites:['web'],lessonIds:['git-01','git-02','git-03','git-04']},
{id:'db',title:'Databases',tagline:'Build tables, indexes, queries, transactions and a tiny SQL engine.',emoji:'🗃️',color:'blue',estimatedMonths:3,prerequisites:['web'],lessonIds:['db-01','db-02','db-03','db-04','db-05']},
{id:'server',title:'Servers & Networking',tagline:'Build TCP services, HTTP servers, proxies and observability.',emoji:'🛰️',color:'orange',estimatedMonths:3,prerequisites:['web'],lessonIds:['srv-01','srv-02','srv-03','srv-04','srv-05']},
{id:'linux',title:'Linux & Containers',tagline:'Use processes, filesystems, permissions, shells and containers.',emoji:'🐧',color:'slate',estimatedMonths:2,prerequisites:['server'],lessonIds:['lin-01','lin-02','lin-03','lin-04']},
{id:'cloud',title:'Cloud & Hosting',tagline:'Deploy websites and services, then learn what the cloud is doing.',emoji:'☁️',color:'cyan',estimatedMonths:3,prerequisites:['server','linux'],lessonIds:['cld-01','cld-02','cld-03','cld-04','cld-05']},
{id:'languages',title:'Programming Languages',tagline:'Python, JavaScript, Go, Rust, Java and C through projects.',emoji:'🧠',color:'pink',estimatedMonths:5,prerequisites:['web'],lessonIds:['lang-01','lang-02','lang-03','lang-04','lang-05','lang-06']},
{id:'build',title:'Build Systems',tagline:'Compilers, interpreters, package managers and CI.',emoji:'⚙️',color:'yellow',estimatedMonths:3,prerequisites:['languages'],lessonIds:['bld-01','bld-02','bld-03','bld-04']},
{id:'security',title:'Security & Reliability',tagline:'Threat models, auth, secrets, backups and resilient systems.',emoji:'🛡️',color:'red',estimatedMonths:3,prerequisites:['server','cloud'],lessonIds:['sec-01','sec-02','sec-03','sec-04','sec-05']}
];
