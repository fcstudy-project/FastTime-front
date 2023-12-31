import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default () =>
  defineConfig({
    plugins: [react()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @import "src/styles/abstracts/variables.scss";
        @import "src/styles/abstracts/mixins.scss";`,
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  });
