import React, { useState, useEffect, useRef } from "react";
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
  const [displayNumber, setDisplayNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const targetNumber = parseInt(number);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 4000;
            const steps = 80;
            const increment = targetNumber / steps;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const currentValue = Math.min(Math.floor(increment * currentStep), targetNumber);
              setDisplayNumber(currentValue);

              if (currentStep >= steps) {
                clearInterval(timer);
                setDisplayNumber(targetNumber);
              }
            }, stepDuration);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  return (
    <div ref={cardRef} className={`text-center relative ${className}`}>
      <div
        className={`font-thin text-6xl mb-2 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] bg-clip-text text-transparent ${poppins.className}`}
      >
        {displayNumber}
      </div>
      <div
        className={`text-black text-sm text-center font-medium ${poppins.className}`}
      >
        {label}
      </div>
      {!isLast && (
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-16 bg-black"></div>
      )}
    </div>
  );
};

export default StatCard;
