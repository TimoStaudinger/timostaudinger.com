# CLAUDE.md

## Commands
- `yarn install --frozen-lockfile` — install dependencies
- `yarn build` — production build
- `yarn test` — run Playwright e2e tests (needs Chromium: `npx playwright install chromium`)
- `yarn test:update-snapshots` — update visual snapshots

Always run `yarn build` and `yarn test` before considering work done.

## Architecture
- Next.js App Router, TypeScript strict mode, React 19
- Routes grouped under `src/app/(site)/`, API routes in `src/app/api/`
- Components in `src/components/` organized by type (icons, layout, ui)
- Page-specific client components go in `_components/` directories
- Blog content as Markdown in `content/writing/` with YAML frontmatter
- Markdown pipeline: remark/rehype in `src/lib/markdown/`

## Conventions
- Default exports for all components
- PascalCase for component files, kebab-case for directories
- Styled-jsx (`<style jsx>`) for component-scoped CSS, global styles in `src/styles/`
- Server components by default, `"use client"` only when needed for interactivity
- Yarn, not npm

## Writing content
- All frontmatter fields are required: slug, title, date, excerpt, coverImage, previewImage
- Do not generate or modify writing content — that is for humans only

## Git
- Deployed to Vercel on merge to main
- Keep commit messages brief
- Do not include the Claude session URL in commits or PR descriptions
