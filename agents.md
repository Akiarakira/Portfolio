# Devin Agent Rules & Instructions

This repository is a personal portfolio built with **Astro v5**, **Tailwind CSS v4**, **Alpine.js**, and **tsParticles**.

## 1. Environment & Package Manager
- **Package Manager**: Always use `npm`. (Do not use `pnpm`, `yarn`, or `bun`).
- **Node Context**: ESM (`"type": "module"` in `package.json`).

## 2. Commands & Workflow
- **Start Dev Server**: `npm run dev`
- **Production Build**: `npm run build`
- **Preview Build**: `npm run preview`

## 3. Project Structure
- `src/pages/` - Astro page routes.
- `src/components/` - Reusable UI components.
- `src/layouts/` - Astro layout templates.
- `src/js/` - Client-side scripts and particle configurations.
- `src/styles/` - CSS style definitions and Tailwind imports.
- `public/` - Static assets and media files.

## 4. Coding Conventions & Architecture
- **Astro Components**: Keep components modular, clean, and declarative. Handle data and props in the frontmatter script block (`---`).
- **Styling**: Prioritize **Tailwind CSS v4** utility classes. Ensure modern visual aesthetics, dark mode support, and responsive layouts across viewports.
- **Client Interactivity**: Use **Alpine.js** (`x-data`, `x-on`, `x-show`, etc.) for lightweight client-side interactions.

## 5. Verification & Quality Assurance
- **Mandatory Build Check**: Always run `npm run build` before completing any task to guarantee that the project builds clean without compilation or TypeScript/Astro errors.
- **Integrity**: Do not swallow errors or introduce silent failures.
