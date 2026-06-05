// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: Set this to your production domain before deploying.
// It is used for canonical URLs, the sitemap, and Open Graph absolute URLs.
const SITE_URL = 'https://www.merrillfoods.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
