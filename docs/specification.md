# Ship It! Framework Specification

Status

Draft

Version

1.0

Normative Language

The key words MUST, MUST NOT, SHOULD, SHOULD NOT and MAY
are to be interpreted as described in RFC 2119.

Informative documents:

- vision.md
- manifesto.md
- scenarios/

Normative documents:

- specification.md
- core-concepts.md
- framework-diagram.md

---

## 1. Purpose

This specification defines the Ship It! Framework. It establishes the required sequence of activities for software delivery and defines the minimum conditions under which work may be shipped.

---

## 2. Design Goal

The goal of the framework is to define the minimum workflow required to safely deliver software.

Everything outside this workflow is implementation detail.

## 3. Scope

This specification defines the minimum workflow required for software delivery.

Topics outside this scope are listed in Section 7.

---

## 4. Terminology

The terminology used in this specification is defined in core-concepts.md.

This specification introduces no additional terminology.

---

## 5. Workflow

The framework workflow is defined by [framework-diagram.md](framework-diagram.md). The workflow MUST follow the sequence Input, Development, Validation, and Ship.

The workflow MUST begin with Input.
Every Input MUST pass through Development before Validation.
Ship MUST follow successful Validation.
If Validation fails, the workflow MUST return to Input.

The workflow MAY be implemented using different tools, practices, or organizational structures. Such implementation choices MUST NOT change the sequence of the framework.

---

## 6. Requirements

The following requirements are mandatory:

1. Every change MUST begin as Input.
2. Every change MUST pass through Development.
3. Every change MUST be validated before Ship.
4. Ship MUST occur only after successful Validation.
5. Failed Validation MUST create new Input.
6. Validation MUST provide independent verification that the work is ready to ship.
7. The ordering of Input, Development, Validation, and Ship MUST be preserved.
8. The framework MUST remain applicable across different implementations of Development and Validation.

---

## 7. Compliance

### Compliance Rules

A workflow is Ship It! compliant if:

- ✓ Work enters the framework as Input.
- ✓ Work passes through Development.
- ✓ Work is independently validated.
- ✓ Only validated work is shipped.

Everything else is implementation detail.

A workflow is non-compliant if it skips Development, skips Validation, or ships before Validation.

See scenarios/ for informative examples.

A workflow that violates any Compliance Rule is not Ship It! compliant.

---

## 8. Non-goals

This specification does not define:

- project management
- ceremonies
- planning
- estimating
- programming languages
- AI tooling
- CI/CD implementation
- issue tracking
- deployment technology

---

## 9. References

This specification references existing project documents rather than duplicating them.

- [vision.md](vision.md) describes the purpose and audience of the project.
- [principles.md](principles.md) defines the framework principles and documentation approach.
- [core-concepts.md](core-concepts.md) defines the normative terminology used in this specification.
- [framework-diagram.md](framework-diagram.md) defines the normative workflow.
- [manifesto.md](manifesto.md) describes the project philosophy.
- [scenarios/README.md](scenarios/README.md) and the scenario documents in [scenarios/](scenarios/) provide examples and validation cases for the workflow.
