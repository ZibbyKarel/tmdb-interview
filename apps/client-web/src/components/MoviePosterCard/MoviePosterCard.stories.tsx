import { mockImage } from '@ds';
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { createMemoryHistory } from '@tanstack/react-router';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type * as React from 'react';
import { Routes } from '../../routing/Routes';
import { MoviePosterCard } from './MoviePosterCard';

const StoryRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const rootRoute = createRootRoute({
    component: () => (
      <div className="p-8">
        <Outlet />
      </div>
    ),
  });

  const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: Routes.Index,
    component: () => <>{children}</>,
  });

  const movieDetailRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: Routes.MovieDetail,
    component: () => (
      <div className="space-y-4">
        <p>Movie detail placeholder</p>
        <Link search={{}} to={Routes.Index as '/'}>
          Back to story
        </Link>
      </div>
    ),
  });

  const storyRouter = createRouter({
    history: createMemoryHistory({
      initialEntries: ['/'],
    }),
    routeTree: rootRoute.addChildren([homeRoute, movieDetailRoute]),
  });

  return <RouterProvider router={storyRouter} />;
};

const meta = {
  title: 'TMDB app/MoviePosterCard',
  component: MoviePosterCard,
  decorators: [
    (Story) => (
      <StoryRouter>
        <Story />
      </StoryRouter>
    ),
  ],
  args: {
    id: '603',
    poster: mockImage(660, 440),
    rating: 8.4,
    releaseDate: '1999-10-15',
    title: 'Fight Club',
  },
} satisfies Meta<typeof MoviePosterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-6">
      <MoviePosterCard {...args} />
      <MoviePosterCard
        {...args}
        id="680"
        poster={mockImage(660, 441)}
        rating={7.9}
        releaseDate="1994-07-06"
        title="Pulp Fiction"
      />
    </div>
  ),
};

export const Playground: Story = {};
