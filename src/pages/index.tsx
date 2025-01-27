import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";

const sourceSansPro = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grind It",
  creator: "Felix Koschmidder",
};

export default function Home() {
  const copyClassName = `text-black text-md lg:text-xl max-w-screen-sm mt-4 ${sourceSansPro.className}`;

  return (
    <div className="flex flex-col h-screen bg-[#664F3F]">
      <div className="flex flex-1 flex-col xl:m-6 2xl:m-8 bg-white lg:rounded-xl shadow-lg">
        
        <div className="flex lg:flex-1 lg:gap-0 gap-16 p-6 flex-col lg:flex-row justify-center items-center">
          
          <div className="flex flex-1 flex-col items-start pl-4 mt-12 lg:mt-0 lg:justify-center lg:order-2">
            <h1 className="text-center text-6xl lg:text-8xl">Grind It</h1>

            <p className={copyClassName}>
              Grind It is the perfect app for coffee lovers who grind their
              beans at home. Easily track your beans, their origins, and the
              ideal grind settings to brew the perfect cup every time.
            </p>

            <div className="flex flex-1 mt-8 gap-6">
              <div className="flex flex-1 h-[40px]">
                <Image
                  src="/AppStoreDownload.svg"
                  alt="App Store Download"
                  width={120}
                  height={180}
                />
              </div>
              <div className="flex flex-1 h-[40px]">
                <Image
                  src="/GooglePlayDownload.png"
                  alt="Google Play Download"
                  width={120}
                  height={180}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-1 lg:justify-end items-center justify-center h-fit">
            <Iphone15Pro src="./home.png" className="h-[700px]" />
          </div>

        </div>
      </div>
    </div>
  );
}
