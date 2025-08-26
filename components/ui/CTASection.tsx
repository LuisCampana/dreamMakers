import React from "react";
import { Syne, Poppins } from "next/font/google";
import Image from "next/image";

const syne = Syne({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-[30px] p-8 md:p-12 text-center text-white relative overflow-hidden ${className}`}
    >
      <div className="absolute lg:left-8 left-2 lg:top-[] top-[5%]">
        <Image
          src="/images/contactSetion/logocontact.png"
          alt="Network decoration"
          width={120}
          height={128}
          className="lg:w-[120px] lg:h-[128px] w-[70px] h-[70px] opacity-80"
        />
      </div>

      <div className="absolute lg:right-8 right-4 lg:top-[55%] top-[65%]">
        <Image
          src="/images/contactSetion/logocontact.png"
          alt="Network decoration"
          width={120}
          height={128}
          className="lg:w-[120px] lg:h-[128px] w-[70px] h-[70px] opacity-80"
        />
      </div>

      <div className="relative z-10">
        <h3 className={`text-[26px] md:text-[56px] font-bold mb-4  ${syne.className}`}>
          Ready to Build Your Next
        </h3>
        <h3 className={`text-[26px] md:text-[56px] font-bold mb-4  ${syne.className}`}>
          Big Product?
        </h3>
        <p className={`text-lg md:text-[24px] mb-8 font-semibold  ${syne.className}`}>
          Let&apos;s bring your vision to life.
        </p>
        <button
          className={`cursor-pointer px-8 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg ${poppins.className}`}
        >
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default CTASection;
