import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "trial-astro-blog.netlify.app", // update me!
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
});
