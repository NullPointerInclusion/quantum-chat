import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr()],
  root: "./src/",
  build: { outDir: "../dist/" },
  server: { port: 3333 },
});
