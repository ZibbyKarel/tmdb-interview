import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { IndexPage } from '../pages/IndexPage';

export const route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});
