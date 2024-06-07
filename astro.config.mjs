import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://treasure-chest-1129.com',
  integrations: [partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), mdx(), sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/_mixin.scss";`
        }
      }
    }
  }
});