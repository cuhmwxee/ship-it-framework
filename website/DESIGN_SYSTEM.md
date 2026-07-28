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

`FrameworkGraph` owns the framework’s visual notation. Use `variant="overview"` for linked concepts and `variant="process"` for the delivery relationships. Do not recreate its nodes, arrows or styles elsewhere. `FrameworkStep` provides the named concept treatment used by the Framework page.

## Diagram scale

`FrameworkGraph.tsx` exports `frameworkGraphScale`, the single scale for every Ship It! graph. Its tokens define node width and height, horizontal and vertical padding, border width, radius, gap, label size and weight, relationship width and radius, arrowhead size, and graph maximum width. New graph variants must use these tokens rather than introducing local SVG dimensions.

Nodes are primary conceptual entities. Relationships only describe how nodes relate; they must not add status or priority styling.

## Adding a page

Compose `PageShell`, `Section`, `PageHero` and the existing navigation/content primitives. If a pattern repeats, add a named component built from these primitives instead of copying classes into a second page.
