import { RouterProvider, createRouter } from '@tanstack/react-router';
import { rootRoute } from './root';
import { route as indexRoute } from './home';
import { route as loginRoute } from './login';

export { rootRoute, indexRoute, loginRoute };

export const routeTree = rootRoute.addChildren([indexRoute, loginRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
