# timostaudinger.com

Personal site built with Next.js (App Router). Includes a portfolio, a writing section driven by Markdown, and a small protected area for emergency info.

## Project layout

- `src/app`: routes (App Router)
- `src/components`: shared UI and layout components
- `src/lib`: server-side content and markdown helpers
- `content/writing`: Markdown posts (frontmatter + body)
- `public`: static assets served as-is
- `assets`: design/source assets (psd, png)

## Local development

```sh
yarn install

yarn dev
```

## Build

```sh
yarn build
```

## Writing content

Add a new file to `content/writing` with frontmatter fields used by the site:

- `slug`
- `title`
- `date`
- `excerpt`
- `coverImage`
- `previewImage`
