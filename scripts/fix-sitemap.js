import { readFileSync, writeFileSync } from 'fs';

const file = 'dist/sitemap-index.xml';
const content = readFileSync(file, 'utf-8');
const fixed = content.replaceAll(
  'https://fuyouai.com/sitemap-',
  'https://fuyouai.com/blog/sitemap-'
);
writeFileSync(file, fixed);
console.log('Fixed sitemap-index.xml: added /blog/ prefix to child sitemap URLs');
