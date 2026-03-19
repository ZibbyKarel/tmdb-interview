import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const storybookDir = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../libs/design-system/components/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      resolve: {
        alias: {
          '@ds': path.resolve(storybookDir, '../libs/design-system/index.ts'),
          '@data-access': path.resolve(
            storybookDir,
            '../libs/data-access/index.ts'
          ),
        },
      },
    });
  },
};

export default config;
