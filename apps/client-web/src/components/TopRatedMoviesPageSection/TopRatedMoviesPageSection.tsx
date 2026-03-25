import type { MovieTopRatedList200 } from '@data-access';
import type * as React from 'react';
import { useEffect, useRef } from 'react';
import { MoviewResultsListsItemToMoviewListItem } from '../../utils/selectTopRatedMovies';
import { MoviePosterCard } from '../MoviePosterCard/MoviePosterCard';

export interface TopRatedMoviesPageSectionProps {
  inView: boolean;
  page: MovieTopRatedList200;
}

export const TopRatedMoviesPageSection: React.FC<
  TopRatedMoviesPageSectionProps
> = ({ inView, page }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const heightRef = useRef<number>(0);
  const movies = MoviewResultsListsItemToMoviewListItem(page.results ?? []);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!inView || !wrapper) {
      return;
    }

    heightRef.current = wrapper.getBoundingClientRect().height;
  }, [inView, movies.length]);

  if (!inView) {
    return (
      <svg
        aria-hidden
        className="block w-full"
        height={heightRef.current}
        role="presentation"
      />
    );
  }

  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6"
      ref={wrapperRef}
    >
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
  );
};
