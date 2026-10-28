# SEAM site

Site for SEAM (Southeast Asian Mentorship), a program of SASC at UC Berkeley. Public URL: **https://ucbsasc.org/seam/**.

## How it's served (don't break this)

- This repo deploys to its own Netlify site, `ucbsasc-seam.netlify.app`, on every push to `main`.
- The main SASC site (repo `ucbsasc/website`) proxies `/seam` and `/seam/*` to `https://ucbsasc-seam.netlify.app/seam/...` via rules in its `netlify.toml`. Visitors never see the netlify.app URL.
- So everything here must live under `/seam/`:
  - `vite.config.ts` sets `base: '/seam/'` and `outDir: 'dist/seam'`. Keep both.
  - Reference files in `public/` as `` `${import.meta.env.BASE_URL}file.webp` `` in TSX, never `/file.webp`. Plain `/file` paths in `index.html` are rewritten by Vite and are fine.
  - Absolute URLs (og:image, og:url) use `https://ucbsasc.org/seam/...`.
- Don't rename the Netlify site. If it ever changes, the proxy rules in `ucbsasc/website/netlify.toml` must change too.
- `npm run dev` serves at `http://localhost:5173/seam/`.

## Commands

```sh
npm install
npm run dev      # dev server at /seam/
npm run build    # type-check + build to dist/seam/
npm run preview  # serve the build
```

## Layout

- `src/App.tsx`: the whole page. Content (mission, steps, history) is in arrays at the top.
- `src/styles.css`: all styles. Colors and fonts are CSS variables on `:root`.
- `public/`: images, logo, favicons.

No UI library and no router. Add React Router only if the site grows past one page (and give it `basename="/seam"`).

## Design

- Palette from the SEAM logo: jade/mint greens and lotus pinks, deep green ink for text. Use the existing `:root` variables instead of new hex values.
- Fonts: Young Serif for headings, Figtree for body (Google Fonts, loaded in `index.html`).
- Check layouts at phone width (~390px) as well as desktop.

## Copy rules

The site must not read or look AI-generated.

- No em dashes. No "not X but Y" / "X rather than Y". No reflexive lists of three.
- No puffy words: showcase, celebrate, vibrant, foster, journey, empower (outside the official mission quote), "space to connect".
- Sentence-case headings. Plain student voice with concrete details (dates, places, what's covered).
- Never invent facts to sound specific. If a date, name, or number isn't known, ask.
- Layout: no pill labels above headings, no "01/02/03" numbered sections, no rows of three identical icon cards, no generic "values" sections.

## Facts

- Contact: ucb.seam@gmail.com, Instagram @ucbseam.
- The schedule dates in `App.tsx` are from 2025 and the page says so. Update them when the next cycle is announced.
- Sign-up links are `menteeForm` and `mentorForm` at the top of `App.tsx`. Every sign-up button on the page uses them. While empty, buttons scroll to the sign-up section, which offers an "Email me when it opens" mailto instead.
- Source material (2025 manuals and slides) is in `~/Downloads/seam materials`. It includes mentee names and committee phone numbers, which stay off the site.
