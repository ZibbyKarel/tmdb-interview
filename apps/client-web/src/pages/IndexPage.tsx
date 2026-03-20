import type { MovieTopRatedList200 } from '@data-access';
import { useMovieTopRatedListInfinite } from '@data-access';
import { Typography } from '@ds';
import type * as React from 'react';
import { MoviePosterCard } from '../components/MoviePosterCard/MoviePosterCard';
import { MoviewResultsListsItemToMoviewListItem } from '../utils/selectTopRatedMovies';

export interface IndexPageProps {}

const initialTopRatedMoviesData = {
  pageParams: [1],
  pages: [{ page: 1, results: [], total_pages: 1, total_results: 0 }],
};

export const IndexPage: React.FC<IndexPageProps> = () => {
  const {
    data = initialTopRatedMoviesData,
    error,
    isLoading,
  } = useMovieTopRatedListInfinite(
    { page: 1 },
    {
      query: {
        getNextPageParam: (lastPage: MovieTopRatedList200) => {
          const currentPage = lastPage.page ?? 1;
          const totalPages = lastPage.total_pages ?? currentPage;
          return currentPage < totalPages ? currentPage + 1 : undefined;
        },
      },
    }
  );

  const movies = data.pages.flatMap((page) =>
    MoviewResultsListsItemToMoviewListItem(page.results ?? [])
  );

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Typography type="pageTitle">Top rated movies</Typography>
        <Typography type="text" variant="secondary">
          Discover the most highly rated films currently returned by TMDB.
        </Typography>
      </div>

      {isLoading && (
        <Typography type="text" variant="secondary">
          Loading top rated movies...
        </Typography>
      )}

      {error && (
        <Typography type="text" variant="secondary">
          We couldn't load the top rated movies right now.
        </Typography>
      )}

      {!isLoading && !error && movies.length === 0 && (
        <Typography type="text" variant="secondary">
          No top rated movies are available at the moment.
        </Typography>
      )}

      {!isLoading && !error && movies.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6">
          {movies.map((movie) => (
            <MoviePosterCard
              id={movie.id}
              key={movie.id}
              poster={movie.poster}
              rating={movie.rating}
              releaseDate={movie.releaseDate}
              title={movie.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};
