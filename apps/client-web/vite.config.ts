import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/client-web',
    resolve: {
      alias: {
        '@ds': path.resolve(__dirname, '../../libs/design-system/index.ts'),
        '@data-access': path.resolve(
          __dirname,
          '../../libs/data-access/index.ts'
        ),
        '@internationalization': path.resolve(
          __dirname,
          '../../libs/internationalization/index.ts'
        ),
      },
    },
    server: {
      port: 4200,
      host: '0.0.0.0',
    },
    preview: {
      port: 4300,
      host: '0.0.0.0',
    },
    plugins: [react()],
    build: {
      outDir: '../../dist/apps/client-web',
      emptyOutDir: true,
    },
  };
});
