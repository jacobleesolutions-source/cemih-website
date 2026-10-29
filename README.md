# cemih.com rebuild

Static rebuild of the Certified Environmental Management, Ltd. site with [Astro](https://astro.build).
There is no server code or database: the build output in `dist/` is plain HTML/CSS.

## Commands

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm install`     | Install dependencies (first time only)                    |
| `npm run dev`     | Live-reloading dev server at http://localhost:4321        |
| `npm run build`   | Build the site to `dist/` and generate the search index   |
| `npm run preview` | Serve the built `dist/` (search only works here)          |

## Where things live

- `src/data/site.ts` – phone, address, menus and the list of services
- `src/layouts/` – shared header/footer (`BaseLayout`) and inner-page layout with sidebar (`PageLayout`)
- `src/pages/` – one file per page; the URL matches the folder path
- `src/styles/global.css` – all styling (colors are variables at the top)
- `public/images/` – logo and home page banner

## Hosting notes

- The contact form uses **Netlify Forms**. On Netlify, set the notification email under
  *Forms → Notifications*. Another host needs a different form handler (e.g. Formspree).
- Build command: `npm run build`, publish directory: `dist`.
