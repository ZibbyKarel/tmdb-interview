import { Button } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Continue',
    fullWidth: false,
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <div className="grid max-w-[320px] gap-4">
      <Button {...args} variant="primary">
        Primary action
      </Button>
      <Button {...args} variant="secondary">
        Secondary action
      </Button>
      <Button {...args} variant="tertiary">
        Tertiary action
      </Button>
      <Button {...args} fullWidth variant="primary">
        Full width action
      </Button>
    </div>
  ),
};

export const Playground: Story = {};

export const Primary: Story = {
  args: {
    children: 'Primary action',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary action',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary action',
    variant: 'tertiary',
  },
};

export const Link: Story = {
  args: {
    children: 'Go to detail',
    href: '/movies/603',
    variant: 'secondary',
  },
};
