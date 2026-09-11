import{readdir,writeFile}from'node:fs/promises';import{join}from'node:path';
async function walk(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){if(['.git','node_modules','dist'].includes(e.name))continue;const p=join(dir,e.name);if(e.isDirectory())out.push(...await walk(p));else out.push(p.replaceAll('\\','/'))}return out}
const files=(await walk('.')).sort();await writeFile('MANIFEST.md','# LearnBuild file manifest\\n\\nTotal files: '+files.length+'\\n\\n'+files.map(x=>'- `'+x+'`').join('\\n')+'\\n');console.log(`Manifested ${files.length} files`);
