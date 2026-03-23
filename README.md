# TMDB Interview

Small TMDB frontend workspace built with Nx, React, Vite, and a local design system.

This repository is notable for being almost fully generated and iterated with OpenAI Codex. The current app structure, design-system components, routing setup, theming work, and much of the implementation flow were created through Codex-driven development.

## What Is In The Repo

- `apps/client-web`: the main web application
- `libs/design-system`: reusable UI primitives, theming, and Storybook coverage
- `libs/data-access`: generated API client and query hooks
- `libs/internationalization`: small shared formatting helpers

## Highlights

- React 19 app bootstrapped in an Nx workspace
- TanStack Router for routing
- TanStack Query for server-state management
- local design system with Storybook
- generated TMDB API client via Orval
- infinite scrolling experiment using `react-intersection-observer`
- simple movie-list virtualization by rendering page placeholders outside the viewport

## Getting Started

Install dependencies:

```bash
npm install
```

Run the web app:

```bash
npm run start
```

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
libs/
  data-access/
  design-system/
  internationalization/
```

## Current Notes

- API/query code is generated, so custom behavior around paging or request interception should be designed with regeneration in mind.
- Storybook is currently focused on the design system rather than the full application.
- The repo includes project-specific rules in `AGENTS.md` and `doc/`.

## Generated Parts

### Codex-generated implementation

Most of the repository has been produced with Codex assistance, including:

- app shell and layout composition
- theme system and light/dark toggle
- design-system components and icons
- page wiring and infinite-scroll abstractions
- lightweight movie-list virtualization for paged content
- refactors and repository documentation

### Orval-generated API layer

The TMDB API layer is generated from the OpenAPI definition using Orval.

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

## Next Steps

Planned follow-up work:

- add a framework/forms library boundary so apps and shared form logic can integrate cleanly around `react-hook-form`
- generate more unit tests across the app and shared libraries
- add end-to-end tests
- add Docker support for local/dev/runtime workflows
- explore a backend layer, especially to handle adding the token header to requests more safely
