# Framework Diagram

This document contains the source of truth for the Ship It! Framework diagram.

```mermaid
flowchart TD

    I([Input])

    D([Development])

    V([Validation])

    S([Ship])

    I --> D
    D --> V

    V -->|Success| S
    V -->|Needs changes| I
```

## Principles

- Every change starts as Input.
- Every change goes through Development.
- Every change is validated.
- Successful validation leads to Ship.
- Failed validation creates new Input.

Everything else is implementation detail.