import { defineConfig } from "astro/config";
//
// https://astro.build/config
export default defineConfig({
  site: "https://www.jasperwang.dev/",
  redirects: {
    "/vimrc":
      "https://raw.githubusercontent.com/jasper-th-wang/dotfiles/refs/heads/main/.vimrc",
  },
  markdown: {
    // remarkPlugins: [[remarkToc, { heading: "contents" }]],
    shikiConfig: {
      theme: "nord",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
