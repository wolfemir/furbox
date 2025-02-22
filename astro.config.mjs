// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: cloudflare({
        imageService: "passthrough",
    }),
    site: "https://furbox.app",
    image: {
        service: passthroughImageService(),
    },
    integrations: [mdx(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});
