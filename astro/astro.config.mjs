import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://deniztadice.github.io',
  base: 'dft',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "en"],
    routing: {
      prefixDefaultLocale: true
  }
  },
  vite: {
    server: {
      fs: {
        strict: true,
        allow: ['../'],
      },
    },
  }
});