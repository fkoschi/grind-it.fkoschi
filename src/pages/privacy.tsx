import { Source_Sans_3 } from "next/font/google";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Privacy Policy - Grind It</title>
        <meta name="description" content="Privacy policy for the Grind It coffee app. All data stays on your device." />
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
                href="mailto:hi@fkoschi.de"
                target="_blank"
                rel="noreferrer"
                className="text-[#e89e3f] underline hover:text-[#c8872f]"
              >
                Email
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
