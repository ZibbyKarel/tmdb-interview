import { Container, Typography } from '@ds';
import type {
  InfiniteData,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import type * as React from 'react';
import { InView } from 'react-intersection-observer';

export interface InfiniteScrollListProps<TPage> {
  className?: string;
  renderPage: (page: TPage, index: number, inView: boolean) => React.ReactNode;
  useDataInfinite: Pick<
    UseInfiniteQueryResult<InfiniteData<TPage>, unknown>,
    | 'data'
    | 'error'
    | 'fetchNextPage'
    | 'hasNextPage'
    | 'isFetchingNextPage'
    | 'isLoading'
  >;
}

export const InfiniteScrollList = <TPage,>({
  className,
  renderPage,
  useDataInfinite,
}: InfiniteScrollListProps<TPage>) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useDataInfinite;
  const pages = data?.pages ?? [];

  return (
    <>
      <div className={className}>
        {pages.map((page, index) => (
          <InView key={index} rootMargin="320px">
            {({ inView, ref }) => (
              <div ref={ref}>{renderPage(page, index, inView)}</div>
            )}
          </InView>
        ))}
      </div>

      {(hasNextPage || isFetchingNextPage || isLoading || Boolean(error)) && (
        <Container padding={['100', '0']}>
          {isLoading && (
            <Typography type="text" variant="secondary">
              Loading...
            </Typography>
          )}

          {isFetchingNextPage && (
            <Typography type="text" variant="secondary">
              Loading...
            </Typography>
          )}

          {Boolean(error) && pages.length > 0 && (
            <Typography type="text" variant="secondary">
              Error
            </Typography>
          )}

          {hasNextPage && (
            <InView
              as="div"
              className="h-1 w-full"
              onChange={(inView) => {
                if (!inView || isFetchingNextPage) {
                  return;
                }

                void fetchNextPage();
              }}
              rootMargin="320px"
            />
          )}
        </Container>
      )}
    </>
  );
};
