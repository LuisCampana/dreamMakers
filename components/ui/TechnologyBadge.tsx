import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface TechnologyBadgeProps {
  name: string;
  icon: string;
  className?: string;
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
  name,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-full ${className}`}
    >
      <span className="text-lg">{icon}</span>
      <span
        className={`text-sm font-medium text-gray-700 ${poppins.className}`}
      >
        {name}
      </span>
    </div>
  );
};

export default TechnologyBadge;
