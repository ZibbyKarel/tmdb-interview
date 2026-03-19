import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageShell, SurfaceCard, Typography } from '@ds';

const meta = {
  title: 'Components/PageShell',
  component: PageShell,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: (
      <SurfaceCard>
        <Typography
          className="mb-3 uppercase tracking-[0.16em]"
          type="text"
          variant="tertiary"
        >
          Storybook
        </Typography>
        <Typography type="pageTitle">PageShell wraps the viewport.</Typography>
        <Typography
          className="mt-5 max-w-[34rem]"
          type="text"
          variant="secondary"
        >
          Use it for full-page layouts that center a primary content surface.
        </Typography>
      </SurfaceCard>
    ),
  },
} satisfies Meta<typeof PageShell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Overview: Story = {
  render: () => (
    <div className="grid gap-8">
      <PageShell>
        <SurfaceCard>
          <Typography type="title">Default spacing</Typography>
        </SurfaceCard>
      </PageShell>
      <PageShell className="px-4 py-16 sm:px-8">
        <SurfaceCard>
          <Typography type="title">Custom spacing</Typography>
        </SurfaceCard>
      </PageShell>
    </div>
  ),
};

export const WithCustomSpacing: Story = {
  args: {
    className: 'px-4 py-16 sm:px-8',
  },
};
