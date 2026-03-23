import { createRouter } from '@tanstack/react-router';
import { route as indexRoute } from './home';
import { route as movieDetailRoute } from './movieDetail';
import { rootRoute } from './root';

export { indexRoute, movieDetailRoute, rootRoute };

export const routeTree = rootRoute.addChildren([indexRoute, movieDetailRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
