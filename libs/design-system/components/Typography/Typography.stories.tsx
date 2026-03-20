import { Typography } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    type: {
      control: 'select',
      options: ['pageTitle', 'title', 'subtitle', 'text', 'note'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
  args: {
    children: 'Typography helps centralize text styles.',
    type: 'text',
    variant: 'primary',
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Overview: Story = {
  render: () => (
    <div className="grid gap-4">
      <Typography type="pageTitle">Page title</Typography>
      <Typography type="title">Section title</Typography>
      <Typography type="subtitle">Subtitle for supporting context</Typography>
      <Typography type="text" variant="secondary">
        Body text carries longer content with a softer emphasis.
      </Typography>
      <Typography type="note" variant="secondary">
        Supporting note text for metadata and captions.
      </Typography>
      <Typography type="title" variant="tertiary">
        Neutral tertiary title
      </Typography>
    </div>
  ),
};

export const PageTitle: Story = {
  args: {
    children: 'Page title',
    type: 'pageTitle',
  },
};

export const Title: Story = {
  args: {
    children: 'Section title',
    type: 'title',
  },
};

export const Subtitle: Story = {
  args: {
    children: 'Subtitle for supporting context',
    type: 'subtitle',
  },
};

export const Text: Story = {
  args: {
    children: 'Body text carries longer content with a softer emphasis.',
    type: 'text',
    variant: 'secondary',
  },
};

export const Note: Story = {
  args: {
    children: 'Supporting note text for metadata and captions.',
    type: 'note',
    variant: 'secondary',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary text',
    type: 'title',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary text',
    type: 'title',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary text',
    type: 'title',
    variant: 'tertiary',
  },
};
