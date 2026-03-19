import type { Meta, StoryObj } from '@storybook/react-vite';
import { DesignSystemProvider, Typography } from '@ds';

const meta = {
  title: 'Components/DesignSystemProvider',
  component: DesignSystemProvider,
  args: {
    children: <Typography type="title">Design system context</Typography>,
  },
} satisfies Meta<typeof DesignSystemProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Overview: Story = {
  render: () => (
    <DesignSystemProvider>
      <div className="grid gap-4 p-6">
        <Typography type="pageTitle">Page title</Typography>
        <Typography type="title">Section title</Typography>
        <Typography type="text" variant="secondary">
          The provider applies theme variables and global design-system styles.
        </Typography>
      </div>
    </DesignSystemProvider>
  ),
};
