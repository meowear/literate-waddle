import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
//import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Return middleware that runs after Vite's built-in middlewares
      return () => {
        // Add Express app as middleware for API routes
        server.middlewares.use(app);

        // Add SPA fallback - serve index.html for client-side routes
        server.middlewares.use((req, res, next) => {
          // Only intercept non-API routes that aren't files
          if (
            !req.url.startsWith("/api") &&
            !req.url.includes(".") &&
            req.method === "GET"
          ) {
            // Rewrite to index.html for SPA routing
            req.url = "/index.html";
          }
          next();
        });
      };
    },
  };
}
