# Support Page Design

**Date:** 2026-03-26
**Status:** Approved

## Goal

Add a `/support` page to satisfy the Apple App Store Connect Guideline 1.5 requirement that the Support URL links to a page where users can ask questions and request support.

## New File: `src/pages/support.tsx`

Mirrors `src/pages/privacy.tsx` exactly in structure:

- `flex flex-col min-h-screen` wrapper
- Animated orange header (`bg-[#DDA152]`) with logo (links to `/`) and `<h1>Support</h1>`
- White `<main>` with `max-w-[700px]` centered content using Source Sans 3

**Single content section:**

> "Have a question or need help with Grind It? Reach out via email — I typically respond within a few days."
>
> `hi@fkoschi.de` — styled as orange link (`text-[#e89e3f]`, underline, hover `#c8872f`)

Footer: "← Back to home" link (same as privacy page).

**Head metadata:**
- title: `Support - Grind It`
- description: `Get support for the Grind It coffee app. Reach out via email.`

## Modified File: `src/pages/index.tsx`

The brown footer currently has one link. Update it to two links with a separator:

```
Privacy Policy · Support
```

Both links use the same styling: `text-sm text-white/60 hover:text-white/90`.

## App Store Connect

Update the Support URL in App Store Connect to `https://grind-it.fkoschi.de/support`.
