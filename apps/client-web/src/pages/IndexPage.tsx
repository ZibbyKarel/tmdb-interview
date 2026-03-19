import { useMovieTopRatedList } from '@tmdb-interview/data-access';
import type { FC } from 'react';

export enum IndexPageDataTestIds {
  Wrapper = 'index-page-wrapper',
  Eyebrow = 'index-page-eyebrow',
  Title = 'index-page-title',
  Description = 'index-page-description',
  MovieCount = 'index-page-movie-count',
}

export interface IndexPageProps {}

export const IndexPage: FC<IndexPageProps> = () => {
  const { data } = useMovieTopRatedList();
  const movieCount = data?.results?.length ?? 0;

  return (
    <div data-testid={IndexPageDataTestIds.Wrapper}>
      <p
        className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-page-accent"
        data-testid={IndexPageDataTestIds.Eyebrow}
      >
        Nx Monorepo
      </p>
      <h1
        className="m-0 text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95]"
        data-testid={IndexPageDataTestIds.Title}
      >
        Hello world from client-web
      </h1>
      <p
        className="mt-5 max-w-[34rem] text-[1.05rem] leading-7 text-page-muted"
        data-testid={IndexPageDataTestIds.Description}
      >
        This React, TypeScript, Nx, and Tailwind app is now wired to TanStack
        Query, the generated TMDB client, and TanStack Router.
      </p>
      <p
        className="mt-8 text-sm text-page-muted"
        data-testid={IndexPageDataTestIds.MovieCount}
      >
        Top rated movies loaded from TMDB: {movieCount}
      </p>
    </div>
  );
};
