import type { Preview } from '@storybook/react-vite';
import { DesignSystemProvider } from '@ds';

const preview: Preview = {
  decorators: [
    (Story) => (
      <DesignSystemProvider theme="system">
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
