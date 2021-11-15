import prepare from './prepare.mjs';
import esbuild from 'esbuild';
import esbuildConf from '../esbuild.conf.js';

// Read env
const basePath = process.env['BASE_PATH'] || null;
const optimize = process.env['OPTIMIZE'] === 'true' || process.env['OPTIMIZE'] === '1';

// Prepare
prepare();

// Build
console.log('Building with')
console.log('  basePath:', basePath)
console.log('  optimize:', optimize ? true : false)

esbuild.buildSync(esbuildConf(false, optimize, basePath));

console.log('Complete!')