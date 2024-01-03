import { defineConfig } from "astro/config";
// import remarkToc from "remark-toc";

export default defineConfig({
  site: "https://www.jasperwang.dev/",
  markdown: {
    // remarkPlugins: [[remarkToc, { heading: "contents" }]],
    shikiConfig: {
      theme: "nord",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
