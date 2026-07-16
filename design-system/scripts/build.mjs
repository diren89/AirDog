import { build } from 'esbuild';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

await build({
  entryPoints: [path.join(root, 'src/index.ts')],
  bundle: true,
  format: 'esm',
  outfile: path.join(root, 'dist/ds-bundle.js'),
  external: ['react', 'react-dom'],
  jsx: 'automatic',
  loader: { '.css': 'css' },
  minify: false,
  sourcemap: false,
});

execSync('npx tsc --emitDeclarationOnly', { cwd: root, stdio: 'inherit' });

console.log('Built dist/ds-bundle.js, dist/ds-bundle.css, dist/*.d.ts');
