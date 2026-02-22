import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",          // ✅ custom domain uses root
  build: {
    outDir: "docs",   // (keep if you're publishing from /docs)
  },
});
