const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// Routes to pre-render
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

// Function to load property listings and generate routes
function getListingRoutes() {
  try {
    const listingsPath = path.join(__dirname, '../src/data/listings.json');
    const listingsData = fs.readFileSync(listingsPath, 'utf-8');
    const listings = JSON.parse(listingsData);
    
    const listingRoutes = listings.map(listing => `/listings/${listing.slug}`);
    console.log(`📋 Found ${listings.length} property listings for pre-rendering`);
    return listingRoutes;
  } catch (error) {
    console.warn('⚠️ Could not load listings.json, skipping dynamic routes:', error.message);
    return [];
  }
}

// Combine all routes
const allRoutes = [
  ...coreRoutes,
  ...getListingRoutes()
];

// Function to get meta tags for each route
function getMetaTagsForRoute(route) {
  const metaData = {
    '/': {
      title: 'MyEstateAgent - Find Your Perfect Home in the UK',
      description: 'Discover exceptional properties across the UK with MyEstateAgent. From charming cottages to luxury estates, we help you find the home of your dreams with expert guidance.'
    },
    '/about': {
      title: 'About MyEstateAgent - 15+ Years of Property Excellence',
      description: 'Learn about MyEstateAgent\'s 15+ years of experience helping families find their perfect homes across the UK. Award-winning service and local expertise.'
    },
    '/buy': {
      title: 'Buy Property - Houses for Sale | MyEstateAgent',
      description: 'Browse our extensive collection of properties for sale across the UK. From modern apartments to family homes, find your dream property with expert guidance.'
    },
    '/sell': {
      title: 'Sell Your Property with Confidence | MyEstateAgent',
      description: 'Get the best price for your property with our expert marketing, professional photography, and proven sales strategy. Free property valuation available.'
    },
    '/rent': {
      title: 'Rental Properties - Find Your Perfect Rental | MyEstateAgent',
      description: 'Discover exceptional rental properties across the UK. From modern apartments to family homes, find the perfect rental property with expert support.'
    },
    '/landlord': {
      title: 'Landlord Services - Property Management | MyEstateAgent',
      description: 'Stress-free property management services for landlords. Comprehensive tenant screening, rent collection, and maintenance coordination.'
    },
    '/services': {
      title: 'Property Services - Buying, Selling, Renting | MyEstateAgent',
      description: 'Comprehensive estate agency services including property buying, selling, renting, lettings, and property management across the UK.'
    },
    '/privacy': {
      title: 'Privacy Policy | MyEstateAgent',
      description: 'MyEstateAgent privacy policy explaining how we collect, use, and protect your personal information in compliance with UK data protection laws.'
    },
    '/terms': {
      title: 'Terms of Service | MyEstateAgent',
      description: 'Terms of service for MyEstateAgent estate agency services. Professional property services regulated by RICS.'
    },
    '/cookies': {
      title: 'Cookie Policy | MyEstateAgent',
      description: 'MyEstateAgent cookie policy explaining how we use cookies to enhance your browsing experience on our website.'
    }
  };

  // Default meta for property listings
  if (route.startsWith('/listings/')) {
    const slug = route.replace('/listings/', '');
    const propertyName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
      title: `${propertyName} - Property Details | MyEstateAgent`,
      description: `View detailed information about this property at ${propertyName}. Contact MyEstateAgent for viewings and more information.`
    };
  }

  return metaData[route] || metaData['/'];
}

// Function to pre-render routes using Puppeteer
async function prerenderRoutes() {
  console.log('🚀 Starting pre-rendering process...');
  
  const distPath = path.join(__dirname, '../dist');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distPath)) {
    console.error('❌ Dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Read the main index.html template
  const indexPath = path.join(distPath, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found in dist directory.');
    process.exit(1);
  }

  const indexTemplate = fs.readFileSync(indexPath, 'utf-8');
  console.log(`📄 Pre-rendering ${allRoutes.length} routes...`);

  // Launch Puppeteer for dynamic rendering
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // Start a local server for rendering
    const { spawn } = require('child_process');
    const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
      stdio: 'pipe',
      cwd: path.join(__dirname, '..')
    });

    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 3000));

    for (const route of allRoutes) {
      try {
        const page = await browser.newPage();
        
        // Navigate to the route
        const url = `http://localhost:4173${route}`;
        await page.goto(url, { 
          waitUntil: 'networkidle0',
          timeout: 30000 
        });

        // Wait for React to render
        await page.waitForTimeout(2000);

        // Get the rendered HTML
        const html = await page.content();
        
        // Add route-specific meta tags
        const metaTags = getMetaTagsForRoute(route);
        const enhancedHtml = html.replace(
          '<title>MyEstateAgent</title>',
          `<title>${metaTags.title}</title>
          <meta name="description" content="${metaTags.description}">
          <meta property="og:title" content="${metaTags.title}">
          <meta property="og:description" content="${metaTags.description}">
          <meta property="og:url" content="https://your-domain.com${route}">
          <link rel="canonical" href="https://your-domain.com${route}">`
        );

        // Determine output file path
        let fileName;
        if (route === '/') {
          fileName = 'index.html';
        } else if (route.startsWith('/listings/')) {
          // Create listings directory if it doesn't exist
          const listingsDir = path.join(distPath, 'listings');
          if (!fs.existsSync(listingsDir)) {
            fs.mkdirSync(listingsDir, { recursive: true });
          }
          const slug = route.replace('/listings/', '');
          fileName = path.join('listings', `${slug}.html`);
        } else {
          fileName = `${route.slice(1)}.html`;
        }

        const filePath = path.join(distPath, fileName);
        
        // Write the HTML file
        fs.writeFileSync(filePath, enhancedHtml);
        console.log(`✅ Generated: ${fileName}`);
        
        await page.close();
      } catch (error) {
        console.error(`❌ Failed to render ${route}:`, error.message);
      }
    }

    // Kill the preview server
    server.kill();

  } catch (error) {
    console.error('❌ Pre-rendering failed:', error);
  } finally {
    await browser.close();
  }

  console.log('🎉 Pre-rendering completed successfully!');
}

// Run the pre-rendering
prerenderRoutes().catch(console.error);