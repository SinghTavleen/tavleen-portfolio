import { resolve } from 'path';
import autoprefixer from 'autoprefixer';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
  },
  server: {
    port: 8080,
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
};
