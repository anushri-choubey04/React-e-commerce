import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";



// https://vite.dev/config/
export default defineConfig({
  base: "/React-e-commerce/",
  plugins: [react(), tailwindcss()],

  "@tailwindcss/postcss": {},

  resolve: {
    alias: {
      "@": "/src",
    },
    extensions: [".js", ".jsx"],
  },
});
