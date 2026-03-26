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
