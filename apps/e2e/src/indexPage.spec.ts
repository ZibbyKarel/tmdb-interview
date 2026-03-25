import { movieTopRatedListMockPage1 } from '../../../libs/data-access';
import { getMovieTopRatedListMockHandler } from '../../../libs/data-access/mocks/handlers';
import { expect, test } from './test';

test.use({
  mockResponseHandlers: [
    getMovieTopRatedListMockHandler(movieTopRatedListMockPage1),
  ],
});

test('index page loads', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Top rated movies' })
  ).toBeVisible();
  await expect(page.locator('a[href^="/movies/"]').first()).toBeVisible();
  await expect(page.getByText('The Shawshank Redemption')).toBeVisible();
});
