import {
  movieTopRatedListMockPage1,
  movieTopRatedListMockPage2,
} from '@data-access';
import { getMovieTopRatedListMockHandler } from '@data-access/msw';
import { withMockResponses } from '@data-access/utils';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IndexPage } from './IndexPage';

const customMovieTopRatedListMockPage1 = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/sra8XnL96OyLHENcglmZJg6HA8z.jpg',
      genre_ids: [28, 878],
      id: 603,
      original_language: 'en',
      original_title: 'The Matrix',
      overview:
        'A hacker learns the world he knows is a simulation and joins the fight against the machines that control it.',
      popularity: 88.123,
      poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      release_date: '1999-03-31',
      title: 'The Matrix',
      video: false,
      vote_average: 8.2,
      vote_count: 25731,
    },
    {
      adult: false,
      backdrop_path: '/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
      genre_ids: [18, 53, 35],
      id: 550,
      original_language: 'en',
      original_title: 'Fight Club',
      overview:
        'An office worker and a charismatic soap salesman create an underground club that grows into something far more dangerous.',
      popularity: 74.431,
      poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      release_date: '1999-10-15',
      title: 'Fight Club',
      video: false,
      vote_average: 8.4,
      vote_count: 29219,
    },
  ],
  total_pages: 1,
  total_results: 2,
};

const meta = {
  title: 'Pages/IndexPage',
  component: IndexPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IndexPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  decorators: [
    withMockResponses(
      getMovieTopRatedListMockHandler((info) => {
        const page = Number(
          new URL(info.request.url).searchParams.get('page') ?? '1'
        );

        return page === 2
          ? movieTopRatedListMockPage2
          : movieTopRatedListMockPage1;
      })
    ),
  ],
};

export const CustomMock: Story = {
  decorators: [
    withMockResponses(
      getMovieTopRatedListMockHandler(customMovieTopRatedListMockPage1)
    ),
  ],
};
