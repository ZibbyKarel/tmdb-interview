import { Typography } from '@ds';
import { useParams } from '@tanstack/react-router';
import type * as React from 'react';
import { Routes } from '../routing/Routes';

export interface MovieDetailPageProps {}

export const MovieDetailPage: React.FC<MovieDetailPageProps> = () => {
  const { movieId } = useParams({
    from: Routes.MovieDetail as '/movies/$movieId',
  });

  return (
    <div>
      <Typography type="title">Movie detail</Typography>
      <Typography type="text" variant="secondary">
        Selected movie id: {movieId}
      </Typography>
    </div>
  );
};
