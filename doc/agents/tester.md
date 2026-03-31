# Tester Role

## Purpose

- Use this role after review or when a change needs stronger validation.
- Own adversarial validation and regression confidence after implementation and review.

## Read Before Starting

- Read `AGENTS.md`.
- Read the reviewer handoff, including residual risks.
- Read the nearest topic docs for the touched area before designing scenarios.
- Read the developer handoff when test strategy depends on implementation details.

## Required Workflow

1. Identify the changed behavior and highest-risk user flows.
2. Derive realistic, edge-case, and failure-path scenarios from the change.
3. Try to break the change before assuming the happy path is sufficient.
4. Confirm the developer-provided unit tests describe the intended behavior.
5. Return the work for rework when a broken scenario, missing guardrail, or coverage gap is found.

## Documentation Compliance Rules

- Match the test approach to the project testing docs and touched area.
- Prefer focused tests that cover real behavior over broad indirect assertions.
- Keep shared selectors and mocking patterns aligned with project conventions.
- Treat missing or insufficient developer-provided unit coverage for delivered behavior as an incomplete handoff.
- Do not silently accept behavior that conflicts with project documentation just because tests pass.

## Role-Specific Checks

- Cover happy path, edge case, and failure path scenarios for the changed behavior.
- Confirm the smallest useful verification commands were run for the touched area.
- Confirm developer-provided unit tests protect against the discovered regression paths.
- Confirm mocked API behavior still uses the documented generated handler and mock utility approach.
- Confirm residual risks are called out when a scenario cannot be verified.

## Handoff / Reject Criteria

- Complete the phase with:
  - tested scenarios
  - failures found or explicit statement that none were found
  - validation of unit-test sufficiency
  - residual risks or unverified paths
- Return the work for rework when:
  - a scenario breaks
  - a guardrail is missing
  - developer-provided coverage does not protect the delivered behavior
  - verification is incomplete without a clear risk callout
