import { Typography } from '@ds';
import type {
  InfiniteData,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import type * as React from 'react';
import { Fragment, useEffect, useEffectEvent, useRef } from 'react';

export interface InfiniteScrollListProps<TPage> {
  className?: string;
  renderPage: (page: TPage, index: number) => React.ReactNode;
  useDataInfinite: Pick<
    UseInfiniteQueryResult<InfiniteData<TPage>, Error>,
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
  const loadMoreTriggerRef = useRef<HTMLDivElement | null>(null);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useDataInfinite;
  const pages = data?.pages ?? [];

  const handleIntersection = useEffectEvent(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (!entry?.isIntersecting || !hasNextPage || isFetchingNextPage) {
        return;
      }

      void fetchNextPage();
    }
  );

  useEffect(() => {
    const target = loadMoreTriggerRef.current;

    if (!target || !hasNextPage) {
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '320px 0px',
    });

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection, hasNextPage]);

  return (
    <>
      <div className={className}>
        {pages.map((page, index) => (
          <Fragment key={index}>{renderPage(page, index)}</Fragment>
        ))}
      </div>

      {(hasNextPage || isFetchingNextPage || isLoading || error) && (
        <div className="pt-6">
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

          {error && pages.length > 0 && (
            <Typography type="text" variant="secondary">
              Error
            </Typography>
          )}

          {hasNextPage && (
            <div className="h-1 w-full" ref={loadMoreTriggerRef} />
          )}
        </div>
      )}
    </>
  );
};
