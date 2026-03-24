import { useMovieCredits, useMovieDetails } from '@data-access';
import { Container, Grid, Image, Stack, SurfaceCard, Typography } from '@ds';
import { useLocalizedDate } from '@internationalization';
import { useParams } from '@tanstack/react-router';
import type * as React from 'react';
import { Routes } from '../routing/Routes';

export interface MovieDetailPageProps {}

export const MovieDetailPage: React.FC<MovieDetailPageProps> = () => {
  const { movieId } = useParams({
    from: Routes.MovieDetail as '/movies/$movieId',
  });
  const localizedDate = useLocalizedDate();
  const movieIdAsNumber = Number(movieId);
  const {
    data: movieDetailsResponse,
    error: movieDetailsError,
    isLoading: isMovieDetailsLoading,
  } = useMovieDetails(movieIdAsNumber);

  const { data: movieCreditsResponse } = useMovieCredits(movieIdAsNumber);
  const movie = movieDetailsResponse?.data;
  const cast = movieCreditsResponse?.data.cast?.slice(0, 6) ?? [];
  const poster = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : undefined;

  const metadataItems = [
    movie?.release_date
      ? {
          label: 'Release date',
          value: localizedDate(movie.release_date),
        }
      : null,
    movie?.runtime
      ? {
          label: 'Runtime',
          value: `${movie.runtime} min`,
        }
      : null,
    movie?.vote_average
      ? {
          label: 'Rating',
          value: `${movie.vote_average.toFixed(1)}/10`,
        }
      : null,
    movie?.genres?.length
      ? {
          label: 'Genres',
          value: movie.genres.map((genre) => genre.name).join(', '),
        }
      : null,
  ].filter(Boolean);

  if (isMovieDetailsLoading) {
    return (
      <Typography type="text" variant="secondary">
        Loading movie details...
      </Typography>
    );
  }

  if (movieDetailsError || !movie) {
    return (
      <Typography type="text" variant="secondary">
        We couldn't load this movie right now.
      </Typography>
    );
  }

  return (
    <Stack spacing="200" vertical>
      <Grid layout="detail" spacing="200">
        <SurfaceCard droppedShaddow>
          <Image alt={movie.title ?? 'Movie poster'} src={poster} />
        </SurfaceCard>

        <Stack spacing="150" vertical>
          <Stack spacing="75" vertical>
            <Typography type="pageTitle">
              {movie.title ?? 'Untitled movie'}
            </Typography>

            {movie.tagline ? (
              <Typography type="subtitle" variant="secondary">
                {movie.tagline}
              </Typography>
            ) : null}
          </Stack>

          {movie.overview ? (
            <Typography type="text" variant="secondary">
              {movie.overview}
            </Typography>
          ) : null}

          {metadataItems.length > 0 ? (
            <Grid layout="twoColumns" spacing="100">
              {metadataItems.map((item) => (
                <SurfaceCard droppedShaddow key={item.label}>
                  <Container padding="125">
                    <Stack spacing="25" vertical>
                      <Typography type="note" variant="tertiary">
                        {item.label}
                      </Typography>
                      <Typography type="text">{item.value}</Typography>
                    </Stack>
                  </Container>
                </SurfaceCard>
              ))}
            </Grid>
          ) : null}
        </Stack>
      </Grid>

      <Stack spacing="100" vertical>
        <Typography type="title">Cast</Typography>

        {cast.length > 0 ? (
          <Grid layout="threeColumns" spacing="100">
            {cast.map((actor) => (
              <SurfaceCard
                droppedShaddow
                key={actor.credit_id ?? actor.id ?? actor.name}
              >
                <Container padding="125">
                  <Stack spacing="25" vertical>
                    <Typography type="text">
                      {actor.name ?? actor.original_name ?? 'Unknown actor'}
                    </Typography>
                    <Typography type="note" variant="secondary">
                      {actor.character ?? 'Role unavailable'}
                    </Typography>
                  </Stack>
                </Container>
              </SurfaceCard>
            ))}
          </Grid>
        ) : (
          <Typography type="text" variant="secondary">
            Cast information is not available for this movie.
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};
