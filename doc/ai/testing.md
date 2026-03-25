# Testing

## Rules

- Use Jest for unit tests.
- Use React Testing Library for React component tests.
- Use Playwright for end-to-end tests in `apps/e2e`.
- Prefer `data-testid` queries when test ids exist.
- Do not wrap the full file in one top-level `describe` block.
- Keep tests small and easy to scan.
- Keep Playwright specs under `apps/e2e/src`.
- Use `npm run e2e` for real-backend flows.
- Use `npm run e2e:mocked` for mocked flows that should not depend on the backend.
- Let Playwright start the frontend through `apps/e2e/playwright.config.ts`.
- Install Chromium locally with `npx playwright install chromium` before the first e2e run.
- Prefer mocked backend responses over patching generated hooks directly.
- For Storybook or Playwright mocked API flows, use generated MSW handlers from `libs/data-access/src/api/default/default.msw.ts`.
- Keep Storybook and Playwright on the same generated handler path for backend mocking.
- Use `withMockResponses` from `libs/data-access/utils` to attach MSW handlers to a story.
- Keep reusable payloads in `libs/data-access/mocks`.
- Override handler responses through the generated handler factory arguments.
- Keep shared selectors in `libs/element-access`.
- Use one enum per component or page for shared `data-testid` values.
