# TMDB Interview

TMDB workspace built with Nx, React, Vite, a local design system, and a .NET proxy backend.

This repository is notable for being almost fully generated and iterated with OpenAI Codex. The current app structure, design-system components, routing setup, theming work, infinite-scroll/virtualization work, backend proxy setup, and much of the implementation flow were created through Codex-driven development.

## What Is In The Repo

- `apps/client-web`: the main web application
- `apps/server`: .NET proxy backend for TMDB requests
- `libs/design-system`: reusable UI primitives, theming, and Storybook coverage
- `libs/data-access`: generated API client and query hooks
- `libs/internationalization`: small shared formatting helpers

## Highlights

- React 19 app bootstrapped in an Nx workspace
- .NET backend that proxies requests to TMDB and appends the bearer token
- TanStack Router for routing
- TanStack Query for server-state management
- local design system with Storybook
- generated TMDB API client via Orval pointed at the local backend
- infinite scrolling built with `react-intersection-observer`
- lightweight movie-list virtualization by replacing out-of-view pages with height-preserving placeholders

## Run With Docker

This is the preferred way to run the project if you do not want to install Node.js or .NET locally.

Prerequisite:

- Docker Desktop or another Docker environment with Docker Compose support

Start the app:

```bash
docker compose up --build
```

This starts:

- `client-web` on `http://localhost:4200`
- `.NET TMDB proxy server` on `http://localhost:5137`

Stop the app:

```bash
docker compose down
```

### Token Configuration

The TMDB token is now configured in the backend settings file:

- `apps/server/appsettings.json`

If you want to change the token used by the proxy, update `Tmdb:ApiToken` in `apps/server/appsettings.json` before building the Docker images.

Useful endpoints:

- frontend: `http://localhost:4200`
- backend health: `http://localhost:5137/health`

## Run Locally

### Install Dependencies

```bash
npm install
```

### Frontend

Run the frontend app:

```bash
npm run start
```

Frontend URL:

- `http://localhost:4200`

### Backend

Run the .NET proxy backend:

```bash
npm run start:server
```

Backend URL:

- `http://localhost:5137`
- `http://localhost:5137/health`

### Other Useful Commands

Run unit tests:

```bash
npm run test
```

Format the repo:

```bash
npm run format
```

## Project Structure

```text
apps/
  client-web/
  server/
libs/
  data-access/
  design-system/
  internationalization/
```

## Current Notes

- API/query code is generated, so custom behavior around paging or request interception should be designed with regeneration in mind.
- Storybook is currently focused on the design system rather than the full application.
- The repo includes project-specific rules in `AGENTS.md` and `doc/`.
- The frontend talks to the local `.NET` proxy server, which forwards requests to TMDB and appends the bearer token.
- The movie list currently uses page-based infinite scrolling plus simple virtualization for off-screen pages.

## Generated Parts

### Codex-generated implementation

Most of the repository has been produced with Codex assistance, including:

- app shell and layout composition
- theme system and light/dark toggle
- design-system components and icons
- page wiring and infinite-scroll abstractions
- lightweight movie-list virtualization for paged content
- .NET proxy backend structure and Docker setup
- refactors and repository documentation

### Orval-generated API layer

The TMDB API layer is generated from the TMDB OpenAPI definition using Orval.

The generated client is configured to call the local backend proxy instead of calling TMDB directly.

Relevant files:

- `api-doc.json`: downloaded TMDB OpenAPI schema
- `orval.config.ts`: Orval generation config
- `libs/data-access/src/api`: generated API functions, models, and TanStack Query hooks

To regenerate the API client:

```bash
npm run generate:api
```

## Design System And Storybook

The design system lives in `libs/design-system` and is intended to be the main foundation for app UI composition.

Storybook is available for reviewing and iterating on design-system components:

```bash
npm run storybook
```

## Backend Proxy

The backend lives in `apps/server` and is intentionally small.

Its job is to:

- accept requests from the frontend
- forward them to TMDB
- append the TMDB bearer token on the server side
- keep the token out of the frontend runtime

The server is currently organized into:

- `Configuration/`
- `Endpoints/`
- `Services/`

## Next Steps

Planned follow-up work:

- add a framework/forms library boundary so apps and shared form logic can integrate cleanly around `react-hook-form`
- generate more unit tests across the app and shared libraries
- add end-to-end tests
- improve and harden the backend layer beyond the current TMDB proxy
