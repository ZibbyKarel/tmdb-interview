import { createRoute } from '@tanstack/react-router';
import { MovieDetailPage } from '../pages/MovieDetailPage';
import { rootRoute } from './root';
import { Routes } from './Routes';

export const route = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.MovieDetail,
  component: MovieDetailPage,
});
