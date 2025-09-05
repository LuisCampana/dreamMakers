import React from "react";
import { Poppins, Syne } from "next/font/google";
import { Button } from "@/components/ui/button";
import GradientCheckBadge from "@/components/ui/GradientCheckBadge";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({ subsets: ["latin"] });

interface ServiceItem {
  title: string;
  description: string[];
}

interface HighlightItem {
  title: string;
  description?: string;
}

interface WhyWorkWithUsSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  highlights?: string[] | HighlightItem[];
  buttonText?: string;
  services?: ServiceItem[];
  variant?: 'default' | 'services' | 'four-columns';
  useCustomIcons?: boolean;
}

const WhyWorkWithUsSection: React.FC<WhyWorkWithUsSectionProps> = ({
  className = "",
  title = "Why Work with Us?",
  subtitle = "Our Work",
  description = "",
  highlights = [
    "Agile & transparent development process",
    "Proven track record of successful digital solutions",
    "Scalable technology to support your growth",
  ],
  buttonText = "",
  services = [],
  variant = 'default',
  useCustomIcons = false,
}) => {
  const getIconPath = (highlight: string | HighlightItem) => {
    const title = typeof highlight === 'string' ? highlight : highlight.title;
    const iconMap: { [key: string]: string } = {
      "Custom-Tailored Approach": "/iconos/custom-tailored-approach.svg",
      "Cutting-Edge Technologies": "/iconos/cutting-edge-technologies.svg",
      "Full-Cycle Development": "/iconos/full-cycle-development.svg",
      "Future-proof architecture": "/iconos/future-proof-architecture.svg",
    };
    return iconMap[title] || "";
  };

  const getHighlightTitle = (highlight: string | HighlightItem) => {
    return typeof highlight === 'string' ? highlight : highlight.title;
  };

  const getHighlightDescription = (highlight: string | HighlightItem) => {
    return typeof highlight === 'string' ? undefined : highlight.description;
  };

  return (
    <div className={`relative ${className} `}>
      <div className="flex justify-center flex-row items-end  w-full z-9999 absolute top-[-55px] md:top-[-105px]">
         <div className=" flex justify-center items-center h-[30px] md:h-[90px]" >
           <div className="w-[30px] h-[27px] md:w-[68px] md:h-[60px] bg-black" style={{WebkitMask: 'radial-gradient(circle at top left, transparent 75%, black 65%)', mask: 'radial-gradient(circle at top left, transparent 75%, black 65%)'}}></div>
          </div>
          <div className="bg-black px-10 md:px-16 pt-3 md:py-5 rounded-t-[36px] shadow-[0_8px_18px_rgba(0,0,0,0.35)] relative">
            <span
              className={`font-semibold text-white text-[32px] md:text-[56px] ${syne.className}`}
            >
              {title}
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
            {subtitle}
          </h1>

          {description && (
            <p
              className={`text-gray-300 text-base md:text-xl max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 md:px-0 ${poppins.className}`}
            >
              {description}
            </p>
          )}

          {variant === 'services' && services.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 md:mb-12">
              {services.map((service, index) => (
                <div key={index} className="text-center lg:text-left lg:px-0 px-8">
                  <GradientCheckBadge
                      size="md"
                      iconClassName="text-black/80"
                      className="mx-auto mb-4"
                    />
                  <h3
                    className={`lg:text-[34px] text-[26px] font-bold text-white mb-6 ${poppins.className}`}
                  >
                    {service.title}
                  </h3>
                  <div
                    className={`text-gray-300 leading-relaxed space-y-4 lg:text-[18px] text-[16px] ${poppins.className}`}
                  >
                    {service.description.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : variant === 'four-columns' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">
              {highlights.map((highlight) => {
                const title = getHighlightTitle(highlight);
                const description = getHighlightDescription(highlight);
                return (
                  <div key={title} className="text-center">
                    {useCustomIcons ? (
                      <div className="w-[100px] h-[100px] md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full flex items-center justify-center">
                        <Image
                          src={getIconPath(highlight)}
                          alt={title}
                          width={100}
                          height={100}
                          className="w-[100px] h-[100px]"
                        />
                      </div>
                    ) : (
                      <GradientCheckBadge
                        size="md"
                        iconClassName="text-black/80"
                        className="mx-auto mb-4"
                      />
                    )}
                    <h4
                      className={`text-lg md:text-[24px] font-semibold text-white mb-2 md:mb-3 ${poppins.className}`}
                    >
                      {title}
                    </h4>
                    {useCustomIcons && description && (
                      <p
                        className={`text-gray-300 text-sm md:text-[20px] font-normal ${poppins.className}`}
                      >
                        {description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-6 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">
              {highlights.map((highlight) => {
                const title = getHighlightTitle(highlight);
                return (
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
                );
              })}
            </div>
          )}

          {buttonText && (
            <Button
              className={`font-normal cursor-pointer bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] hover:brightness-110 text-white px-8 md:px-10 py-3 rounded-full shadow-[0_8px_0_rgba(0,0,0,0.4)] transition-all duration-300 text-base md:text-[18px] f ${poppins.className}`}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default WhyWorkWithUsSection;
