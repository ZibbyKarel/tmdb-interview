import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const workspaceRoot = path.resolve(__dirname, '../..');
  const env = loadEnv(mode, workspaceRoot, '');

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/client-web',
    define: {
      'process.env.API_TOKEN': JSON.stringify(env.API_TOKEN),
    },
    resolve: {
      alias: {
        '@ds': path.resolve(__dirname, '../../libs/design-system/index.ts'),
        '@data-access': path.resolve(
          __dirname,
          '../../libs/data-access/index.ts'
        ),
      },
    },
    server: {
      port: 4200,
      host: 'localhost',
    },
    preview: {
      port: 4300,
      host: 'localhost',
    },
    plugins: [react()],
    build: {
      outDir: '../../dist/apps/client-web',
      emptyOutDir: true,
    },
  };
});
