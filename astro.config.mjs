import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [keystatic(), react(), markdoc()],

  // server: Keystatic necesita SSR; las páginas con getStaticPaths() siguen siendo estáticas
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});