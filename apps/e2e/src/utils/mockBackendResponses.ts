import type { Route } from '@playwright/test';
import type { RequestHandler } from 'msw';
import { setupServer } from 'msw/node';

const getResponseBody = async (response: Response): Promise<Buffer> => {
  const arrayBuffer = await response.arrayBuffer();

  return Buffer.from(arrayBuffer);
};

const getRequestBody = (route: Route): Buffer | undefined => {
  const postDataBuffer = route.request().postDataBuffer();

  return postDataBuffer ?? undefined;
};

export interface MockBackendResponsesController {
  fulfillRoute: (route: Route) => Promise<void>;
  reset: (...mockResponseHandlers: RequestHandler[]) => void;
  start: () => void;
  stop: () => void;
}

export const createMockBackendResponses = (
  ...initialMockResponseHandlers: RequestHandler[]
): MockBackendResponsesController => {
  const server = setupServer(...initialMockResponseHandlers);

  return {
    start: () => {
      server.listen({ onUnhandledRequest: 'bypass' });
    },
    reset: (...mockResponseHandlers) => {
      server.resetHandlers(...mockResponseHandlers);
    },
    stop: () => {
      server.close();
    },
    fulfillRoute: async (route) => {
      const request = route.request();
      const response = await fetch(request.url(), {
        body: getRequestBody(route) as BodyInit | undefined,
        headers: request.headers(),
        method: request.method(),
      });

      await route.fulfill({
        body: await getResponseBody(response),
        headers: Object.fromEntries(response.headers.entries()),
        status: response.status,
      });
    },
  };
};
