const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to load property listings and generate routes
function getListingRoutes() {
  try {
    const listingsPath = path.join(__dirname, '../src/data/listings.json');
    if (!fs.existsSync(listingsPath)) {
      console.log('📋 No listings.json found, skipping dynamic routes');
      return [];
    }
    
    const listingsData = fs.readFileSync(listingsPath, 'utf-8');
    const listings = JSON.parse(listingsData);
    
    // Generate routes for individual property listings
    const listingRoutes = listings.map(listing => `/listings/${listing.slug}`);
    
    console.log(`📋 Found ${listings.length} property listings for pre-rendering`);
    return listingRoutes;
  } catch (error) {
    console.warn('⚠️ Could not load listings.json:', error.message);
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

console.log(`🚀 Pre-rendering ${allRoutes.length} routes...`);

// Create prerender command
const routesString = allRoutes.join(' ');
const prerenderCommand = `npx prerender --routes ${routesString} --renderer @prerenderer/renderer-puppeteer --renderer-options '{"headless": true, "args": ["--no-sandbox", "--disable-setuid-sandbox"]}' --output dist`;

try {
  console.log('🔄 Starting pre-rendering process...');
  execSync(prerenderCommand, { stdio: 'inherit' });
  console.log('✅ Pre-rendering completed successfully!');
  
  // Log generated files
  console.log('\n📁 Generated static HTML files:');
  allRoutes.forEach(route => {
    const fileName = route === '/' ? 'index.html' : `${route.substring(1)}.html`;
    console.log(`   - ${fileName}`);
  });
  
} catch (error) {
  console.error('❌ Pre-rendering failed:', error.message);
  process.exit(1);
}