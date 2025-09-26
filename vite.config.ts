import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Prerenderer } from '@prerenderer/cli';
import { PuppeteerRenderer } from '@prerenderer/renderer-puppeteer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Prerenderer({
      routes: [
        '/',
        '/about',
        '/buy',
        '/rent',
        '/sell',
        '/services',
        '/landlord',
        '/privacy',
        '/terms',
        '/cookies'
      ],
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: 'render-complete'
      })
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
