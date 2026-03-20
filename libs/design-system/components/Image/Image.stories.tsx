import { Image, Placeholder, mockImage } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Image',
  component: Image,
  args: {
    alt: 'Placeholder landscape',
    placeholder: <Placeholder />,
    src: mockImage(360, 240),
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <div className="grid gap-6">
      <div className="h-[240px] w-[160px] overflow-hidden rounded-[24px]">
        <Image {...args} alt="Poster" src={mockImage(480, 320)} />
      </div>
      <div className="h-[180px] w-[320px] overflow-hidden rounded-[24px]">
        <Image {...args} alt="Landscape" src={mockImage(360, 640)} />
      </div>
      <div className="h-[180px] w-[320px] overflow-hidden rounded-[24px]">
        <Image {...args} alt="Missing image" src={undefined} />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  render: (args) => (
    <div className="h-[240px] w-[160px] overflow-hidden rounded-[24px]">
      <Image {...args} />
    </div>
  ),
};
