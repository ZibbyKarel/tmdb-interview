# API Regeneration

## Purpose

- Use this guide when changing TMDB API integration, query behavior, generated models, or regeneration inputs.

## Source Of Truth

- `api-doc.json` is the downloaded TMDB OpenAPI schema snapshot.
- `orval.config.ts` defines generation behavior.
- `libs/data-access/src/api` is generated output.
- `libs/data-access/src/utils` and consumer code are the preferred places for custom hand-written behavior.

## Default Workflow

- Confirm whether the requested change belongs in generated code, generation config, or consuming app code.
- Prefer updating schema inputs, generator config, or hand-written wrappers over editing generated files directly.
- Keep custom logic outside generated folders whenever possible so regeneration remains predictable.

## When To Regenerate

- Regenerate when the API schema changes.
- Regenerate when Orval config changes.
- Regenerate when the requested improvement is really a generation issue rather than a local consumer issue.

## Command

- Use `npm run generate:api` to refresh the generated client from the schema and Orval config.

## Review Checklist

- Check whether regeneration touched only expected files.
- Verify imports and public exports still resolve cleanly for app consumers.
- Confirm hand-written helpers were not replaced with generated equivalents accidentally.
- Make sure app code still uses the generated hooks and models in a consistent way.

## Common Traps

- Do not quietly patch generated files when the same issue will reappear on the next regeneration.
- Do not mix generated edits and consumer refactors in a way that hides the real source of change.
- Do not forget to call out regeneration in the change summary when many files are updated mechanically.
