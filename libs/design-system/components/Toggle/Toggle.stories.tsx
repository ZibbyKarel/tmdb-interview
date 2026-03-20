import { Toggle } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const sunIcon = (
  <svg fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 2.5V5.5M12 18.5V21.5M21.5 12H18.5M5.5 12H2.5M18.72 5.28L16.6 7.4M7.4 16.6L5.28 18.72M18.72 18.72L16.6 16.6M7.4 7.4L5.28 5.28"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

const moonIcon = (
  <svg fill="none" viewBox="0 0 24 24">
    <path
      d="M15.5 3.8A7.8 7.8 0 1 0 20.2 17 8.5 8.5 0 1 1 15.5 3.8Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  args: {
    'aria-label': 'Theme toggle',
    offIcon: sunIcon,
    onIcon: moonIcon,
    pressed: false,
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Overview: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Toggle {...args} pressed={false} />
      <Toggle {...args} pressed />
    </div>
  ),
};

export const Off: Story = {
  args: {
    pressed: false,
  },
};

export const On: Story = {
  args: {
    pressed: true,
  },
};
