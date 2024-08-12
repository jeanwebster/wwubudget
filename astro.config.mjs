import { defineConfig } from 'astro/config';

export default defineConfig({
    build: {
        format: 'file'
        site: 'https://jeanwebster.github.io/',
        base: '/wwubudget',
      },
});
