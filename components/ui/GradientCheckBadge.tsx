import React from "react";

type BadgeSize = "sm" | "md" | "lg";

interface GradientCheckBadgeProps {
  size?: BadgeSize;
  className?: string;
  iconClassName?: string;
}

const containerSizeByVariant: Record<BadgeSize, string> = {
  sm: "w-5 h-5 lg:w-6 lg:h-6",
  md: "w-16 h-16 md:w-20 md:h-20",
  lg: "w-20 h-20 md:w-24 md:h-24",
};

const iconSizeByVariant: Record<BadgeSize, string> = {
  sm: "w-3 h-3 lg:w-4 lg:h-4",
  md: "w-8 h-8 md:w-10 md:h-10",
  lg: "w-10 h-10 md:w-12 md:h-12",
};

const GradientCheckBadge: React.FC<GradientCheckBadgeProps> = ({
  size = "lg",
  className = "",
  iconClassName = "text-white",
}) => {
  const strokeWidth = size === "sm" ? 2 : 4;
  return (
    <div
      className={`${containerSizeByVariant[size]} bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.55)] ${className}`}
    >
      <svg
        className={`${iconSizeByVariant[size]} ${iconClassName}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
};

export default GradientCheckBadge;
