import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
  isLast?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  number,
  label,
  className = "",
  isLast = false,
}) => {
  return (
    <div className={`text-center relative ${className}`}>
      <div
        className={`font-thin text-6xl mb-2 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] bg-clip-text text-transparent ${poppins.className}`}
      >
        {number}
      </div>
      <div
        className={`text-black text-sm text-center font-medium ${poppins.className}`}
      >
        {label}
      </div>
      {!isLast && (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-16 bg-black"></div>
      )}
    </div>
  );
};

export default StatCard;
