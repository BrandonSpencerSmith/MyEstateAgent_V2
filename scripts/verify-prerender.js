const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying pre-rendered HTML files...');

const distPath = path.join(__dirname, '../dist');
const filesToCheck = [
  { file: 'index.html', route: '/', expectedContent: ['MyEstateAgent', 'Find Your Perfect', 'Properties Sold'] },
  { file: 'buy.html', route: '/buy', expectedContent: ['Featured Properties', 'School Lane', 'Bumblebee Lane'] },
  { file: 'rent.html', route: '/rent', expectedContent: ['Featured Rental Properties', 'Macey Gardens', 'Fallow Close'] },
  { file: 'about.html', route: '/about', expectedContent: ['About MyEstateAgent', 'Expert Team'] },
  { file: 'services.html', route: '/services', expectedContent: ['Our Services', 'Property Buying'] }
];

let allPassed = true;
let checkedFiles = 0;

for (const { file, route, expectedContent } of filesToCheck) {
  const filePath = path.join(distPath, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Missing: ${file} (${route})`);
    allPassed = false;
    continue;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if it's just an empty root div
    if (content.includes('<div id="root"></div>') && !content.includes('MyEstateAgent')) {
      console.log(`⚠️  Empty content: ${file} (${route}) - only contains <div id="root"></div>`);
      allPassed = false;
      continue;
    }

    // Check for expected content
    const missingContent = expectedContent.filter(text => !content.includes(text));
    
    if (missingContent.length > 0) {
      console.log(`⚠️  Missing content in ${file} (${route}): ${missingContent.join(', ')}`);
      allPassed = false;
    } else {
      console.log(`✅ ${file} (${route}) - Content verified`);
      checkedFiles++;
    }
    
  } catch (error) {
    console.log(`❌ Error reading ${file}: ${error.message}`);
    allPassed = false;
  }
}

console.log(`\n📊 Verification Summary:`);
console.log(`✅ Files verified: ${checkedFiles}/${filesToCheck.length}`);

if (allPassed && checkedFiles === filesToCheck.length) {
  console.log(`🎉 All pre-rendered files contain proper content!`);
  console.log(`🕷️  Pages are now crawlable by Voiceflow Knowledge Base`);
} else {
  console.log(`⚠️  Some files may not be properly pre-rendered`);
  console.log(`💡 This could be due to:`);
  console.log(`   - render-complete event not firing`);
  console.log(`   - Content loading after prerender timeout`);
  console.log(`   - JavaScript errors during prerendering`);
}

process.exit(0); // Don't fail the build, just report