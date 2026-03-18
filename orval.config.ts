import { defineConfig } from 'orval';

export default defineConfig({
  tmdb: {
    input: './api-doc.json',
    output: {
      mode: 'tags-split',
      target: 'libs/data-access/src/api.ts',
      schemas: 'libs/data-access/src/model',
      client: 'react-query',
      httpClient: 'fetch',
      clean: true,
    },
    hooks: {
      afterAllFilesWrite: 'npm run format',
    },
  },
});
