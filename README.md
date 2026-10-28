# ucbsasc.org/seam

Site for SEAM (Southeast Asian Mentorship), a program of [SASC](https://ucbsasc.org) at UC Berkeley.

Vite + React + TypeScript, plain CSS. Deployed on Netlify from `main`. The main site ([ucbsasc/website](https://github.com/ucbsasc/website)) proxies `/seam/*` to this Netlify site, so everything here builds under `/seam/` (see `vite.config.ts`).

```sh
npm install
npm run dev      # local dev server
npm run build    # outputs to dist/
```

Content lives in `src/App.tsx`, styles in `src/styles.css`, images in `public/`.
