import React from "react";
import { Poppins, Syne } from "next/font/google";
import { Button } from "@/components/ui/button";
import GradientCheckBadge from "@/components/ui/GradientCheckBadge";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({ subsets: ["latin"] });

interface WhyWorkWithUsSectionProps {
  className?: string;
}

const WhyWorkWithUsSection: React.FC<WhyWorkWithUsSectionProps> = ({
  className = "",
}) => {
  const highlights: string[] = [
    "Agile & transparent development process",
    "Proven track record of successful digital solutions",
    "Scalable technology to support your growth",
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="flex justify-center flex-row items-end  w-full z-9999 absolute top-[-55px] md:top-[-105px]">
         <div className=" flex justify-center items-center h-[30px] md:h-[90px]" >
           <div className="w-[30px] h-[27px] md:w-[68px] md:h-[60px] bg-black" style={{WebkitMask: 'radial-gradient(circle at top left, transparent 75%, black 65%)', mask: 'radial-gradient(circle at top left, transparent 75%, black 65%)'}}></div>
          </div>
          <div className="bg-black px-10 md:px-16 pt-3 md:py-5 rounded-t-[36px] shadow-[0_8px_18px_rgba(0,0,0,0.35)] relative">
            <span
              className={`font-semibold text-white text-[32px] md:text-[56px] ${syne.className}`}
            >
              Our Work
            </span>
            
          </div>
          <div className=" flex justify-center items-center h-[30px] md:h-[90px]" >
           <div className="w-[30px] h-[27px] bg-black md:w-[68px] md:h-[60px]" style={{WebkitMask: 'radial-gradient(circle at top right , transparent 75%, black 65%)', mask: 'radial-gradient(circle at top right, transparent 75%, black 65%)'}}></div>
          </div>
      </div>

      <section className="bg-black pt-10 md:pt-14 pb-12 md:pb-16 px-4 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className={`text-3xl md:text-[56px] font-bold text-white mb-4 md:mb-6 ${syne.className}`}
          >
            Why Work with Us?
          </h1>

          <p
            className={`text-gray-300 text-base md:text-xl max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 md:px-0 ${poppins.className}`}
          >
            We leverage modern technologies to ensure performance, security, and
            scalability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-6 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">
            {highlights.map((title) => (
              <div key={title} className="text-center">
                <GradientCheckBadge
                  size="md"
                  iconClassName="text-black/80"
                  className="mx-auto mb-4"
                />
                <h4
                  className={`text-lg md:text-[24px] font-bold text-white mb-2 md:mb-3 ${poppins.className}`}
                >
                  {title}
                </h4>
              </div>
            ))}
          </div>

          <Button
            className={`bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] hover:brightness-110 text-white px-8 md:px-10 py-3 rounded-full font-semibold shadow-[0_8px_0_rgba(0,0,0,0.4)] transition-all duration-300 text-base md:text-[18px] ${poppins.className}`}
          >
            Let&apos;s Build Something Great
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WhyWorkWithUsSection;
