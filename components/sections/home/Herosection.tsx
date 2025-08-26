import React from "react";
import Image from "next/image";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

const Herosection = () => {
  return (
    <>
      <section className="flex flex-row-reverse md:flex-row items-center justify-between relative bg-black lg:p-[8%] px-4 md:px-0 py-8 md:py-0 md:max-h-[768px]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mb-4 md:mb-0 order-1 md:order-2">
          <Image
            src="/images/fondo1.png"
            alt="Tunel"
            width={350}
            height={200}
            className="w-full max-w-[350px] md:max-w-[770px] h-auto md:h-[346px] rounded-3xl shadow-xl object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 z-10 order-2 md:order-1 space-y-3 md:space-y-0">
          <button
            className={`px-4 md:px-8 py-2 border border-white rounded-full text-white font-semibold mb-2 md:mb-2 text-[10px] md:text-base ${syne.className}`}
          >
            Dream Makers
          </button>
          <h1
            className={`text-[13px] md:text-[95px] text-white leading-tight md:leading-[100px] whitespace-nowrap ${syne.className}`}
          >
            Transform your <br />
            company&apos;s future with
          </h1>
          <div className="flex flex-row md:flex-row items-start md:items-center gap-3 md:gap-8 mt-2 md:mt-4">
            <div className="flex -space-x-2 md:-space-x-3 shrink-0">
              <Image
                src="/images/avatars/cliente1.png"
                alt="Avatar 1"
                width={40}
                height={40}
                className="w-[20px] h-[20px] md:w-[52px] md:h-[52px] rounded-full border-2 border-white"
              />
              <Image
                src="/images/avatars/cliente2.png"
                alt="Avatar 2"
                width={40}
                height={40}
                className="w-[20px] h-[20px] md:w-[52px] md:h-[52px] rounded-full border-2 border-white"
              />
              <Image
                src="/images/avatars/cliente3.png"
                alt="Avatar 3"
                width={40}
                height={40}
                className="w-[20px] h-[20px] md:w-[52px] md:h-[52px] rounded-full border-2 border-white"
              />
              <Image
                src="/images/avatars/add.png"
                alt="Avatar 4"
                width={40}
                height={40}
                className="w-[20px] h-[20px] md:w-[52px] md:h-[52px] rounded-full border-2 border-white bg-[#6c6c68]"
              />
            </div>
            <div className="flex items-center gap-2 md:gap-4 ">
              <span
                className={`text-[15px] md:text-[95px] text-white leading-tight md:leading-[70px] whitespace-nowrap ${syne.className}`}
              >
                Dream Makers.
              </span>
              <Image
                src="/images/arrow1.png"
                alt="Flecha"
                width={200}
                height={16}
                className="w-16 h-4 md:w-[200px] md:h-8 inline-block"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full relative bg-black pb-15 px-4">
        <div className="absolute top-[3%] right-[4%] md:top-[25%] md:right-[18%] z-10">
          <span
            className={`text-[#7DF9A7] text-[8px] md:text-[30px] font-bold tracking-wide uppercase text-center ${syne.className}`}
          >
            YOUR TECHNOLOGY PARTNER FOR A BRIGHTER TOMORROW.
          </span>
        </div>
        <div className="flex justify-center items-center pt-2 md:pt-20 lg:p-[8%] w-full">
          <Image
            src="/images/fondo2.png"
            alt="Office workspace"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Herosection;
