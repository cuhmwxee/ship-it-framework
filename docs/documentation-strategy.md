# Website & Documentation Strategy

Status

Draft

---

# Purpose

Ship It! has two audiences:

1. Framework users
2. Framework developers

These audiences have different needs.

The website exists for users.

The GitHub repository exists for development.

---

# Guiding Principle

The website is the product.

The GitHub repository is the implementation.

Visitors should never need to browse raw Markdown files to understand or adopt the framework.

---

# Responsibilities

## Website

Purpose:

Help people understand and adopt the framework.

Contains:

- Homepage
- Getting Started
- Specification
- Examples
- FAQ
- About

The website should provide the best reading experience.

The website is optimized for people.

---

## GitHub Repository

Purpose:

Develop the framework.

Contains:

- Markdown source files
- Version history
- Issues
- Pull requests
- Release process
- Build configuration

The repository is optimized for contributors.

---

# Source of Truth

All documentation is written as Markdown.

Markdown is the canonical source.

Website pages are rendered from the same content whenever practical.

Documentation should never need to be maintained separately in two places.

---

# Homepage

The homepage answers only four questions:

- What is Ship It?
- Why does it exist?
- How does it work?
- Why should I continue reading?

The homepage intentionally avoids complete documentation.

It introduces the framework.

It does not fully explain it.

---

# Documentation Pages

## Getting Started

Purpose:

Help a developer begin using the framework within five minutes.

Focus:

Practical adoption.

---

## Specification

Purpose:

Define the framework precisely.

Audience:

Anyone implementing or evaluating the framework.

Normative.

---

## Examples

Purpose:

Show the workflow applied to different situations.

Examples include:

- New Feature
- Production Bug
- Validation Failed
- Technical Debt
- AI-assisted Development
- Continuous Delivery

Informative.

---

## FAQ

Purpose:

Answer common questions.

Includes topics such as:

- Validation
- Independent verification
- AI
- Scrum
- Kanban
- Deployment
- Roles
- Scope

Informative.

---

## About

Purpose:

Explain the project's origin.

Not framework documentation.

---

# Navigation

The website should eventually expose:

/

Getting Started

Specification

Examples

FAQ

About

The homepage remains intentionally concise.

Detailed explanations belong on dedicated pages.

---

# GitHub

The repository may continue to contain Markdown documents.

These documents exist primarily for development.

Users should discover the framework through the website rather than the repository.

---

# Future Direction

As the framework evolves:

Markdown remains the source of truth.

The website becomes the primary reading experience.

GitHub becomes the primary development experience.

# Decision Rule

When adding new documentation, always ask:

Does this help someone understand the framework?

If yes,
it probably belongs on the website.

Does this help someone develop the framework?

If yes,
it probably belongs in the GitHub repository.