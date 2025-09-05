"use client";
import React from "react";
import { Syne } from "next/font/google";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="work-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="swiper-slide-custom">
                <div className="w-72 md:w-80 mx-auto">
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full flex items-center justify-center text-white shadow-lg transition-colors hover:scale-110">
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

          <button className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full flex items-center justify-center text-white shadow-lg transition-colors hover:scale-110">
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

          <div className="swiper-pagination-custom flex justify-center mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;
