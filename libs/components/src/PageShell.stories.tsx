import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageShell, SurfaceCard } from '@tmdb-interview/components';

const meta = {
  title: 'Components/PageShell',
  component: PageShell,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: (
      <SurfaceCard>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-page-accent">
          Storybook
        </p>
        <h1 className="m-0 text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95]">
          PageShell wraps the viewport.
        </h1>
        <p className="mt-5 max-w-[34rem] text-[1.05rem] leading-7 text-page-muted">
          Use it for full-page layouts that center a primary content surface.
        </p>
      </SurfaceCard>
    ),
  },
} satisfies Meta<typeof PageShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomSpacing: Story = {
  args: {
    className: 'px-4 py-16 sm:px-8',
  },
};
