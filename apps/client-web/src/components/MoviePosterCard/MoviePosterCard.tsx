import { Container, Image, Stack, SurfaceCard, Typography } from '@ds';
import { useLocalizedDate } from '@internationalization';
import { Link } from '@tanstack/react-router';
import type * as React from 'react';
import { useState } from 'react';

export interface MoviePosterCardProps {
  id: number;
  poster: string | undefined;
  rating: string;
  releaseDate: string | undefined;
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
  const localizedDate = useLocalizedDate();

  return (
    <Link
      className="block w-full max-w-[170px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      params={{ movieId: id.toString() }}
      to="/movies/$movieId"
    >
      <SurfaceCard droppedShaddow={isHovered}>
        <Stack vertical>
          <SurfaceCard>
            <Image alt={title} src={poster} />
          </SurfaceCard>

          <Container padding={['0', '0', '0', '100']}>
            <Stack vertical>
              <Typography type="text">{rating}</Typography>

              <Typography type="text" variant="primary">
                {title}
              </Typography>

              {releaseDate && (
                <Typography type="note" variant="tertiary">
                  {localizedDate(releaseDate)}
                </Typography>
              )}
            </Stack>
          </Container>
        </Stack>
      </SurfaceCard>
    </Link>
  );
};
