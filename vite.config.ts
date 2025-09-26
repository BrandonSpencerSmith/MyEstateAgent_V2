import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Create require function for CommonJS compatibility
const require = createRequire(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Load property listings to generate dynamic routes
function getListingRoutes() {
  try {
    const listingsPath = resolve(__dirname, 'src/data/listings.json');
    const listingsData = readFileSync(listingsPath, 'utf-8');
    const listings = JSON.parse(listingsData);
    
    // Generate routes for individual property listings
    const listingRoutes = listings.map((listing: any) => `/listings/${listing.slug}`);
    
    console.log(`📋 Found ${listings.length} property listings for pre-rendering`);
    return listingRoutes;
  } catch (error) {
    console.warn('⚠️ Could not load listings.json, skipping dynamic routes:', error.message);
    return [];
  }
}

// Core static routes
const coreRoutes = [
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
];

// Combine core routes with dynamic listing routes
const allRoutes = [
  ...coreRoutes,
  ...getListingRoutes()
];

console.log(`🚀 Pre-rendering ${allRoutes.length} total routes`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: './dist',
      routes: allRoutes,
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