import React from "react";
import { Poppins, Syne } from "next/font/google";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({ subsets: ["latin"] });

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "transparent" | "gradient";
  className?: string;
  titleSize?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  buttonVariant = "transparent",
  className = "",
  titleSize,
}) => {
  const buttonStyles =
    buttonVariant === "transparent"
      ? "bg-transparent border-1 border-white text-white hover:bg-white hover:text-black"
      : "bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white";

  return (
    <section
      className={`relative bg-black py-16 lg:py-20 px-4 rounded-b-[30px] lg:rounded-b-[50px] ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          radial-gradient(circle at 90% 40%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px, 30px 30px, 40px 40px, 35px 35px, 45px 45px',
        backgroundPosition: '0 0, 25px 25px, 10px 10px, 15px 15px, 20px 20px'
      }}
    > 
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className={`${titleSize || 'text-4xl'} lg:text-5xl xl:text-[70px] font-bold text-white mb-4 lg:mb-6  ${syne.className} leading-tight`}
          style={{
            wordBreak: 'break-word',
            lineHeight: '1.1',
            maxWidth: '100%',
            whiteSpace: 'pre-line'
          }}
        >
          {title}
        </h1>
        <p
          className={`text-gray-300 text-[13px] lg:text-lg xl:text-[18px] max-w-4xl mx-auto mb-8 lg:mb-12 leading-relaxed px-4 lg:px-0 ${poppins.className}`}
        >
          {description}
        </p>
        <Button
          className={`cursor-pointer text-base lg:text-[18px] ${buttonStyles} px-6 lg:px-8 py-3 lg:py-8 rounded-full font-semibold transition-all duration-300 ${poppins.className}`}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
