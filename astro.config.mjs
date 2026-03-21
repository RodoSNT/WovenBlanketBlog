import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  // Will update to real domain when purchased. For now Vercel provides the URL.
  site: 'https://wovenblanketblog.vercel.app',
  integrations: [
    sitemap({
      serialize(item) {
        // Boost priority for niche and gift guide pages
        if (item.url.includes('/gift-guides/')) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (!item.url.endsWith('/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
});
