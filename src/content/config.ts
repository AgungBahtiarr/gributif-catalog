import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const product = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base:"../content/products/"
  }),
});
