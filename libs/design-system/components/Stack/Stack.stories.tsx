import { Stack, mockImage } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Stack',
  component: Stack,
  args: {
    spacing: '100',
    vertical: true,
    children: (
      <>
        {<img src={mockImage()} width={100} height={100} />}
        {<img src={mockImage()} width={100} height={100} />}
        {<img src={mockImage()} width={100} height={100} />}
        {<img src={mockImage()} width={100} height={100} />}
        {<img src={mockImage()} width={100} height={100} />}
      </>
    ),
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Overview: Story = {
  render: (args) => (
    <div className="grid gap-8">
      <strong>Horizontal</strong>
      <Stack spacing={args.spacing}>{args.children}</Stack>

      <strong>Vertical</strong>
      <Stack spacing={args.spacing} vertical>
        {args.children}
      </Stack>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

export const Horizontal: Story = {
  args: {
    vertical: false,
  },
};
