export function verifyDataLoaded(label: string, data: any[]) {
  if (!data || data.length === 0) {
    console.warn(`[⚠️ DATA CHECK] ${label} is empty or undefined — page may appear blank.`);
  } else {
    console.info(`[✅ DATA CHECK] ${label} loaded ${data.length} items.`);
  }
}

export function verifyComponentMount(componentName: string) {
  console.info(`[✅ MOUNT] ${componentName} component mounted successfully.`);
}

export function verifyImports(componentName: string, imports: Record<string, any>) {
  const missing = Object.entries(imports)
    .filter(([, value]) => value === undefined || value === null)
    .map(([key]) => key);

  if (missing.length > 0) {
    console.error(`[❌ IMPORT ERROR] ${componentName} missing imports: ${missing.join(', ')}`);
  } else {
    console.info(`[✅ IMPORTS] ${componentName} all imports verified.`);
  }
}
