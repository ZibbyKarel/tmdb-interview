import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, SurfaceCard, Typography } from '@ds';

const meta = {
  title: 'Components/Stack',
  component: Stack,
  args: {
    spacing: '100',
    vertical: true,
    children: (
      <>
        <SurfaceCard className="max-w-sm">
          <Typography type="title">First item</Typography>
        </SurfaceCard>
        <SurfaceCard className="max-w-sm">
          <Typography type="title">Second item</Typography>
        </SurfaceCard>
      </>
    ),
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Overview: Story = {
  render: () => (
    <div className="grid gap-8">
      <Stack spacing="100">
        <SurfaceCard className="max-w-sm">
          <Typography type="title">Vertical stack</Typography>
        </SurfaceCard>
        <SurfaceCard className="max-w-sm">
          <Typography type="text" variant="secondary">
            Default vertical layout with token-based spacing.
          </Typography>
        </SurfaceCard>
      </Stack>
      <Stack spacing="150" vertical={false}>
        <SurfaceCard className="max-w-sm">
          <Typography type="title">Horizontal stack</Typography>
        </SurfaceCard>
        <SurfaceCard className="max-w-sm">
          <Typography type="text" variant="secondary">
            Horizontal layout with larger spacing.
          </Typography>
        </SurfaceCard>
      </Stack>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

export const Horizontal: Story = {
  args: {
    vertical: false,
  },
};
