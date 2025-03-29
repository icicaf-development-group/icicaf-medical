// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

import node from "@astrojs/node";

import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["hardly-amusing-minnow.ngrok-free.app"],
    },
    plugins: [tailwindcss(),svgr()],
  },
  integrations: [clerk()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
