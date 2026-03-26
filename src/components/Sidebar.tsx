import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 flex flex-col p-8 ${sourceSans.className}`}
          >
            <button
              onClick={onClose}
              className="self-end text-gray-400 hover:text-gray-700 transition-colors text-2xl leading-none mb-12"
              aria-label="Close menu"
            >
              ✕
            </button>
            <div className="flex flex-col gap-6">
              <Link
                href="/support"
                onClick={onClose}
                className="text-xl text-gray-400 hover:text-gray-700 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/privacy"
                onClick={onClose}
                className="text-xl text-gray-400 hover:text-gray-700 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
