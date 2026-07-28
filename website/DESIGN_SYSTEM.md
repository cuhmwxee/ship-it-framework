# Ship It! Design System

Use the existing primitives before adding page-local layout or visual styles.

## Tokens

`app/globals.css` is the single source for colors, spacing, radius and motion. Use its `--color-*`, `--space-*`, `--radius-*` and `--motion-*` tokens. Ship It! has one accent: `--color-accent`, the warm copper from the brand. Do not introduce another accent color.

## Primitives

- `PageShell` provides the shared page frame, navigation and footer.
- `Section` and `Container` provide page spacing and width.
- `PageHero` provides the page title and introductory copy.
- `Card`, `InlineLink`, `NavigationCard` and `RelatedPages` provide shared interactive and navigational patterns.

## Framework components

`FrameworkDiagram` owns the framework’s visual notation. Use `variant="overview"` for linked concepts and `variant="process"` for the delivery relationships. Do not recreate its nodes, arrows or styles elsewhere. `FrameworkStep` provides the named concept treatment used by the Framework page.

## Adding a page

Compose `PageShell`, `Section`, `PageHero` and the existing navigation/content primitives. If a pattern repeats, add a named component built from these primitives instead of copying classes into a second page.
