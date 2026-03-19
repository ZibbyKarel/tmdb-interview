import { Stack, SurfaceCard, Typography } from '@ds';
import { useLocalizedDate } from '@internationalization';
import { Link } from '@tanstack/react-router';
import type * as React from 'react';
import { useState } from 'react';
import { Routes } from '../../routing/Routes';

export interface MoviePosterCardProps {
  id: string;
  poster: string;
  rating: number;
  releaseDate: string;
  title: string;
}

const formatRating = (rating: number): string => `${Math.round(rating * 10)}%`;

export const MoviePosterCard: React.FC<MoviePosterCardProps> = ({
  id,
  poster,
  rating,
  releaseDate,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const localizedDate = useLocalizedDate();

  return (
    <Link
      className="block w-full max-w-[220px] rounded-[28px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      params={{ movieId: id }}
      search={{}}
      to={Routes.MovieDetail as '/movies/$movieId'}
    >
      <SurfaceCard droppedShaddow={isHovered}>
        <div className="p-4">
          <Stack spacing="75" vertical>
            <img
              alt={title}
              className="aspect-[2/3] w-full rounded-[24px] object-cover"
              src={poster}
            />
            <Stack spacing="25" vertical>
              <div className="text-sm font-semibold">
                <Typography type="text">{formatRating(rating)}</Typography>
              </div>
              <div className="text-base font-semibold">
                <Typography type="subtitle">{title}</Typography>
              </div>
              <div className="text-sm">
                <Typography type="text" variant="secondary">
                  {localizedDate(releaseDate)}
                </Typography>
              </div>
            </Stack>
          </Stack>
        </div>
      </SurfaceCard>
    </Link>
  );
};
