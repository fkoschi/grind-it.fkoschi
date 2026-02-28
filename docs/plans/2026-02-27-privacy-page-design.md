# Privacy Policy Page Design

**Date:** 2026-02-27
**Status:** Approved

## Context

Grind It is a coffee-grinding mobile app. The marketing site needs a data privacy page at `/privacy`. The app stores all data locally on-device with no analytics, no accounts, and no server-side data collection.

## Approach

Single-file page (`src/pages/privacy.tsx`) with a hybrid layout: branded header matching the landing page, clean white text body for readability.

## Page Layout

### Header Section
- Brown background (`#664F3F`) matching the landing page
- "Grind It" logo linked back to `/`
- Page title "Privacy Policy" in Sodaberry font
- Subtle fade-in animation using Motion (consistent with landing page)

### Body Section
- White background, max-width prose container (~700px)
- Clean readable text using Source Sans 3
- "Last updated: February 27, 2026" date at the top

### Footer
- "Back to home" link at the bottom of the content area

## Privacy Policy Content

1. **Overview** - Grind It respects your privacy. No personal data is collected.
2. **Data Storage** - All data (beans, grind settings, recipes) stored locally on device only. Nothing transmitted to servers.
3. **No Analytics** - No usage tracking, crash reporting, or analytics.
4. **No Third-Party Services** - No third-party SDKs or services that collect data.
5. **Your Data, Your Control** - Deleting the app removes all data. No backups retained.
6. **Contact** - Link to email or Buy Me a Coffee for questions.

## Technical Details

- **File:** `src/pages/privacy.tsx`
- **Route:** `/privacy`
- **Styling:** Tailwind CSS, existing design tokens
- **Animation:** Motion fade-in on header
- **No new dependencies**

## Landing Page Update

Add a "Privacy Policy" link in the footer area of `src/pages/index.tsx`.
