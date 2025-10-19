import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

const packages = JSON.parse(readFileSync(new URL('./stub-packages.json', import.meta.url)));
const root = join(process.cwd(), 'tools', 'npm-stubs');

const manifestDependencies = {};

for (const pkg of packages) {
  const parts = pkg.name.split('/');
  const dir = join(root, ...parts);
  mkdirSync(dir, { recursive: true });
  const pkgJsonPath = join(dir, 'package.json');
  if (!existsSync(pkgJsonPath)) {
    const pkgJson = {
      name: pkg.name,
      version: pkg.version,
      description: `Stub module for ${pkg.name}@${pkg.version}`,
      type: 'module',
      main: 'index.js',
      exports: {
        '.': './index.js'
      }
    };
    writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + '\n');
  }
  const indexPath = join(dir, 'index.js');
  if (!existsSync(indexPath)) {
    const content = `export default {};
export const version = '${pkg.version}';
`;
    writeFileSync(indexPath, content);
  }

  const relPath = ['..', ...parts].join('/');
  manifestDependencies[pkg.name] = `file:${relPath}`;
}

const manifestDir = join(root, '__manifest__');
mkdirSync(manifestDir, { recursive: true });

const manifestPkgJsonPath = join(manifestDir, 'package.json');
const manifestPkg = {
  name: '@dpitch/stub-manifest',
  version: '1.0.0',
  private: true,
  description: 'Aggregated dependency manifest for locally vendored stub modules.',
  type: 'module',
  dependencies: manifestDependencies
};

writeFileSync(manifestPkgJsonPath, JSON.stringify(manifestPkg, null, 2) + '\n');

const manifestIndexPath = join(manifestDir, 'index.js');
if (!existsSync(manifestIndexPath)) {
  writeFileSync(manifestIndexPath, 'export {};\n');
}
