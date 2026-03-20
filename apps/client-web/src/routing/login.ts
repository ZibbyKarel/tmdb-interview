import { createRoute } from '@tanstack/react-router';
import { LoginPage } from '../pages/LoginPage';
import { rootRoute } from './root';
import { Routes } from './Routes';

export const route = createRoute({
  getParentRoute: () => rootRoute,
  path: Routes.Login,
  component: LoginPage,
});
