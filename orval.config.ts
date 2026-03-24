import { defineConfig } from 'orval';

export default defineConfig({
  tmdb: {
    input: './api-doc.json',
    output: {
      baseUrl: 'http://localhost:5137',
      mode: 'tags-split',
      target: 'libs/data-access/src/api/api.ts',
      schemas: 'libs/data-access/src/api/model',
      client: 'react-query',
      httpClient: 'fetch',
      clean: true,
      mock: {
        type: 'msw',
        indexMockFiles: true,
      },
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          useMutation: true,
          options: {
            staleTime: 10000,
          },
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'npm run format',
    },
  },
});
