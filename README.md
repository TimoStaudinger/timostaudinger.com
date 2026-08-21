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

## Monitoring

Dynatrace RUM is injected into every page via the agentless JavaScript tag.
Set `NEXT_PUBLIC_DYNATRACE_SCRIPT_URL` at build time (in Vercel for
production) to the `src` URL of the RUM JavaScript tag from the
application's agentless monitoring setup in Dynatrace. When the variable is
unset — e.g. locally or in CI — no RUM script is loaded.

Server-side traces are exported to Dynatrace via OpenTelemetry
(`src/instrumentation.ts`, using `@vercel/otel`). Set two variables (in
Vercel for production):

- `DYNATRACE_OTLP_ENDPOINT` — the environment's OTLP base endpoint, e.g.
  `https://{your-environment-id}.live.dynatrace.com/api/v2/otlp`
- `DYNATRACE_API_TOKEN` — an access token with the
  `openTelemetryTrace.ingest` scope (keep it secret — no `NEXT_PUBLIC_`
  prefix)

When either variable is unset, no tracing is registered.

## Writing content

Add a new file to `content/writing` with frontmatter fields used by the site:

- `slug`
- `title`
- `date`
- `excerpt`
- `coverImage`
- `previewImage`
