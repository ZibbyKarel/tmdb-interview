import { movieTopRatedList, useMovieTopRatedListInfinite } from '@data-access';
import { Container, Typography } from '@ds';
import { IndexPageDataTestIds } from '@element-access';
import type * as React from 'react';
import { InfiniteScrollList } from '../components/InfiniteScrollList';
import { TopRatedMoviesPageSection } from '../components/TopRatedMoviesPageSection/TopRatedMoviesPageSection';

export interface IndexPageProps {}

export const IndexPage: React.FC<IndexPageProps> = () => {
  const topRatedMoviesInfinite = useMovieTopRatedListInfinite(undefined, {
    query: {
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.data.page ?? 1;
        const totalPages = lastPage.data.total_pages ?? currentPage;

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      queryFn: ({ pageParam, signal }) =>
        movieTopRatedList(
          { page: typeof pageParam === 'number' ? pageParam : 1 },
          { signal }
        ),
    },
  });

  return (
    <div className="space-y-8">
      <Container padding={['0', '0', '100', '0']}>
        <Typography
          data-testid={IndexPageDataTestIds.PageTitle}
          type="pageTitle"
        >
          Top rated movies
        </Typography>
      </Container>

      <InfiniteScrollList
        className="space-y-6"
        useDataInfinite={topRatedMoviesInfinite}
        renderPage={(page, _pageIndex, inView) => (
          <TopRatedMoviesPageSection inView={inView} page={page.data} />
        )}
      />
    </div>
  );
};
