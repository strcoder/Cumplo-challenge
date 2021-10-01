require('dotenv').config();

const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
  minify: true,
  bundle: true,
  target: 'es6',
  plugins: [sassPlugin()],
  outfile: 'public/app.js',
  entryPoints: ['src/index.tsx'],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.API_URL': `"${process.env.API_URL}"`,
  },
}).catch((e) => console.error(e.message));
