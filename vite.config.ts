import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Обеспечивает корректные пути к скриптам и стилям на GitHub Pages
});
