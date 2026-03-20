import type { MovieTopRatedList200 } from '@data-access';
import { movieTopRatedList, useMovieTopRatedListInfinite } from '@data-access';
import { Typography } from '@ds';
import type * as React from 'react';
import { InfiniteScrollList } from '../components/InfiniteScrollList/InfiniteScrollList';
import { MoviePosterCard } from '../components/MoviePosterCard/MoviePosterCard';
import { MoviewResultsListsItemToMoviewListItem } from '../utils/selectTopRatedMovies';

export interface IndexPageProps {}

export const IndexPage: React.FC<IndexPageProps> = () => {
  const topRatedMoviesInfinite = useMovieTopRatedListInfinite(undefined, {
    query: {
      initialPageParam: 1,
      getNextPageParam: (lastPage: MovieTopRatedList200) => {
        const currentPage = lastPage.page ?? 1;
        const totalPages = lastPage.total_pages ?? currentPage;

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      queryFn: ({ pageParam, signal }) =>
        movieTopRatedList(
          { page: typeof pageParam === 'number' ? pageParam : 1 },
          undefined,
          signal
        ),
    },
  });

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Typography type="pageTitle">Top rated movies</Typography>
        <Typography type="text" variant="secondary">
          Discover the most highly rated films currently returned by TMDB.
        </Typography>
      </div>

      <InfiniteScrollList
        className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6"
        useDataInfinite={topRatedMoviesInfinite}
        renderPage={(page) =>
          MoviewResultsListsItemToMoviewListItem(page.results ?? []).map(
            (movie) => (
              <MoviePosterCard
                id={movie.id}
                key={movie.id}
                poster={movie.poster}
                rating={movie.rating}
                releaseDate={movie.releaseDate}
                title={movie.title}
              />
            )
          )
        }
      />
    </div>
  );
};
