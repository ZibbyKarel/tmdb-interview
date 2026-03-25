# Testing

## Tools

- Use Jest for unit tests.
- Use React Testing Library for React component tests.

## Test Structure

- Prefer `data-testid` queries as the primary selection method when test ids exist.
- Do not wrap the whole test file in a single top-level `describe` block.

## Mocking Backend Responses

- Prefer mocked backend responses over patching generated query hooks directly.
- For Storybook and Playwright, use generated MSW handlers from `libs/data-access/src/api/default/default.msw.ts`.
- Storybook and Playwright should share the same generated handler factories so backend mocking works the same way in both places.
- Wrap stories with `withMockResponses` from `libs/data-access/utils`.
- Override generated responses through the handler factory arguments instead of rewriting handler internals.
- Keep reusable mock payloads in `libs/data-access/mocks`.

## Element Access

- Keep shared page and component selectors in `libs/element-access`.
- Store selectors in one enum per component or page.
- Reuse those enums across unit tests, Storybook interactions, and Playwright tests.
- Prefer shared selectors over duplicating raw `data-testid` strings in test files.

## Intention

- Keep tests simple to scan.
- Keep querying strategy consistent with component conventions.
