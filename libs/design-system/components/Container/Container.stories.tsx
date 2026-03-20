import { Container, Typography } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Container',
  component: Container,
  args: {
    align: 'begin',
    padding: '200',
    children: (
      <Typography type="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    ),
    style: { border: '1px solid black' },
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <div className="grid gap-6">
      <Container {...args} align="begin" />
      <Container {...args} align="center" />
      <Container {...args} align="end" />
    </div>
  ),
};

export const Playground: Story = {};

export const Begin: Story = {
  args: {
    align: 'begin',
  },
};

export const Center: Story = {
  args: {
    align: 'center',
  },
};

export const End: Story = {
  args: {
    align: 'end',
  },
};
