const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Routes to pre-render
const routes = [
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

// Function to generate static HTML for each route
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
  const indexTemplate = fs.readFileSync(indexPath, 'utf-8');

  console.log(`📄 Pre-rendering ${routes.length} routes...`);

  // Create HTML files for each route
  routes.forEach(route => {
    const routePath = route === '/' ? 'index' : route.slice(1);
    const fileName = route === '/' ? 'index.html' : `${routePath}.html`;
    const filePath = path.join(distPath, fileName);
    
    // Create route-specific HTML with proper meta tags
    let routeHtml = indexTemplate;
    
    // Add route-specific meta tags and content
    const metaTags = getMetaTagsForRoute(route);
    routeHtml = routeHtml.replace(
      '<title>MyEstateAgent</title>',
      `<title>${metaTags.title}</title>
      <meta name="description" content="${metaTags.description}">
      <meta property="og:title" content="${metaTags.title}">
      <meta property="og:description" content="${metaTags.description}">
      <meta property="og:url" content="https://your-domain.com${route}">
      <link rel="canonical" href="https://your-domain.com${route}">`
    );
    
    // Write the HTML file
    fs.writeFileSync(filePath, routeHtml);
    console.log(`✅ Generated: ${fileName}`);
  });

  console.log('🎉 Pre-rendering completed successfully!');
}

// Get meta tags for each route
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

  return metaData[route] || metaData['/'];
}

// Run the pre-rendering
prerenderRoutes().catch(console.error);