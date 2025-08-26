"use client"
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradientCheckBadge from "@/components/ui/GradientCheckBadge";
import { Project } from "@/lib/types";
import { motion, useInView } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getPositionValue = (position: number | { mobile: number; desktop: number } | undefined) => {
    if (!position) return undefined;
    if (typeof position === 'number') return `${position}%`;
    return `${isMobile ? position.mobile : position.desktop}%`;
  };
  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 1 ? 100 : -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: index % 2 === 1 ? 100 : -100, opacity: 0 }}
      transition={{ 
        duration: 1, 
        ease: "easeOut",
        delay: index * 0.5 
      }}
      className={`flex flex-col ${
        index % 2 === 1 ? "lg:flex-row-reverse  rounded-[30px] p-[3%] bg-[#FAF6FF]" : "lg:flex-row"
      } items-center gap-8 lg:gap-12 mb-[15%]`}
    >
      <div
       
      >
        <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            width={589}
            height={537}
            className=" w-full  sm:h-[100%] lg:h-[537px] object-cover"
          />
          <div className="absolute inset-0 bg-opacity-20"></div>
          <div
            className="absolute flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16"
            style={{
              right: getPositionValue(project.numberPosition?.right),
              left: getPositionValue(project.numberPosition?.left),
              top: getPositionValue(project.numberPosition?.top),
              bottom: getPositionValue(project.numberPosition?.bottom) || "5%",
            }}
          >
            <span
              className={`text-[34px] lg:text-6xl font-bold bg-gradient-to-r  from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] bg-clip-text text-transparent drop-shadow-xl ${poppins.className} leading-none`}
            >
              {project.id}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6 px-4 lg:px-0">
        <h2
          className={`text-2xl lg:text-3xl xl:text-[42px] font-bold text-black leading-tight ${poppins.className}`}
        >
          {project.title}
        </h2>

        <p
          className={`text-gray-600 text-base lg:text-[19px] leading-relaxed font-semibold ${poppins.className}`}
        >
          {project.subtitle}
        </p>

        <p
          className={`text-gray-600 text-sm lg:text-[16px] leading-relaxed ${poppins.className}`}
        >
          {project.description}
        </p>

        <div className="space-y-3 lg:space-y-4">
          <h3
            className={`text-sm lg:text-[16px] font-semibold text-black ${poppins.className}`}
          >
            Solution
          </h3>
          <p
            className={`text-gray-600 text-sm lg:text-[16px] leading-relaxed ${poppins.className}`}
          >
            {project.solution}
          </p>
        </div>

        <div className="space-y-2 lg:space-y-3">
          {project.metrics.map((metric, metricIndex) => (
            <div
              key={metricIndex}
              className="flex items-center space-x-2 lg:space-x-3"
            >
              <GradientCheckBadge size="sm" className="flex-shrink-0" />
              <span
                className={`text-gray-700 text-sm lg:text-base ${poppins.className}`}
              >
                {metric}
              </span>
            </div>
          ))}
        </div>

        <Button className="bg-gradient-to-r  from-green-400 to-purple-500 hover:from-green-500 hover:to-purple-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-sm lg:text-base">
          Read More
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
