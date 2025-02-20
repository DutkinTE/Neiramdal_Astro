import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// ✅ Окончательная конфигурация
export default defineConfig({
  site: 'https://neiramdal.ru', // Обязательно укажи URL сайта

  integrations: [
    // 🌍 Плагин для sitemap.xml
    sitemap(),

    // 🤖 Плагин для robots.txt
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/api/'],
        },
      ],
      sitemap: 'https://neiramdal.ru/sitemap.xml',
    }),
  ],
});
