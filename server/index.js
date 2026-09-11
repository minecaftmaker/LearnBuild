import http from 'node:http';
const port=Number(process.env.PORT||8787);
const server=http.createServer((req,res)=>{res.setHeader('content-type','application/json');if(req.url==='/health'){res.end(JSON.stringify({ok:true,service:'learnbuild-api'}));return}res.statusCode=404;res.end(JSON.stringify({error:'not found'}))});
server.listen(port,()=>console.log(`LearnBuild API on :${port}`));
