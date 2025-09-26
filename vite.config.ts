import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteSSG } from 'vite-plugin-ssg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSSG({
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
      ]
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
