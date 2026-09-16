// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

const site = process.env.SITE || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://akiarakira.github.io/Portfolio');
const base = process.env.BASE || '/Portfolio/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [alpinejs(), sitemap(), robotsTxt({
    policy: [
      { userAgent: '*', allow: '/' },
    ],
  })],

  vite: {
    plugins: [tailwindcss()]
  }
});