import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      preset: "vercel",
      externals: {
        external: [
          "@supabase/supabase-js",
          "@supabase/auth-js",
          "@supabase/realtime-js",
          "@supabase/postgrest-js",
          "tslib",
        ],
      },
    }),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
});