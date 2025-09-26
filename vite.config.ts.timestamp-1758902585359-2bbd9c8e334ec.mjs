// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { PrerenderSPAPlugin } from "file:///home/project/node_modules/vite-plugin-prerender/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    PrerenderSPAPlugin({
      staticDir: "./dist",
      routes: [
        "/",
        "/about",
        "/buy",
        "/sell",
        "/rent",
        "/landlord",
        "/services",
        "/privacy",
        "/terms",
        "/cookies"
      ],
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        headless: true,
        renderAfterDocumentEvent: "render-event",
        renderAfterTime: 2e3
      }
    })
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: true,
    rollupOptions: {
      input: {
        main: "./index.html"
      },
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: ["lucide-react"]
        }
      }
    }
  },
  optimizeDeps: {}
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBQcmVyZW5kZXJTUEFQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1wcmVyZW5kZXInO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgUHJlcmVuZGVyU1BBUGx1Z2luKHtcbiAgICAgIHN0YXRpY0RpcjogJy4vZGlzdCcsXG4gICAgICByb3V0ZXM6IFtcbiAgICAgICAgJy8nLFxuICAgICAgICAnL2Fib3V0JyxcbiAgICAgICAgJy9idXknLFxuICAgICAgICAnL3NlbGwnLCBcbiAgICAgICAgJy9yZW50JyxcbiAgICAgICAgJy9sYW5kbG9yZCcsXG4gICAgICAgICcvc2VydmljZXMnLFxuICAgICAgICAnL3ByaXZhY3knLFxuICAgICAgICAnL3Rlcm1zJyxcbiAgICAgICAgJy9jb29raWVzJ1xuICAgICAgXSxcbiAgICAgIHJlbmRlcmVyOiAnQHByZXJlbmRlcmVyL3JlbmRlcmVyLXB1cHBldGVlcicsXG4gICAgICByZW5kZXJlck9wdGlvbnM6IHtcbiAgICAgICAgaGVhZGxlc3M6IHRydWUsXG4gICAgICAgIHJlbmRlckFmdGVyRG9jdW1lbnRFdmVudDogJ3JlbmRlci1ldmVudCcsXG4gICAgICAgIHJlbmRlckFmdGVyVGltZTogMjAwMFxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIG1pbmlmeTogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiAnLi9pbmRleC5odG1sJ1xuICAgICAgfSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgaWNvbnM6IFsnbHVjaWRlLXJlYWN0J11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gIH0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixTQUFTLDBCQUEwQjtBQUduQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixtQkFBbUI7QUFBQSxNQUNqQixXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLGlCQUFpQjtBQUFBLFFBQ2YsVUFBVTtBQUFBLFFBQ1YsMEJBQTBCO0FBQUEsUUFDMUIsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osUUFBUSxDQUFDLFNBQVMsV0FBVztBQUFBLFVBQzdCLE9BQU8sQ0FBQyxjQUFjO0FBQUEsUUFDeEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWMsQ0FDZDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
