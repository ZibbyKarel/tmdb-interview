import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { LoginPage } from '../pages/LoginPage';

export const route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});
