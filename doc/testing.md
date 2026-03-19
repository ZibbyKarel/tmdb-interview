# Testing

## Tools

- Use Jest for unit tests.
- Use React Testing Library for React component tests.

## Test Structure

- Prefer `data-testid` queries as the primary selection method when test ids exist.
- Do not wrap the whole test file in a single top-level `describe` block.

## Intention

- Keep tests simple to scan.
- Keep querying strategy consistent with component conventions.
