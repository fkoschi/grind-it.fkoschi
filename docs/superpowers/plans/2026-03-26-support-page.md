# Support Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/support` page so the App Store Connect Support URL resolves to a page where users can contact support.

**Architecture:** New `src/pages/support.tsx` mirrors the existing `src/pages/privacy.tsx` structure exactly — branded orange header, white content, single contact section. The landing page footer gets a second link added alongside Privacy Policy.

**Tech Stack:** Next.js, Tailwind CSS, Framer Motion, Source Sans 3 (Google Fonts)

---

### Task 1: Create `src/pages/support.tsx`

**Files:**
- Create: `src/pages/support.tsx`

- [ ] **Step 1: Create the support page**

Create `src/pages/support.tsx` with the following content:

```tsx
import { Source_Sans_3 } from "next/font/google";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Support - Grind It</title>
        <meta name="description" content="Get support for the Grind It coffee app. Reach out via email." />
      </Head>

      {/* Branded Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: ["easeIn", "easeOut"], type: "spring", delay: 0.1 }}
        className="bg-[#DDA152] px-6 py-12 text-center"
      >
        <Link href="/" className="inline-block mb-4">
          <Image src="/logo.png" alt="Grind It" width={100} height={100} className="mx-auto" />
        </Link>
        <h1 className="text-4xl lg:text-5xl text-white">Support</h1>
      </motion.header>

      {/* Support Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`flex-1 bg-white px-6 py-12 ${sourceSans.className}`}
      >
        <div className="max-w-[700px] mx-auto text-gray-700 leading-relaxed">
          <section className="mb-8">
            <h2 className="text-2xl text-black mb-3">Contact</h2>
            <p>
              Have a question or need help with Grind It? Reach out via email —
              I typically respond within a few days.
            </p>
            <p className="mt-4">
              <a
                href="mailto:hi@fkoschi.de"
                className="text-[#e89e3f] underline hover:text-[#c8872f]"
              >
                hi@fkoschi.de
              </a>
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link
              href="/"
              className="text-[#e89e3f] hover:text-[#c8872f] transition-colors"
            >
              &larr; Back to home
            </Link>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
```

- [ ] **Step 2: Verify the page loads**

Run: `npm run dev`

Open `http://localhost:3000/support` in the browser. Verify:
- Orange header with logo and "Support" title appears
- Contact section with email link renders
- "← Back to home" link is present
- Logo click navigates to `/`

- [ ] **Step 3: Commit**

```bash
git add src/pages/support.tsx
git commit -m "feat: add support page"
```

---

### Task 2: Update landing page footer

**Files:**
- Modify: `src/pages/index.tsx`

- [ ] **Step 1: Update the footer in `src/pages/index.tsx`**

Find this block (around line 107–114):

```tsx
<div className="flex flex-1 justify-center">
  <Link
    href="/privacy"
    className={`text-sm text-white/60 hover:text-white/90 transition-colors ${sourceSansPro.className}`}
  >
    Privacy Policy
  </Link>
</div>
```

Replace with:

```tsx
<div className={`flex flex-1 justify-center items-center gap-3 text-sm ${sourceSansPro.className}`}>
  <Link
    href="/privacy"
    className="text-white/60 hover:text-white/90 transition-colors"
  >
    Privacy Policy
  </Link>
  <span className="text-white/30">·</span>
  <Link
    href="/support"
    className="text-white/60 hover:text-white/90 transition-colors"
  >
    Support
  </Link>
</div>
```

- [ ] **Step 2: Verify footer renders correctly**

With dev server running, open `http://localhost:3000`. Verify:
- Footer shows "Privacy Policy · Support" on the brown background
- Both links are visible and hoverable
- Clicking "Support" navigates to `/support`

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.tsx
git commit -m "feat: add support link to landing page footer"
```

---

### Task 3: Push and update App Store Connect

- [ ] **Step 1: Push the branch**

```bash
git push
```

- [ ] **Step 2: Update App Store Connect Support URL**

In App Store Connect → Your App → App Information, update the Support URL to:

```
https://grind-it.fkoschi.de/support
```
