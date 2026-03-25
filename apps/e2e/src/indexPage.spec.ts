import { movieTopRatedListMockPage1 } from '@data-access';
import {
  getMovieCreditsMockHandler,
  getMovieDetailsMockHandler,
  getMovieTopRatedListMockHandler,
} from '@data-access/mocks/handlers';
import {
  MovieDetailPageDataTestIds,
  MoviePosterCardDataTestIds,
} from '@element-access';
import { expect, test } from './test';

const firstMovie = movieTopRatedListMockPage1.results?.[0];

if (!firstMovie?.id || !firstMovie.title) {
  throw new Error('Movie top rated list mock does not contain a first movie');
}

const firstMovieId = firstMovie.id;
const firstMovieTitle = firstMovie.title;

test.use({
  mockResponses: {
    handlers: [
      getMovieTopRatedListMockHandler(movieTopRatedListMockPage1),
      getMovieDetailsMockHandler({
        genres: [{ id: 18, name: 'Drama' }],
        id: firstMovieId,
        overview:
          'Framed for a crime he did not commit, Andy Dufresne forms a lasting bond inside Shawshank prison while quietly fighting for hope and freedom.',
        poster_path: firstMovie.poster_path,
        release_date: firstMovie.release_date,
        runtime: 142,
        tagline: 'Fear can hold you prisoner. Hope can set you free.',
        title: firstMovieTitle,
        vote_average: firstMovie.vote_average,
      }),
      getMovieCreditsMockHandler({
        cast: [
          {
            cast_id: 1,
            character: 'Andy Dufresne',
            credit_id: 'credit-andy-dufresne',
            id: 1,
            name: 'Tim Robbins',
            order: 0,
          },
        ],
        crew: [],
        id: firstMovieId,
      }),
    ],
  },
});

test('clicking a movie poster navigates to the detail page', async ({
  page,
}) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Top rated movies' })
  ).toBeVisible();

  await page.getByTestId(MoviePosterCardDataTestIds.Title).first().click();

  await expect(page).toHaveURL(`/movies/${firstMovieId}`);

  await expect(
    page.getByTestId(MovieDetailPageDataTestIds.PageTitle)
  ).toHaveText(firstMovieTitle);
});
