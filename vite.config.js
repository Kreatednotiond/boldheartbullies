import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // repo is /boldheartbullies/
  base: "/boldheartbullies/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
