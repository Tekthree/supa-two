import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import react from "@astrojs/react";

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-supabase-auth.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), react(), solidJs()],
  jsx: 'react',
});