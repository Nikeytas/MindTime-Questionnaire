import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // port: env.VITE_APP_PORT || 3000, // Use the specified port or fallback to a default port
    port: 3000, // Use the specified port or fallback to a default port
    proxy: {
      "/api": {
        target: "https://www.doctoranytime.gr", // Target API base URL
        changeOrigin: true,
        // secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove `/api` prefix
      },
    },
  },
});
