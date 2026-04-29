import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      preset: "vercel",
    }),
    react(),
    tsconfigPaths(),
  ],
<<<<<<< HEAD
});
=======
});
>>>>>>> b31ba9f (fix: configurar TanStack Start com Nitro preset vercel)
