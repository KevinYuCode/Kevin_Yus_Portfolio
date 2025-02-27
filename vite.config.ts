// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // or '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    open: false,
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Ensure this points correctly to "src"
    },
  },
  // Additional config here if needed
});
