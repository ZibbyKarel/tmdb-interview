import { RouterProvider, createRouter } from '@tanstack/react-router';
import { rootRoute } from './root';
import { route as indexRoute } from './home';
import { route as loginRoute } from './login';
import { route as movieDetailRoute } from './movieDetail';
import { Routes } from './Routes';

export { Routes, rootRoute, indexRoute, loginRoute, movieDetailRoute };

export const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  movieDetailRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
