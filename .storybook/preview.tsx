import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { DesignSystemProvider } from '@ds';

const preview: Preview = {
  decorators: [
    (Story) => (
      <DesignSystemProvider>
        <Story />
      </DesignSystemProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Components'],
      },
    },
  },
};

export default preview;
