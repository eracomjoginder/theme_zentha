#!/usr/bin/env node

/**
 * Script to switch to actual Parkins Sans font files
 * Run this script after adding Parkins Sans font files to public/fonts/
 */

const fs = require('fs');
const path = require('path');

const globalsCssPath = path.join(__dirname, '../src/app/globals.css');
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js');

console.log('🔄 Switching to actual Parkins Sans font files...');

try {
  // 1. Update globals.css to use local font files instead of Google Fonts
  let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
  
  // Comment out Google Fonts import
  globalsCss = globalsCss.replace(
    /@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=Inter:wght@400;500;600;700;800&display=swap'\);/,
    '/* @import url(\'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap\'); */'
  );
  
  // Uncomment the Parkins Sans font-face definitions
  globalsCss = globalsCss.replace(
    /\/\* When you get Parkins Sans font files, uncomment these and comment out the Google Fonts import above \*\/\n\/\*([\s\S]*?)\*\//,
    '/* Parkins Sans Font Definitions */$1'
  );
  
  // Update the font-primary variable to use Parkins Sans first
  globalsCss = globalsCss.replace(
    /--font-primary: 'Inter', 'SF Pro Display'/,
    "--font-primary: 'Parkins Sans', 'Inter', 'SF Pro Display'"
  );
  
  fs.writeFileSync(globalsCssPath, globalsCss);
  console.log('✅ Updated globals.css to use local Parkins Sans files');
  
  // 2. Update Tailwind config
  let tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf8');
  
  // Update the sans font family to prioritize Parkins Sans
  tailwindConfig = tailwindConfig.replace(
    /'sans': \['Inter', 'ui-sans-serif'/,
    "'sans': ['Parkins Sans', 'Inter', 'ui-sans-serif'"
  );
  
  // Update the parkins font family
  tailwindConfig = tailwindConfig.replace(
    /'parkins': \['Inter', 'ui-sans-serif'/,
    "'parkins': ['Parkins Sans', 'Inter', 'ui-sans-serif'"
  );
  
  fs.writeFileSync(tailwindConfigPath, tailwindConfig);
  console.log('✅ Updated tailwind.config.js to prioritize Parkins Sans');
  
  console.log('🎉 Successfully switched to actual Parkins Sans font files!');
  console.log('📝 Make sure you have added the Parkins Sans font files to public/fonts/');
  console.log('🚀 Restart your development server to see the changes');
  console.log('');
  console.log('Required font files:');
  console.log('- ParkinsSans-Regular.woff2, .woff, .ttf');
  console.log('- ParkinsSans-Medium.woff2, .woff, .ttf');
  console.log('- ParkinsSans-SemiBold.woff2, .woff, .ttf');
  console.log('- ParkinsSans-Bold.woff2, .woff, .ttf');
  console.log('- ParkinsSans-ExtraBold.woff2, .woff, .ttf');
  
} catch (error) {
  console.error('❌ Error switching fonts:', error.message);
  process.exit(1);
}
