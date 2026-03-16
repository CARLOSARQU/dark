import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sistemas.unap.edu.pe/', 
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [keystatic(), react(), markdoc(), sitemap()],

  // server: Keystatic necesita SSR; las páginas con prerender=true siguen siendo estáticas
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});