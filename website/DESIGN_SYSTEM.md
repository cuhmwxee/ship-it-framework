# Ship It! Design System

Production uses the selected Working Drawing design from `/v2/02`, without the
prototype review toolbar. This is a migration of that design, not a new variant.

## Shared presentation

- `components/PageShell.tsx` loads IBM Plex Sans and IBM Plex Mono and configures
  `components/site/Shell.tsx` with production destinations and no review toolbar.
- `components/site/Home.tsx` and `components/site/Pages.tsx` render the shared
  homepage and six interior pages. `components/site/content.ts` holds their
  existing interior-page copy; homepage copy remains shared with the prototypes.
- `components/site/Navigation.tsx` owns active-page navigation, the native mobile
  menu, Escape handling, and menu closure after navigation.
- `components/site/ProcessDiagram.tsx` owns the responsive process diagram.
  Preserve the four equally weighted concepts and all four relationships,
  including Validation returning work to Development as New Input.

## Tokens and styles

The existing CSS modules are shared without changing the selected design:

- `app/v2/_components/prototype.module.css`: base typography, navigation,
  homepage composition, and direction-specific palette tokens.
- `app/v2/_site/site.module.css`: shared interior-page layouts and diagrams.

For production, `data-direction="02"` selects white `#FFFFFF`, ink `#17252E`,
secondary text `#52626D`, rules `#CCD7DE`, and interaction blue `#194DB8`.
Use the existing `--v2-*` palette/font tokens and `--site-*` reading/layout tokens.
The module paths and token names are retained to keep prototype styles unchanged.

Legacy global tokens and `ds-*` components are retained for compatibility. They
are not the production page composition; avoid extending them for new site work.
Do not remove shared global styling without checking all `/v2` routes.

## Destinations and metadata

Shared components accept an optional `basePath`. Omit it for a prototype's
existing `/v2/<direction>` destinations; use an empty string for production URLs.
The shell's `preview` flag controls only the review toolbar, not search metadata.

Production metadata remains in `app/layout.tsx` and the seven public route files.
Prototype robots and canonical overrides remain exclusively in `/v2` route layouts.
Never import a prototype layout or metadata export into a production route.
