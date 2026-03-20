import { Placeholder } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Placeholder',
  component: Placeholder,
} satisfies Meta<typeof Placeholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="grid gap-6">
      <div className="relative h-[180px] w-[120px] overflow-hidden rounded-[24px]">
        <Placeholder />
      </div>
      <div className="relative h-[240px] w-[360px] overflow-hidden rounded-[24px]">
        <Placeholder />
      </div>
      <div className="relative h-[64px] w-full max-w-[360px] overflow-hidden rounded-[16px]">
        <Placeholder />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  render: () => (
    <div className="relative h-[240px] w-[160px] overflow-hidden rounded-[24px]">
      <Placeholder />
    </div>
  ),
};
