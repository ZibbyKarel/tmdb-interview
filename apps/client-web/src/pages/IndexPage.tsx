import { useMovieTopRatedList } from '@tmdb-interview/data-access';

export function IndexPage() {
  const { data } = useMovieTopRatedList();
  const movieCount = data?.results?.length ?? 0;

  return (
    <>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-page-accent">
        Nx Monorepo
      </p>
      <h1 className="m-0 text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95]">
        Hello world from client-web
      </h1>
      <p className="mt-5 max-w-[34rem] text-[1.05rem] leading-7 text-page-muted">
        This React, TypeScript, Nx, and Tailwind app is now wired to TanStack
        Query, the generated TMDB client, and TanStack Router.
      </p>
      <p className="mt-8 text-sm text-page-muted">
        Top rated movies loaded from TMDB: {movieCount}
      </p>
    </>
  );
}
