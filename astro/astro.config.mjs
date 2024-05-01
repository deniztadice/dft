import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: 'https://deniztadice.github.io',
  base: '/dft',
  integrations: [tailwind(),astroI18next()],
  vite: {
    server: {
      fs: {
        strict: true,
        allow: ['../'],
      },
    },
  }
});