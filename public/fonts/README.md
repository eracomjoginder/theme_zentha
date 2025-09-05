# Parkins Sans Font Implementation

## Current Status: Using Poppins Font (Very Similar to Parkins Sans) ✅

The project is currently using **Poppins** font from Google Fonts, which is a modern, geometric sans-serif font very similar to Parkins Sans. This provides excellent typography and is now properly implemented across the entire website.

## To Switch to Parkins Sans:

When you have the Parkins Sans font files, follow these steps:

### Option 1: Automatic Switch (Recommended)
1. **Add the font files** to this directory (see list below)
2. **Run the switch script**: `node scripts/switch-to-actual-parkins-sans.js`
3. **Restart your development server**: `npm run dev`

### Option 2: Manual Switch
1. **Add the font files** to this directory (see list below)
2. **Uncomment the font definitions** in `src/app/globals.css` (lines 6-56)
3. **Update the font-family** in `src/app/globals.css` line 64 to use 'Parkins Sans' first
4. **Update Tailwind config** in `tailwind.config.js` to prioritize Parkins Sans

## Required Font Files:

1. **ParkinsSans-Regular.woff2** - Regular weight (400)
2. **ParkinsSans-Regular.woff** - Regular weight (400) - fallback
3. **ParkinsSans-Regular.ttf** - Regular weight (400) - fallback
4. **ParkinsSans-Medium.woff2** - Medium weight (500)
5. **ParkinsSans-Medium.woff** - Medium weight (500) - fallback
6. **ParkinsSans-Medium.ttf** - Medium weight (500) - fallback
7. **ParkinsSans-SemiBold.woff2** - SemiBold weight (600)
8. **ParkinsSans-SemiBold.woff** - SemiBold weight (600) - fallback
9. **ParkinsSans-SemiBold.ttf** - SemiBold weight (600) - fallback
10. **ParkinsSans-Bold.woff2** - Bold weight (700)
11. **ParkinsSans-Bold.woff** - Bold weight (700) - fallback
12. **ParkinsSans-Bold.ttf** - Bold weight (700) - fallback
13. **ParkinsSans-ExtraBold.woff2** - ExtraBold weight (800)
14. **ParkinsSans-ExtraBold.woff** - ExtraBold weight (800) - fallback
15. **ParkinsSans-ExtraBold.ttf** - ExtraBold weight (800) - fallback

## Where to Get Parkins Sans:

You can obtain the Parkins Sans font files from:
- [FontMeme](https://fontmeme.com/fonts/parkinsans-font/)
- [MyFonts](https://www.myfonts.com/fonts/parachute/parkinsans/)
- [Font Squirrel](https://www.fontsquirrel.com/fonts/parkinsans)

## Font Conversion:

If you only have TTF files, you can convert them to WOFF2 and WOFF formats using:
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [CloudConvert](https://cloudconvert.com/ttf-to-woff2)

## Implementation Status:

✅ Font definitions added to `src/app/globals.css`
✅ Global font-family updated to use Poppins (very similar to Parkins Sans)
✅ Tailwind config updated with Poppins font family
✅ Layout.js updated to use CSS-based font loading
✅ All components now use Poppins font (very similar to Parkins Sans)
✅ Font applied across all pages (Home, About, Contact)
✅ Ready to switch to actual Parkins Sans when font files are available

## Testing:

Once you add the font files, the entire project will use Parkins Sans as the primary font family. You can test this by:

1. Adding the font files to this directory
2. Running the development server: `npm run dev`
3. Checking that all text elements use the Parkins Sans font

## Fallback Fonts:

The implementation includes proper fallback fonts in case Parkins Sans fails to load:
- ui-sans-serif
- system-ui
- -apple-system
- BlinkMacSystemFont
- Segoe UI
- Roboto
- Helvetica Neue
- Arial
- Noto Sans
- sans-serif
