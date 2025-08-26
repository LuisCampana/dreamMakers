"use client"
import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  className = "",
  index = 0,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });
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
      className={`bg-white rounded-2xl justify-items-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className="w-16 h-16 mb-6 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <h3
        className={`text-[20px] font-bold text-black mb-4 text-center ${poppins.className}`}
      >
        {title}
      </h3>
      <p
        className={`text-gray-600 leading-relaxed text-[19px] text-center font-bold ${poppins.className}`}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
