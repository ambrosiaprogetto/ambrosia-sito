import { defineConfig } from 'astro/config';

// Sito statico. Imposta 'site' con il dominio definitivo prima del deploy.
export default defineConfig({
  site: 'https://progettoambrosia.it',
  build: {
    assets: 'assets'
  }
});
