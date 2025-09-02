import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DesktopHeader = () => {
  return (
    <div className="w-full bg-black shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logoEmpresa.png"
              alt="Logo"
              width={54}
              height={58}
            />
            <span
              className={`text-xl font-bold text-white uppercase tracking-wide ${inter.className}`}
            >
              Dream Makers
            </span>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`text-white font-medium hover:text-gray-300 transition ${poppins.className}`}
            >
              Home
            </Link>
            <Link
              href="/Work"
              className={`text-white font-medium hover:text-gray-300 transition ${poppins.className}`}
            >
              Our Work
            </Link>
            <Link
              href="/product-development"
              className={`text-white font-medium hover:text-gray-300 transition ${poppins.className}`}
            >
              Product Development
            </Link>
            <Link
              href="/software-development"
              className={`text-white font-medium hover:text-gray-300 transition ${poppins.className}`}
            >
              Custom Software Development{" "}
              <span className="align-middle">&#x25BE;</span>
            </Link>
          </div>

          <div>
            <Link href="/talk">
              <button className="px-7 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] shadow-lg hover:scale-105 transition-transform duration-200">
                Let&apos;s Talk
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DesktopHeader;
