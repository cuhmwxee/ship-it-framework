# Ship Mark Guidelines

Status

Draft

Version

1.0

---

## Purpose

The Ship Mark is the visual identity of the Ship It! framework.

Like the framework itself, the mark is intentionally minimal.

---

## Official Marks

### Primary Mark

Contains:

- Sail
- Hull

Use when there is enough space to display the complete identity.

Typical use:

- Website
- Open Graph
- Presentations
- Documentation
- GitHub social preview

Asset

`primary-mark.png`

---

### Compact Mark

Contains:

- Sail

The preferred mark for most digital interfaces.

Typical use:

- Browser favicon
- Application icon
- Navigation
- Small UI elements

Asset

`compact-mark.png`

---

### Micro Mark

Contains:

- Minimal sail silhouette

Use only when very little space is available.

Typical use:

- 16×16 favicon
- Very small interface icons

Asset

`micro-mark.png`

---

## Selection Principle

Use the simplest mark that remains clearly recognizable.

Smaller contexts should use simpler marks.

---

## Color

The Ship Mark should preserve its original colors whenever possible.

Avoid recoloring the mark.

---

## Background

Preferred backgrounds:

- Dark
- White

Avoid placing the mark on visually noisy backgrounds.

---

## Clear Space

Leave sufficient empty space around the mark.

Do not allow surrounding elements to visually merge with the icon.

---

## Do Not

Do not:

- stretch
- rotate
- distort
- add effects
- add shadows
- change proportions
- modify the geometry

---

## Philosophy

The Ship Mark follows the same principle as the framework.

As the available space becomes smaller, the mark becomes simpler.

Nothing essential is lost.

Everything else is implementation detail.

## Icon Generation

The files in `public/icons/` are generated from the official marks.

Preferred source:

- compact-mark.png → favicon.ico
- compact-mark.png → favicon-32x32.png
- compact-mark.png → favicon-16x16.png
- compact-mark.png → apple-touch-icon.png

Do not edit generated icons manually. The Compact Mark is the single source of truth for all application icons. Generated icons should never be edited manually.