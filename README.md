# MyEstateAgent

A modern estate agency website built with React, Vite, and Tailwind CSS.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Build

```bash
# Standard build (SPA only)
npm run build

# Build with pre-rendering (for SEO/crawlers)
npm run build:ssg
```

## Pre-rendering

The project uses post-build pre-rendering to generate static HTML files for all routes, making them crawlable by search engines and knowledge bases.

### Routes Pre-rendered:
- Core pages: `/`, `/about`, `/buy`, `/sell`, `/rent`, `/landlord`, `/services`, `/privacy`, `/terms`, `/cookies`
- Dynamic property listings: `/listings/{slug}` (loaded from `src/data/listings.json`)

### Adding New Property Listings:
1. Add new entries to `src/data/listings.json`
2. Run `npm run build:ssg`
3. Routes are automatically discovered and pre-rendered
