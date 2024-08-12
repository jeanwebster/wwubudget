import { defineConfig } from 'astro/config';

export default defineConfig({
    build: {
        format: 'file'
        site: 'https://<random-string>.pages.github.io/',
        base: '/wwubudget',
      },
});
