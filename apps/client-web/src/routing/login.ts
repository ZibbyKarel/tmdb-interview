import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { LoginPage } from '../pages/LoginPage';
import { Routes } from './Routes';

export const route = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.Login,
  component: LoginPage,
});
