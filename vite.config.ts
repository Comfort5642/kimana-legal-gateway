import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
// removed lovable-tagger to avoid injected meta tags in build output
=======
import { componentTagger } from "lovable-tagger";
>>>>>>> 4c6226e43f5b4aac8947460dd5ea01c7a6f22cbc

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> 4c6226e43f5b4aac8947460dd5ea01c7a6f22cbc
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./"
})