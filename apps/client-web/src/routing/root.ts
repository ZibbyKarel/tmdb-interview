import { createRootRoute } from '@tanstack/react-router';
import { MainLayout } from '../app/MainLayout/MainLayout';

export const rootRoute = createRootRoute({
  component: MainLayout,
});
