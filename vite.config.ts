import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served at ucbsasc.org/seam/ through a proxy rule on the main SASC site,
// so everything is built under /seam/ (including the output folder).
export default defineConfig({
  base: '/seam/',
  build: { outDir: 'dist/seam', emptyOutDir: true },
  plugins: [react()],
});
