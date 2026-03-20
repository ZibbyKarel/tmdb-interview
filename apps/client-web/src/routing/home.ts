import { createRoute } from '@tanstack/react-router';
import { IndexPage } from '../pages/IndexPage';
import { rootRoute } from './root';
import { Routes } from './Routes';

export const route = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.Index,
  component: IndexPage,
});
