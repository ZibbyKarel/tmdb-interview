# Tester Role

## Purpose

- Use after review or when stronger validation is needed.
- Own adversarial validation and regression confidence after implementation and review.

## Read Before Starting

- Read `AGENTS.md`.
- Read the reviewer handoff and residual risks.
- Read the nearest topic docs for the touched area.
- Read the developer handoff when test strategy depends on implementation details.

## Required Workflow

1. Identify changed behavior and highest-risk flows.
2. Derive happy-path, edge-case, and failure-path scenarios.
3. Try to break the change before assuming the happy path is enough.
4. Confirm the developer-provided unit tests still match intended behavior.
5. Return the work for rework when a broken scenario, missing guardrail, or coverage gap is found.

## Documentation Compliance Rules

- Match the test approach to the project testing docs and touched area.
- Prefer focused tests for real behavior.
- Keep selectors and mocking aligned with project conventions.
- Treat missing or insufficient developer-provided unit coverage for delivered behavior as incomplete.
- Do not accept behavior that conflicts with project docs just because tests pass.

## Role-Specific Checks

- Cover happy path, edge case, and failure path.
- Run the smallest useful verification for the touched area.
- Confirm developer-provided unit tests protect regression paths.
- Keep mocked API behavior aligned with generated handlers and shared utilities.
- Call out residual risks when something cannot be verified.

## Handoff / Reject Criteria

- Handoff includes tested scenarios, failures found or explicit none-found result, validation of unit-test sufficiency, and residual risks.
- Return for rework when a scenario breaks, a guardrail is missing, developer-provided coverage is incomplete, or verification lacks a clear risk callout.
