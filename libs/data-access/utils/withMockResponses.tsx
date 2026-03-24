import type { Decorator } from '@storybook/react-vite';
import type { RequestHandler } from 'msw';
import { setupWorker } from 'msw/browser';
import type * as React from 'react';
import { useEffect, useState } from 'react';

const worker = setupWorker();
let workerStartPromise: Promise<unknown> | null = null;

const ensureWorkerStarted = async (): Promise<void> => {
  if (!workerStartPromise) {
    workerStartPromise = worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    });
  }

  await workerStartPromise;
};

const MockResponsesProvider: React.FC<
  React.PropsWithChildren<{
    mockResponseHandlers: RequestHandler[];
  }>
> = ({ children, mockResponseHandlers }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isActive = true;

    const setupHandlers = async () => {
      await ensureWorkerStarted();

      worker.resetHandlers();
      worker.use(...mockResponseHandlers);

      if (isActive) {
        setIsReady(true);
      }
    };

    setIsReady(false);
    void setupHandlers();

    return () => {
      isActive = false;
      worker.resetHandlers();
    };
  }, [mockResponseHandlers]);

  if (!isReady) {
    return null;
  }

  return children;
};

export const withMockResponses =
  (...mockResponseHandlers: RequestHandler[]): Decorator =>
  (Story, _context) => (
    <MockResponsesProvider mockResponseHandlers={mockResponseHandlers}>
      <Story />
    </MockResponsesProvider>
  );
