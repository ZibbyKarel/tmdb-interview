import type { Meta, StoryObj } from '@storybook/react-vite';
import { SurfaceCard, Typography } from '@ds';

const meta = {
  title: 'Components/SurfaceCard',
  component: SurfaceCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-5xl px-6 py-10">
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <>
        <Typography
          className="mb-3 uppercase tracking-[0.16em]"
          type="text"
          variant="tertiary"
        >
          Shared UI
        </Typography>
        <Typography type="title">SurfaceCard frames content.</Typography>
        <Typography
          className="mt-5 max-w-[34rem]"
          type="text"
          variant="secondary"
        >
          It provides the glass panel styling used across the app.
        </Typography>
      </>
    ),
  },
} satisfies Meta<typeof SurfaceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Overview: Story = {
  render: () => (
    <div className="grid gap-6">
      <SurfaceCard>
        <Typography type="title">Default width</Typography>
      </SurfaceCard>
      <SurfaceCard className="max-w-xl">
        <Typography type="title">Narrow width</Typography>
      </SurfaceCard>
    </div>
  ),
};

export const Narrow: Story = {
  args: {
    className: 'max-w-xl',
  },
};
