import {
  getMovieCreditsMockHandler,
  getMovieDetailsMockHandler,
} from '@data-access/mocks/handlers';
import { withMockResponses } from '@data-access/utils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MovieDetailPage } from './MovieDetailPage';

const movieId = 278;

const meta = {
  title: 'Pages/MovieDetailPage',
  component: MovieDetailPage,
  parameters: {
    layout: 'fullscreen',
    mockRouter: {
      initialEntry: `/movies/${movieId}`,
      routePath: '/movies/$movieId',
    },
  },
} satisfies Meta<typeof MovieDetailPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  decorators: [
    withMockResponses(
      getMovieDetailsMockHandler({
        genres: [{ id: 18, name: 'Drama' }],
        id: movieId,
        overview:
          'Framed for a crime he did not commit, Andy Dufresne forms a lasting bond inside Shawshank prison while quietly fighting for hope and freedom.',
        poster_path: '/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
        release_date: '1994-09-23',
        runtime: 142,
        tagline: 'Fear can hold you prisoner. Hope can set you free.',
        title: 'The Shawshank Redemption',
        vote_average: 8.7,
      }),
      getMovieCreditsMockHandler({
        cast: [
          {
            character: 'Andy Dufresne',
            credit_id: 'credit-andy-dufresne',
            id: 1,
            name: 'Tim Robbins',
          },
          {
            character: 'Ellis Boyd "Red" Redding',
            credit_id: 'credit-red-redding',
            id: 2,
            name: 'Morgan Freeman',
          },
          {
            character: 'Warden Norton',
            credit_id: 'credit-warden-norton',
            id: 3,
            name: 'Bob Gunton',
          },
        ],
        id: movieId,
      })
    ),
  ],
};
