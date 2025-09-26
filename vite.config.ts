import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { PrerenderSPAPlugin } from 'vite-plugin-prerender';

// https://vitejs.dev/config/
export default defineConfig({
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
  optimizeDeps: {
  },
});