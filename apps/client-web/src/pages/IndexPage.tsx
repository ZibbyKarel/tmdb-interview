import { Typography } from '@ds';
import { useMovieTopRatedList } from '@data-access';
import type * as React from 'react';

export interface IndexPageProps {}

export const IndexPage: React.FC<IndexPageProps> = () => {
  const { data } = useMovieTopRatedList();
  const movieCount = data?.results?.length ?? 0;

  return (
    <div>
      <Typography type="text" variant="tertiary">
        Nx Monorepo
      </Typography>
      <Typography type="pageTitle">Hello world from client-web</Typography>
      <Typography type="text" variant="secondary">
        This React, TypeScript, Nx, and Tailwind app is now wired to TanStack
        Query, the generated TMDB client, and TanStack Router.
      </Typography>
      <Typography type="text" variant="secondary">
        Top rated movies loaded from TMDB: {movieCount}
      </Typography>
    </div>
  );
};
