import { createRouter } from '@tanstack/react-router';
import { route as indexRoute } from './home';
import { route as loginRoute } from './login';
import { route as movieDetailRoute } from './movieDetail';
import { rootRoute } from './root';

export { indexRoute, loginRoute, movieDetailRoute, rootRoute };

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
