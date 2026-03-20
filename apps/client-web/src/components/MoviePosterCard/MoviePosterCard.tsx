import { Container, Stack, SurfaceCard, Typography } from '@ds';
import { useLocalizedDate } from '@internationalization';
import { Link } from '@tanstack/react-router';
import type * as React from 'react';
import { useState } from 'react';
import { Placeholder } from '../Placeholder/Placeholder';

export interface MoviePosterCardProps {
  id: string;
  poster: string;
  rating: string;
  releaseDate: string;
  title: string;
}

export const MoviePosterCard: React.FC<MoviePosterCardProps> = ({
  id,
  poster,
  rating,
  releaseDate,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const localizedDate = useLocalizedDate();

  return (
    <Link
      className="block w-full max-w-[170px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      params={{ movieId: id }}
      to="/movies/$movieId"
    >
      <SurfaceCard droppedShaddow={isHovered}>
        <Stack vertical>
          <SurfaceCard>
            <div className="relative aspect-[2/3] w-full">
              {!isImageLoaded ? <Placeholder /> : null}
              <img
                alt={title}
                className={`h-full w-full object-cover transition-opacity duration-300 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onError={() => setIsImageLoaded(true)}
                onLoad={() => setIsImageLoaded(true)}
                src={poster}
              />
            </div>
          </SurfaceCard>

          <Container padding={['0', '0', '0', '100']}>
            <Stack vertical>
              <Typography type="text">{rating}</Typography>
              <Typography type="text" variant="primary">
                {title}
              </Typography>
              <Typography type="note" variant="tertiary">
                {localizedDate(releaseDate)}
              </Typography>
            </Stack>
          </Container>
        </Stack>
      </SurfaceCard>
    </Link>
  );
};
