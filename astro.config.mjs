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

  // Esto es vital:
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
});