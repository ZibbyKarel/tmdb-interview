import { IconMoon, IconSun } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Icons',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div className="grid gap-6">
      <div className="flex items-center gap-4">
        <IconSun aria-label="Sun icon" className="h-6 w-6 text-page-text" />
        <span>IconSun</span>
      </div>
      <div className="flex items-center gap-4">
        <IconMoon aria-label="Moon icon" className="h-6 w-6 text-page-text" />
        <span>IconMoon</span>
      </div>
    </div>
  ),
};
