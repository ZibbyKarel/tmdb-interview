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
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <div className="grid gap-6">
      <div className="border border-black">
        <Container {...args} align="begin" />
      </div>
      <div className="border border-black">
        <Container {...args} align="center" />
      </div>
      <div className="border border-black">
        <Container {...args} align="end" />
      </div>
    </div>
  ),
};

export const Playground: Story = {};

export const Begin: Story = {
  render: (args) => (
    <div className="border border-black">
      <Container {...args} />
    </div>
  ),
  args: {
    align: 'begin',
  },
};

export const Center: Story = {
  render: (args) => (
    <div className="border border-black">
      <Container {...args} />
    </div>
  ),
  args: {
    align: 'center',
  },
};

export const End: Story = {
  render: (args) => (
    <div className="border border-black">
      <Container {...args} />
    </div>
  ),
  args: {
    align: 'end',
  },
};
