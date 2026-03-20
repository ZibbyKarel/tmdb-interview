import { defineConfig } from 'orval';

export default defineConfig({
  tmdb: {
    input: './api-doc.json',
    output: {
      baseUrl: 'https://api.themoviedb.org',
      mode: 'tags-split',
      target: 'libs/data-access/src/api/api.ts',
      schemas: 'libs/data-access/src/api/model',
      client: 'react-query',
      httpClient: 'axios',
      clean: true,
      override: {
        mutator: {
          path: './libs/data-access/src/utils/custom-fetch.ts',
          name: 'customInstance',
        },
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
