import { Typography } from '@ds';
import { useMovieTopRatedList } from '@data-access';
import type * as React from 'react';
import { MoviePosterCard } from '../components/MoviePosterCard/MoviePosterCard';

export interface IndexPageProps {}

const getPosterUrl = (posterPath?: string): string | null => {
  if (!posterPath) {
    return null;
  }

  return `${posterPath}`;
};

export const IndexPage: React.FC<IndexPageProps> = () => {
  const {
    data = [],
    error,
    isLoading,
  } = useMovieTopRatedList(undefined, {
    query: {
      placeholderData: { results: [], total_results: 0 },
      select: (response) =>
        (response?.results ?? []).map((movie) => ({
          id: movie.id ?? NaN,
          poster: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : undefined,
          rating: `${Math.round((movie.vote_average ?? 0) * 10)}%`,
          releaseDate: movie.release_date,
          title: movie.title ?? 'Untitled movie',
        })),
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

      {!isLoading && !error && data.length === 0 && (
        <Typography type="text" variant="secondary">
          No top rated movies are available at the moment.
        </Typography>
      )}

      {!isLoading && !error && data.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6">
          {data.map((movie) => (
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
