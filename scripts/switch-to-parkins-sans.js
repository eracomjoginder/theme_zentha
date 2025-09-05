#!/usr/bin/env node

/**
 * Script to switch from Inter to Parkins Sans font
 * Run this script after adding Parkins Sans font files to public/fonts/
 */

const fs = require('fs');
const path = require('path');

const globalsCssPath = path.join(__dirname, '../src/app/globals.css');
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js');

console.log('🔄 Switching to Parkins Sans font...');

try {
  // 1. Uncomment Parkins Sans font definitions in globals.css
  let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
  
  // Uncomment the font-face definitions
  globalsCss = globalsCss.replace(
    /\/\* Parkins Sans Font Definitions - Uncomment when font files are added \*\/\n\/\*([\s\S]*?)\*\//,
    '/* Parkins Sans Font Definitions */$1'
  );
  
  // Update the font-primary variable to use Parkins Sans first
  globalsCss = globalsCss.replace(
    /--font-primary: 'Inter', 'SF Pro Display'/,
    "--font-primary: 'Parkins Sans', 'Inter', 'SF Pro Display'"
  );
  
  fs.writeFileSync(globalsCssPath, globalsCss);
  console.log('✅ Updated globals.css');
  
  // 2. Update Tailwind config
  let tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf8');
  
  // Update the sans font family to prioritize Parkins Sans
  tailwindConfig = tailwindConfig.replace(
    /'sans': \['var\(--font-inter\)', 'Inter'/,
    "'sans': ['Parkins Sans', 'var(--font-inter)', 'Inter'"
  );
  
  // Update the parkins font family
  tailwindConfig = tailwindConfig.replace(
    /'parkins': \['Parkins Sans', 'Inter'/,
    "'parkins': ['Parkins Sans'"
  );
  
  fs.writeFileSync(tailwindConfigPath, tailwindConfig);
  console.log('✅ Updated tailwind.config.js');
  
  console.log('🎉 Successfully switched to Parkins Sans!');
  console.log('📝 Make sure you have added the Parkins Sans font files to public/fonts/');
  console.log('🚀 Restart your development server to see the changes');
  
} catch (error) {
  console.error('❌ Error switching fonts:', error.message);
  process.exit(1);
}





