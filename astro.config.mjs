// @ts-check
import { defineConfig } from 'astro/config';

// Pages build to /about-us/index.html etc. so URLs match the original site.
export default defineConfig({
  site: 'https://www.cemih.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
