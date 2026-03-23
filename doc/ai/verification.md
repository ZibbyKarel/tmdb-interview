# Verification

## Purpose

- Use this guide to choose the smallest set of checks that still gives confidence for the change.

## Baseline Checks

- Run `npm run test` for general unit and component coverage.
- Run `npx nx build client-web` for app changes that affect pages, routes, layout, data flow, or compile-time safety.
- Run formatting on changed files following `doc/formatting.md`.

## Change-Based Guidance

- For `apps/client-web` UI and routing changes, run `npm run test` and `npx nx build client-web`.
- For `libs/design-system` component changes, run `npm run test` and confirm the component still follows story and test expectations from `doc/design-system.md` and `doc/stories.md`.
- For `libs/data-access` generation or API shape changes, run `npm run test`, run `npx nx build client-web`, and review the generated diff carefully for accidental churn.
- For documentation-only changes, verify links, file names, and commands match the current repo layout.

## Verification Notes

- Prefer verifying the exact surface you changed instead of running unrelated checks.
- If a check cannot be run, say so clearly and explain why.
- If a command reveals a repo inconsistency, capture that as a risk instead of silently working around it.
