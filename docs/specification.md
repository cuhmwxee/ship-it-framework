# Ship It! Framework Specification

Status

Draft

Version

1.0

Normative language

The key words "MUST", "MUST NOT", "SHOULD", "SHOULD NOT", and "MAY"
are to be interpreted as described in RFC 2119.

Informative documents:

- [vision.md](vision.md)
- [manifesto.md](manifesto.md)
- [scenarios/](scenarios/)

Normative documents:

- [core-concepts.md](core-concepts.md)
- [framework-diagram.md](framework-diagram.md)
- [specification.md](specification.md)

---

## 1. Purpose

This specification defines the Ship It! framework.

It specifies the minimum requirements for delivering validated software.

---

## 2. Design Goal

This specification defines the workflow.

Implementation is intentionally left outside the scope of this specification.

## 3. Scope

This specification defines the minimum workflow for software delivery.

Section 8 lists topics outside this scope.

---

## 4. Terminology

The terminology used in this specification is defined in [core-concepts.md](core-concepts.md).

This specification introduces no additional terminology.

---

## 5. Workflow

The workflow is defined by [framework-diagram.md](framework-diagram.md). It MUST follow the sequence Input, Development, Validation, and Ship.

The workflow MUST begin with Input.
Every Input MUST pass through Development.
Development MUST be followed by Validation.
Ship MUST follow successful Validation.
If Validation fails, the workflow MUST return to Input.

Implementation MAY vary.

The workflow MUST NOT.

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
- ✓ Work passes independent Validation.
- ✓ Only validated work is shipped.

Implementation details are outside the scope of this specification.

A workflow is non-compliant if it skips Development, skips Validation, or ships before Validation.

See [scenarios/](scenarios/) for informative examples.

A workflow that violates any compliance rule is not Ship It! compliant.

---

## 8. Non-goals

This specification intentionally does not define implementation details, including but not limited to:

- project management
- ceremonies
- planning
- estimating
- programming languages
- AI tooling
- CI/CD implementation
- issue tracking
- deployment technology
- team roles

---

## 9. References

- RFC 2119, "Key words for use in RFCs to Indicate Requirement Levels"