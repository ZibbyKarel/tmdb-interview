import type { MovieTopRatedList200ResultsItem } from '@data-access';

export interface MovieListItem {
  id: number;
  poster?: string;
  rating: string;
  releaseDate?: string;
  title: string;
}

export const MoviewResultsListsItemToMoviewListItem = (
  items: MovieTopRatedList200ResultsItem[]
): MovieListItem[] =>
  items.map((movie) => ({
    id: movie.id ?? NaN,
    poster: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : undefined,
    rating: `${Math.round((movie.vote_average ?? 0) * 10)}%`,
    releaseDate: movie.release_date,
    title: movie.title ?? 'Untitled movie',
  }));
