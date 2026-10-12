import { cpSync, existsSync, mkdirSync } from 'node:fs';

const source = 'frontend';
const destination = 'dist/frontend';

if (!existsSync(`${source}/index.html`)) {
  throw new Error('Missing frontend/index.html. Cannot prepare the static JobConnect frontend.');
}

mkdirSync('dist', { recursive: true });
cpSync(source, destination, { recursive: true, force: true });
console.log('Copied static JobConnect frontend to dist/frontend');
