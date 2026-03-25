# TMDB Interview

Nx workspace with a React frontend, a local design system, generated TMDB API client, and a small .NET proxy backend.

Most of this repository was generated and iterated with OpenAI Codex. The point of the project is not to ship as many features as possible, but to show an architecture-first setup that stays clean, composable, and easy to extend in an agent-driven workflow.

## Focus

- architecture over feature count
- reusable UI through `libs/design-system`
- generated API layer through Orval
- backend proxy that keeps the TMDB token out of the frontend
- solid base for future growth, testing, and automation

## Repo Shape

- `apps/client-web`: main React app
- `apps/server`: .NET TMDB proxy
- `libs/design-system`: shared UI components and Storybook
- `libs/data-access`: generated API client and query hooks
- `libs/internationalization`: shared formatting helpers

## Run With Docker

Preferred way to run the project:

```bash
docker compose up --build # start the app

docker compose down # stop the up
```

## Run Locally

Install dependencies:

```bash
npm install # install dependencies

npm run start # start frotnend

npm run start:server # start backend
```

more useful commands:

```bash
npm run test
npx playwright install chromium
npm run e2e
npm run format
npm run storybook
npm run generate:api
```

E2E notes:

- Playwright tests live in `apps/e2e`
- `npm run e2e` starts the frontend automatically and runs the smoke test against it
- install the Chromium browser once with `npx playwright install chromium`

## Notes

- The frontend talks to the local .NET proxy, not directly to TMDB.
- `libs/data-access/src/api` is generated from `api-doc.json` via `orval.config.ts`.
- Storybook is focused on the design system.
- The movie list uses infinite scroll with lightweight page-level virtualization.

## Next Steps

- add a forms boundary around `react-hook-form`
- add more unit tests
- harden the backend beyond the current proxy setup
