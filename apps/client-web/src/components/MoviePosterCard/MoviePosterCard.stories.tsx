import { mockImage } from '@ds';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MoviePosterCard } from './MoviePosterCard';

const meta = {
  title: 'TMDB app/MoviePosterCard',
  component: MoviePosterCard,
  args: {
    id: '603',
    poster: mockImage(660, 440),
    rating: '8.4',
    releaseDate: '1999-10-15',
    title: 'Fight Club',
  },
} satisfies Meta<typeof MoviePosterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-6">
      <MoviePosterCard {...args} />
      <MoviePosterCard
        {...args}
        id="680"
        poster={mockImage(660, 441)}
        rating="79%"
        releaseDate="1994-07-06"
        title="Pulp Fiction"
      />
      <MoviePosterCard
        {...args}
        title="This is really long title of the moview that should be wrapped"
      />
    </div>
  ),
};

export const Playground: Story = {};
