import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/random-post/',
  plugins: [react()],
  resolve: {
    alias: {
      '@public': '/src/public',
      '@app': '/src/app',
      '@widgets': '/src/widgets',
      '@features': '/src/features',
      '@entities': '/src/entities',
      '@shared': '/src/shared',
      '@pages': '/src/pages',
    },
  },
});
