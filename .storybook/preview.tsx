import type { Preview } from '@storybook/react-vite';
import { DesignSystemProvider } from '@ds';
import { withMockRouter } from './decorators/mockRouter';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global design system theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'system', title: 'System' },
        ],
      },
    },
  },
  decorators: [
    withMockRouter,
    (Story, context) => (
      <DesignSystemProvider
        style={{ background: '#ffffff', minHeight: 'auto' }}
        theme={context.globals.theme}
      >
        <Story />
      </DesignSystemProvider>
    ),
  ],
  parameters: {
    // layout: 'fullscreen',
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
