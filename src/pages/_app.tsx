import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

const tbjSodaberryFont = localFont({
  src: "../fonts/TBJ_Sodaberry.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={tbjSodaberryFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
