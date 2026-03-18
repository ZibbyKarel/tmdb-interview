import type { Meta, StoryObj } from '@storybook/react-vite';
import { SurfaceCard } from '@tmdb-interview/components';

const meta = {
  title: 'Components/SurfaceCard',
  component: SurfaceCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-5xl px-6 py-10">
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-page-accent">
          Shared UI
        </p>
        <h2 className="m-0 text-4xl leading-tight">SurfaceCard frames content.</h2>
        <p className="mt-5 max-w-[34rem] text-[1.05rem] leading-7 text-page-muted">
          It provides the glass panel styling used across the app.
        </p>
      </>
    ),
  },
} satisfies Meta<typeof SurfaceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Narrow: Story = {
  args: {
    className: 'max-w-xl',
  },
};
