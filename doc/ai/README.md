# AI Documentation

## Purpose

- Use `doc/ai` as the AI-facing companion to the human-readable documentation in `doc/`.
- Keep instructions in this directory atomic, direct, and easy for agents to scan.
- Mirror the same topics that exist in the human-readable documentation when those topics define project rules.

## Pairing Rules

- Keep one AI companion file for each human rule file in `doc/`.
- Use the same topic naming in both places whenever possible.
- Update the paired AI file whenever the human file changes.
- Update the human file whenever the AI file changes and the rule intent changes for people as well.

## Writing Style

- Write short imperative bullets.
- Prefer explicit rules over narrative explanation.
- Keep background context minimal unless it changes behavior.
- Separate workflow guides from rule guides.

## Current Pairs

- `doc/formatting.md` <-> `doc/ai/formatting.md`
- `doc/file-naming.md` <-> `doc/ai/file-naming.md`
- `doc/react-components.md` <-> `doc/ai/react-components.md`
- `doc/stories.md` <-> `doc/ai/stories.md`
- `doc/testing.md` <-> `doc/ai/testing.md`
- `doc/design-system.md` <-> `doc/ai/design-system.md`
