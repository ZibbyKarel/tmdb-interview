import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const storybookDir = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../libs/components/src/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      resolve: {
        alias: {
          '@tmdb-interview/components': path.resolve(
            storybookDir,
            '../libs/components/index.ts'
          ),
          '@tmdb-interview/data-access': path.resolve(
            storybookDir,
            '../libs/data-access/index.ts'
          ),
        },
      },
    });
  },
};

export default config;
