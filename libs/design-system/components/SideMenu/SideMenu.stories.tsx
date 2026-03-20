import { SideMenu } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/SideMenu',
  component: SideMenu,
  args: {
    title: 'Navigation',
    items: [
      { href: '/', isActive: true, label: 'Home' },
      { href: '/login', label: 'Login' },
      { href: '/movies/603', label: 'Movie detail' },
    ],
  },
} satisfies Meta<typeof SideMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <div className="w-full max-w-[260px]">
      <SideMenu {...args} />
    </div>
  ),
};

export const Playground: Story = {};
