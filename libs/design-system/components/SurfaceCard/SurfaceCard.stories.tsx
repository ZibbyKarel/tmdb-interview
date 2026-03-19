import type { Meta, StoryObj } from '@storybook/react-vite';
import { SurfaceCard, Typography } from '@ds';

const meta = {
  title: 'Components/SurfaceCard',
  component: SurfaceCard,
  args: {
    droppedShaddow: false,
    children: 'There is some content of the card',
  },
} satisfies Meta<typeof SurfaceCard>;

export default meta;

type Story = StoryObj<typeof SurfaceCard>;

export const Playground: Story = {};

export const Overview: Story = {
  render: () => (
    <div className="grid gap-6">
      <SurfaceCard className="p-8">
        <Typography type="subtitle">Default card</Typography>
      </SurfaceCard>
      <SurfaceCard className="p-12" droppedShaddow>
        <Typography type="subtitle">Card with shadow</Typography>
      </SurfaceCard>
    </div>
  ),
};
