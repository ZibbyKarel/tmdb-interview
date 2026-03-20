/* eslint-disable react-refresh/only-export-components */
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  useRouterState,
  type NotFoundRouteProps,
} from '@tanstack/react-router';
import { createContext, useContext, type ReactElement } from 'react';
import type { Decorator } from '@storybook/react-vite';

export const CurrentStoryContext = createContext<ReactElement | undefined>(
  undefined
);

const storyPath = '/story';

const rootRoute = createRootRoute({
  notFoundComponent: function NotFoundComponent(
    _props: NotFoundRouteProps
  ): ReactElement {
    const state = useRouterState();

    return <p>Simulated route for path {state.location.href}</p>;
  },
});

const RenderStory = (): ReactElement => {
  const story = useContext(CurrentStoryContext);

  if (!story) {
    throw new Error('Storybook root not found');
  }

  return story;
};

const storyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: storyPath,
  component: RenderStory,
});

rootRoute.addChildren([storyRoute]);

export const storyRouter = createRouter({
  history: createMemoryHistory({
    initialEntries: [storyPath],
  }),
  routeTree: rootRoute,
});

export const withMockRouter: Decorator = (Story) => (
  <CurrentStoryContext.Provider value={<Story />}>
    <RouterProvider router={storyRouter} />
  </CurrentStoryContext.Provider>
);
