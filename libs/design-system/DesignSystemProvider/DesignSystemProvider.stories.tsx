import type { Meta, StoryObj } from '@storybook/react-vite';
import { DesignSystemProvider, Typography } from '@ds';

const meta = {
  title: 'Components/DesignSystemProvider',
  component: DesignSystemProvider,
  args: {
    children: <Typography type="title">Design system context</Typography>,
    theme: 'dark',
  },
} satisfies Meta<typeof DesignSystemProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Overview: Story = {
  render: () => (
    <div className="grid gap-8">
      <DesignSystemProvider theme="light">
        <div className="grid gap-4 p-6">
          <Typography type="pageTitle">Light theme</Typography>
          <Typography type="title">Section title</Typography>
          <Typography type="text" variant="secondary">
            The provider applies theme variables and global design-system
            styles.
          </Typography>
        </div>
      </DesignSystemProvider>
      <DesignSystemProvider theme="dark">
        <div className="grid gap-4 p-6">
          <Typography type="pageTitle">Dark theme</Typography>
          <Typography type="title">Section title</Typography>
          <Typography type="text" variant="secondary">
            The provider applies theme variables and global design-system
            styles.
          </Typography>
        </div>
      </DesignSystemProvider>
    </div>
  ),
};

export const Light: Story = {
  args: {
    theme: 'light',
  },
};

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
};

export const System: Story = {
  args: {
    theme: 'system',
  },
};
