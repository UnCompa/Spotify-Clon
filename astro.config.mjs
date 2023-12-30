import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  base: '/Spotify-Clon/',
  integrations: [tailwind(), svelte(), react()],
  output: 'server',
  adapter: vercel()
});