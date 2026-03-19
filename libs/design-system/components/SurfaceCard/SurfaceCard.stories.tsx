import type { Meta, StoryObj } from '@storybook/react-vite';
import { SurfaceCard, Typography } from '@ds';

const meta = {
  title: 'Components/SurfaceCard',
  component: SurfaceCard,
  args: {
    droppedShaddow: false,
    padding: '200',
  },
} satisfies Meta<typeof SurfaceCard>;

export default meta;

type Story = StoryObj<typeof SurfaceCard>;

export const Playground: Story = {};

export const Overview: Story = {
  render: () => (
    <div className="grid gap-6">
      <SurfaceCard padding="200">
        <Typography type="subtitle">Default card</Typography>
      </SurfaceCard>
      <SurfaceCard droppedShaddow padding="300">
        <Typography type="subtitle">Card with shadow</Typography>
      </SurfaceCard>
    </div>
  ),
};
