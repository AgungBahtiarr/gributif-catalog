import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import htmx from 'astro-htmx';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), htmx()],
  adapter: netlify()
});