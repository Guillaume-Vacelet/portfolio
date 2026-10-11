# Guillaume Vacelet — portfolio

Personal portfolio served at [www.guillaumevacelet.com](https://www.guillaumevacelet.com).
Built with Next.js (App Router), next-intl and Tailwind CSS, deployed on Vercel.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # production build, every page is pre-rendered
```

## Structure

- `src/app/[locale]/` — pages: home, and `projects/[project-name]` for each project
- `src/app/_sections/` — sections of the home page
- `src/app/_components/` — shared components
- `src/app/_data/` — projects and social links
- `src/i18n/` — locale routing, message loading and SEO helpers
- `messages/{fr,en,ko}.json` — translated texts
- `public/static/` — images, icons and fonts

## Languages

Every URL starts with its locale: `/fr`, `/en` or `/ko`. A visit to `/` is redirected
to the last language visited, otherwise the browser's language, otherwise French.

To add a language:

1. Add it to `locales` in `src/i18n/routing.ts`.
2. Add `messages/<locale>.json` with the same keys as `messages/fr.json`.
3. Add its Open Graph locale in `src/i18n/metadata.ts` and its name in
   `src/app/_components/localeSwitcher/localeSwitcherSelect.tsx`.

## Adding a project

1. Add it to `projects` in `src/app/_data/projects.ts`: slug, title, year, tech stack,
   and `url` if it has its own website.
2. Add `projectsPage.<slug>` with `desc`, `context` and `concept` to every messages file.
3. Add the image `public/static/images/<slug>-thumbnail.png`.

Projects with a `url` link to that website. The others get a page at
`/<locale>/projects/<slug>` and are listed in the sitemap.

## Configuration

`NEXT_PUBLIC_SITE_URL` sets the domain used in canonical URLs, Open Graph tags and the
sitemap. It defaults to `https://www.guillaumevacelet.com`, so it only needs to be set to
serve the site from another domain.
