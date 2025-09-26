import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Load property listings to generate dynamic routes for sitemap
function getListingRoutes() {
  try {
    const listingsPath = resolve(__dirname, 'src/data/listings.json');
    const listingsData = readFileSync(listingsPath, 'utf-8');
    const listings = JSON.parse(listingsData);
    
    const listingRoutes = listings.map((listing: any) => `/listings/${listing.slug}`);
    console.log(`📋 Found ${listings.length} property listings`);
    return listingRoutes;
  } catch (error) {
    console.warn('⚠️ Could not load listings.json:', error.message);
    return [];
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
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
    include: ['react', 'react-dom', 'lucide-react']
  }
});