import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import localFont from "next/font/local";

const tbjSodaberryFont = localFont({
  src: "../fonts/TBJ_Sodaberry.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={tbjSodaberryFont.className}>
        <Component {...pageProps} />
      </main>

      <Script
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        data-name="bmc-button"
        data-slug="fkoschi"
        data-color="#e89e3f"
        data-emoji="☕"
        data-font="Cookie"
        data-text="Buy me a coffee"
        data-outline-color="#000000"
        data-font-color="#000000"
        data-coffee-color="#FFDD00"
        strategy="lazyOnload"
      />
    </>
  );
}
