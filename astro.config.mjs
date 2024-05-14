import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/register": "https://app.formbricks.com/s/clw5sqnea02e0109cpehm035r",
  },
  integrations: [tailwind(), react({ include: ["**/react/*"] })],
  output: "server",
  adapter: vercel(),
});
