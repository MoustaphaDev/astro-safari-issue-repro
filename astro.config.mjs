import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    built: {
      target: ['es2015', 'safari12', 'ios12'],
    },
  },
  // Enable Vue to support Vue components.
  integrations: [vue()],
});
