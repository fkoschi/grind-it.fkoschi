# Privacy Policy Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a `/privacy` page with branded header and clean text body, plus a footer link from the landing page.

**Architecture:** Single new page file `src/pages/privacy.tsx` using the Next.js Pages Router. Hybrid layout: brown branded header matching the landing page, then a white prose section with the policy text. The existing `index.tsx` gets a small privacy link added to its footer area.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Motion (motion/react), Source Sans 3 (Google Font), next/font/local (Sodaberry already in `_app.tsx`)

---

### Task 1: Create the privacy page

**Files:**
- Create: `src/pages/privacy.tsx`

**Step 1: Create `src/pages/privacy.tsx` with complete page**

This is a Pages Router project. The Sodaberry font is already applied globally via `_app.tsx`. We need to import Source Sans 3 for the body text (same pattern as `index.tsx` line 3).

```tsx
import { Source_Sans_3 } from "next/font/google";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Branded Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: ["easeIn", "easeOut"], type: "spring", delay: 0.1 }}
        className="bg-[#664F3F] px-6 py-12 text-center"
      >
        <Link href="/" className="inline-block mb-4">
          <Image src="/logo.png" alt="Grind It" width={60} height={60} className="mx-auto" />
        </Link>
        <h1 className="text-4xl lg:text-5xl text-white">Privacy Policy</h1>
      </motion.header>

      {/* Policy Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`flex-1 bg-white px-6 py-12 ${sourceSans.className}`}
      >
        <div className="max-w-[700px] mx-auto text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-400 mb-8">Last updated: February 27, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl text-black mb-3">Overview</h2>
            <p>
              Grind It respects your privacy. The app does not collect, store, or
              transmit any personal data. This policy explains how your information
              is handled when you use Grind It.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-black mb-3">Data Storage</h2>
            <p>
              All data you enter in Grind It — including your coffee beans, their
              origins, grind settings, and brew recipes — is stored locally on your
              device only. No data is ever transmitted to external servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-black mb-3">No Analytics</h2>
            <p>
              Grind It does not use any analytics, crash reporting, or usage
              tracking tools. Your usage of the app is completely private.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-black mb-3">No Third-Party Services</h2>
            <p>
              The app does not integrate any third-party SDKs, advertising
              frameworks, or services that collect user data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-black mb-3">Your Data, Your Control</h2>
            <p>
              Since all data lives on your device, you have full control over it.
              Deleting the app removes all associated data. No backups or copies
              are retained anywhere.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-black mb-3">Contact</h2>
            <p>
              If you have any questions about this privacy policy, feel free to
              reach out via{" "}
              <a
                href="https://www.buymeacoffee.com/fkoschi"
                target="_blank"
                rel="noreferrer"
                className="text-[#e89e3f] underline hover:text-[#c8872f]"
              >
                Buy Me a Coffee
              </a>
              .
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

**Step 2: Verify the page renders**

Run: `npm run build`
Expected: Build succeeds with no errors. The `/privacy` route is listed in the output.

**Step 3: Commit**

```bash
git add src/pages/privacy.tsx
git commit -m "feat: add privacy policy page"
```

---

### Task 2: Add privacy link to the landing page

**Files:**
- Modify: `src/pages/index.tsx`

**Step 1: Add a privacy link to the bottom of the landing page**

In `src/pages/index.tsx`, add a `Link` import and a small footer link after the closing `</div>` of the main content area (the white card), but before the outermost closing `</div>`.

Add this import at the top:
```tsx
import Link from "next/link";
```

Then replace the closing structure at the bottom of the JSX. Currently lines 106-109 are:
```tsx
        </div>
      </div>
    </div>
  );
```

Replace with:
```tsx
        </div>
        <div className="flex justify-center py-3">
          <Link
            href="/privacy"
            className={`text-sm text-white/60 hover:text-white/90 transition-colors ${sourceSansPro.className}`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
```

This places a subtle "Privacy Policy" link in the brown footer area beneath the white card, styled with muted white text.

**Step 2: Verify the build**

Run: `npm run build`
Expected: Build succeeds with no errors. Both `/` and `/privacy` routes listed.

**Step 3: Commit**

```bash
git add src/pages/index.tsx
git commit -m "feat: add privacy policy link to landing page"
```

---

### Task 3: Visual verification

**Step 1: Start dev server and verify both pages**

Run: `npm run dev`

Check:
1. Visit `http://localhost:3000` — the landing page should show a subtle "Privacy Policy" link at the bottom in the brown area
2. Click the link — should navigate to `/privacy`
3. The privacy page should have: brown header with logo and title, white body with policy sections, "Back to home" link at the bottom
4. Click "Back to home" — should return to landing page
5. Check mobile responsive: the page should be readable on small screens
