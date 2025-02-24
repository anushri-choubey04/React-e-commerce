import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from 'node:process';


// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/React-e-commerce/" : "/",
  
  plugins: [react(), tailwindcss()],

  "@tailwindcss/postcss": {},

  resolve: {
    alias: {
      "@": "/src",
    },
    extensions: [".js", ".jsx"],
  },
});
