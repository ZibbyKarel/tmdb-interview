# Testing

## Rules

- Use Jest for unit tests.
- Use React Testing Library for React component tests.
- Prefer `data-testid` queries when test ids exist.
- Do not wrap the full file in one top-level `describe` block.
- Keep tests small and easy to scan.
- Prefer mocked backend responses over patching generated hooks directly.
- For Storybook or Playwright mocked API flows, use generated MSW handlers from `libs/data-access/src/api/default/default.msw.ts`.
- Keep Storybook and Playwright on the same generated handler path for backend mocking.
- Use `withMockResponses` from `libs/data-access/utils` to attach MSW handlers to a story.
- Keep reusable payloads in `libs/data-access/mocks`.
- Override handler responses through the generated handler factory arguments.
- Keep shared selectors in `libs/element-access`.
- Use one enum per component or page for shared `data-testid` values.
