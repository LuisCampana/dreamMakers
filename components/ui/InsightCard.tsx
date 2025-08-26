"use client"
import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface InsightCardProps {
  image: string;
  title: string;
  description: string;
  readTime?: string;
  buttonText?: string;
  className?: string;
  imageHeight?: string;
  titleSize?: string;
  descriptionSize?: string;
  index?: number;
}

const InsightCard: React.FC<InsightCardProps> = ({
  image,
  title,
  description,
  readTime,
  buttonText = "Read More",
  className = "",
  imageHeight = "h-48",
  titleSize = "text-lg",
  descriptionSize = "text-sm",
  index = 0,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 1 ? 100 : -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: index % 2 === 1 ? 100 : -100, opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: index * 0.2 
      }}
      className={`bg-white rounded-2xl overflow-hidden flex flex-col h-full ${className}`}
    >
      <div className={`relative ${imageHeight} w-full`}>
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className={`${titleSize} font-bold text-black mb-3 ${poppins.className}`}
        >
          {title}
        </h3>
        <p
          className={`text-gray-600 ${descriptionSize} leading-relaxed mb-4 flex-grow ${poppins.className}`}
        >
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3">
          <Button
            variant="outline"
            className="cursor-pointer bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] text-white border-none hover:from-cyan-500 hover:to-purple-600 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
          >
            {buttonText}
          </Button>
          {readTime && (
            <span className={`text-xs text-gray-500 ${poppins.className}`}>
              {readTime}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
