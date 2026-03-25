import { test as base, expect } from '@playwright/test';
import type { RequestHandler } from 'msw';
import { createMockBackendResponses } from './utils/mockBackendResponses';

const mockBackendResponses = createMockBackendResponses();
const isMockingEnabled = process.env.ENABLE_MOCKING === 'true';

interface E2ETestOptions {
  mockResponseHandlers: RequestHandler[];
}

export const test = base.extend<E2ETestOptions>({
  mockResponseHandlers: [[], { option: true }],
  page: async ({ mockResponseHandlers, page }, use) => {
    if (!isMockingEnabled) {
      await use(page);
      return;
    }

    mockBackendResponses.start();
    mockBackendResponses.reset(...mockResponseHandlers);

    await page.route('**/3/**', (route) =>
      mockBackendResponses.fulfillRoute(route)
    );

    await use(page);

    mockBackendResponses.reset();
    mockBackendResponses.stop();
  },
});

export { expect };
