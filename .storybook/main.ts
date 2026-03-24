import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';

const storybookDir = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    '../libs/design-system/components/**/*.stories.@(ts|tsx)',
    '../apps/client-web/src/components/**/*.stories.@(ts|tsx)',
    '../apps/client-web/src/pages/**/*.stories.@(ts|tsx)',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      resolve: {
        alias: [
          {
            find: '@data-access/msw',
            replacement: path.resolve(
              storybookDir,
              '../libs/data-access/src/api/index.msw.ts'
            ),
          },
          {
            find: '@data-access/utils',
            replacement: path.resolve(
              storybookDir,
              '../libs/data-access/utils/index.ts'
            ),
          },
          {
            find: '@data-access',
            replacement: path.resolve(
              storybookDir,
              '../libs/data-access/index.ts'
            ),
          },
          {
            find: '@ds',
            replacement: path.resolve(
              storybookDir,
              '../libs/design-system/index.ts'
            ),
          },
          {
            find: '@internationalization',
            replacement: path.resolve(
              storybookDir,
              '../libs/internationalization/index.ts'
            ),
          },
        ],
      },
      publicDir: path.resolve(storybookDir, '../public'),
    });
  },
};

export default config;
