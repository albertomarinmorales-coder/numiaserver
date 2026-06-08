import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://codice-estabilidad.example",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
