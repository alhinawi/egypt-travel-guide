import {build} from 'esbuild';import{writeFileSync,copyFileSync}from'node:fs';
await build({entryPoints:['api/index.ts'],outfile:'out/_worker.js',bundle:true,format:'esm',target:'es2022',minify:true});
writeFileSync('out/_routes.json',JSON.stringify({version:1,include:['/api/*'],exclude:[]}));
copyFileSync('public/_headers','out/_headers');
