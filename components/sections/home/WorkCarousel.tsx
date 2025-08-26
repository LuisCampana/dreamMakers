"use client";
import React, { useState } from "react";
import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({ subsets: ["latin"] });

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgColor: string;
}

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Montebosco",
      subtitle: "HABITA EN NATURALEZA",
      description:
        "Luxury residential project in Lomas Verdes, dynamic content for various apartment layouts, and highlighted the project's eco-friendly aspects, including LEED certification. Our goal was to deliver a seamless digital experience that aligns with.",
      image: "/images/fondo1.png",
      bgColor: "bg-green-600",
    },
    {
      id: 2,
      title: "Tech Innovation",
      subtitle: "INNOVATION IN TECH",
      description:
        "We designed and developed the Project Two website to showcase their innovative technology solutions. We created a responsive, user-friendly interface featuring cutting-edge designs and seamless user experience to deliver exceptional results.",
      image: "/images/fondo2.png",
      bgColor: "bg-blue-600",
    },
    {
      id: 3,
      title: "Digital Future",
      subtitle: "DIGITAL TRANSFORMATION",
      description:
        "A comprehensive digital transformation project that revolutionized the client's business processes. We created modern, scalable solutions that improved efficiency and user engagement across all platforms.",
      image: "/images/fondo1.png",
      bgColor: "bg-purple-600",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <button
            className={`px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] shadow-lg mb-8 ${syne.className}`}
          >
            Our Work
          </button>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            <button
              onClick={prevSlide}
              className="z-10 w-12 h-12 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center space-x-4 md:space-x-8 overflow-hidden">
              {getVisibleProjects().map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className={`flex-shrink-0 transition-all duration-300 ${
                    project.position === 0
                      ? "w-80 md:w-96 opacity-100 scale-100"
                      : "w-60 md:w-72 opacity-60 scale-90"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3
                            className={`text-3xl md:text-4xl font-bold mb-2 ${syne.className}`}
                          >
                            {project.title}
                          </h3>
                          <p className={`text-lg md:text-xl ${syne.className}`}>
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {project.position === 0 && (
                    <div className="mt-6 text-center">
                      <h4
                        className={`text-2xl md:text-3xl font-bold text-white mb-4 ${syne.className}`}
                      >
                        {project.title}
                      </h4>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="z-10 w-12 h-12 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;
