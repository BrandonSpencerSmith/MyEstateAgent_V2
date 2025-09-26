import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { PrerenderSPAPlugin } from 'vite-plugin-prerender-spa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  plugins: [
    react(),
    PrerenderSPAPlugin({
      staticDir: './dist',
      routes: [
        '/',
        '/about',
        '/buy',
        '/sell', 
        '/rent',
        '/landlord',
        '/services',
        '/privacy',
        '/terms',
        '/cookies'
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        headless: true,
        renderAfterDocumentEvent: 'render-event',
        renderAfterTime: 2000
      }
    })
  ],
  optimizeDeps: {
  },
});
