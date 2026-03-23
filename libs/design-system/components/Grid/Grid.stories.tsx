import { Grid, SurfaceCard, Typography } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const card = (label: string) => (
  <SurfaceCard droppedShaddow>
    <div className="p-6">
      <Typography type="text">{label}</Typography>
    </div>
  </SurfaceCard>
);

const meta = {
  title: 'Components/Grid',
  component: Grid,
  args: {
    children: (
      <>
        {card('Item 1')}
        {card('Item 2')}
        {card('Item 3')}
      </>
    ),
    layout: 'twoColumns',
    spacing: '100',
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Overview: Story = {
  render: (args) => (
    <div className="grid gap-8">
      <Grid {...args} layout="detail">
        {card('Poster')}
        {card('Content')}
      </Grid>

      <Grid {...args} layout="twoColumns" />

      <Grid {...args} layout="threeColumns" />
    </div>
  ),
};
