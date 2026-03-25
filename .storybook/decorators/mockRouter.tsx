/* eslint-disable react-refresh/only-export-components */
import type { Decorator, StoryContext } from '@storybook/react-vite';
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

export const CurrentStoryContext = createContext<ReactElement | undefined>(
  undefined
);

const defaultStoryRoutePath = '/story';

const RenderStory = (): ReactElement => {
  const story = useContext(CurrentStoryContext);

  if (!story) {
    throw new Error('Storybook root not found');
  }

  return story;
};

interface MockRouterParameters {
  mockRouter?: {
    initialEntry?: string;
    routePath?: string;
  };
}

const createStoryRouter = (initialEntry: string, routePath: string) => {
  const rootRoute = createRootRoute({
    notFoundComponent: function NotFoundComponent(
      _props: NotFoundRouteProps
    ): ReactElement {
      const state = useRouterState();

      return <p>Simulated route for path {state.location.href}</p>;
    },
  });

  const storyRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: routePath,
    component: RenderStory,
  });

  rootRoute.addChildren([storyRoute]);

  return createRouter({
    history: createMemoryHistory({
      initialEntries: [initialEntry],
    }),
    routeTree: rootRoute,
  });
};

export const withMockRouter: Decorator = (Story, context) => {
  const parameters = context.parameters as StoryContext['parameters'] &
    MockRouterParameters;
  const routePath = parameters.mockRouter?.routePath ?? defaultStoryRoutePath;
  const initialEntry = parameters.mockRouter?.initialEntry ?? routePath;
  const storyRouter = createStoryRouter(initialEntry, routePath);

  return (
    <CurrentStoryContext.Provider value={<Story />}>
      <RouterProvider router={storyRouter} />
    </CurrentStoryContext.Provider>
  );
};
