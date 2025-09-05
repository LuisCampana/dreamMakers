"use client";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Body from "@/components/layout/body/Body";
import React, { useState } from "react";
import { Poppins, Syne } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/HeroSection";
import CTASection from "@/components/ui/CTASection";
import StatCard from "@/components/ui/StatCard";
import WhyWorkWithUsSection from "@/components/ui/WhyWorkWithUsSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({ subsets: ["latin"] });

interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
  bulletPoints: string[];
  buttonGradient: string;
  image: string;
  imageAlt: string;
  numberPosition: {
    right?: number;
    bottom?: number;
    left?: number;
    top?: number;
  };
  numberPositionMobile: {
    right?: number;
    bottom?: number;
    left?: number;
    top?: number;
  };
}

const ProductDevelopmentPage = () => {
  const [expandedItems, setExpandedItems] = useState([0]);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 468);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const stats = [
    { number: "100+", label: "Product specialists" },
    { number: "150+", label: "Products delivered" },
    { number: "10K+", label: "Years of experience" },
    { number: "80+", label: "Technologies mastered" },
  ];

  const accordionItems = [
    {
      title: "Empowering Your Vision with Proven Expertise",
      content:
        "With over 500 successful projects for Fortune 500 and top-tier tech companies, Dream Makers brings unmatched strategic insights across industries, platforms, and technologies. Our experience ensures every challenge is met with innovative, data-driven solutions.",
    },
    {
      title: "Unparalleled Team Stability & Market Expertise",
      content:
        "Our team brings years of experience and deep market knowledge to every project.",
    },
    {
      title: "Access to World-Class Tech Talent",
      content:
        "We have access to the best developers, designers, and tech professionals in the industry.",
    },
    {
      title: "Specialized Studios for Complex Challenges",
      content:
        "Our specialized studios handle the most complex technical challenges with innovative solutions.",
    },
    {
      title: "A Vast Network of Vetted Tech Talent",
      content:
        "We maintain a carefully curated network of verified tech professionals ready for any project.",
    },
    {
      title: "A Commitment to Meaningful Partnerships",
      content:
        "We believe in building long-term partnerships that drive mutual success and growth.",
    },
    {
      title: "A Trusted Partner with Exceptional Client Satisfaction",
      content:
        "Our commitment to excellence has earned us exceptional client satisfaction ratings.",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      icon: "/images/services-images/webDeveloper.png",
      title: "Discovery & Planning",
      description:
        "Before writing a single line of code, we dive deep into your vision, market, and goals.",
      bulletPoints: [
        "Understand business objectives and target audience.",
        "Define product requirements and key features.",
        "Develop a roadmap for success.",
      ],
      buttonGradient: "from-green-400 to-purple-500",
      image: "/images/productDevelopment/group2.png",
      imageAlt: "Discovery & Planning",
      numberPosition: { right: 0.1, bottom: 2 },
      numberPositionMobile: { right: 0.1, bottom: 0.1 },
    },
    {
      number: "02",
      icon: "/images/services-images/uidesign.png",
      title: "UI/UX Design",
      description: "A great product starts with a seamless user experience.",
      bulletPoints: [
        "Wireframes and interactive prototypes.",
        "User-centric, intuitive interfaces.",
        "High-performance, responsive design.",
      ],
      buttonGradient: "from-blue-400 to-purple-500",
      image: "/images/productDevelopment/group3.png",
      imageAlt: "UI/UX Design",
      numberPosition: { left: 2, bottom: 3 },
      numberPositionMobile: { left: 2, bottom: 0.1 },
    },
    {
      number: "03",
      icon: "/images/services-images/apiIntegration.png",
      title: "Agile Development & Testing",
      description:
        "We use modern technologies and agile workflows to build scalable, robust software.",
      bulletPoints: [
        "Iterative development for continuous improvement.",
        "AI-driven testing to ensure performance and security.",
        "Cloud-native architecture for scalability.",
      ],
      buttonGradient: "from-green-400 to-purple-500",
      image: "/images/productDevelopment/group4.png",
      imageAlt: "Agile Development & Testing",
      numberPosition: { right: 2, bottom: 2 },
      numberPositionMobile: { right: 2, bottom: 0.1 },
    },
    {
      number: "04",
      icon: "/images/services-images/nave.png",
      title: "Launch & Growth",
      description:
        "Once your product is live, we help you optimize, maintain, and scale.",
      bulletPoints: [
        "Deployment with CI/CD pipelines for smooth rollouts.",
        "Performance monitoring and updates.",
        "Growth strategies based on user feedback and analytics.",
      ],
      buttonGradient: "from-green-400 to-purple-500",
      image: "/images/productDevelopment/group5.png",
      imageAlt: "Launch & Growth",
      numberPosition: { left: 2, bottom: 3 },
      numberPositionMobile: { left: 2, bottom: 0.1 },
    },
  ];

  return (
    <div className="w-full">
      <Header />
      <Body>
        <HeroSection
          title="From Idea to Market - End-to-End Product Development"
          description="We Help Businesses And Startups Transform Ideas Into Successful Products. Our Product Development Process Ensures Innovation, Scalability, And Efficiency."
          buttonText="Contact Us"
          buttonVariant="transparent"
          titleSize="text-[30px]"
        />

        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-[30px] md:text-[54px] font-medium text-black text-center mb-8 ${syne.className}`}
            >
              Why Dream Makers?
            </h2>

            <div className="flex justify-center mb-12">
              <div className="flex md:gap-8 gap-0">
                <div className="flex items-center gap-2 relative">
                  <div className="md:w-3 md:h-3 w-[12px] h-[12px] bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full absolute md:static left-[-25px] md:left-0"></div>
                  <span className={`text-black font-medium md:text-[18px] text-[14px] left-[-7px] md:left-0 ${syne.className} relative md:static`}>
                    Creative design
                  </span>
                </div>
                <div className="flex items-center gap-2 relative">
                  <div className="md:w-3 md:h-3 w-[12px] h-[12px] bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full absolute md:static left-[-2px] md:left-0"></div>
                  <span className={`text-black font-medium md:text-[18px] text-[14px] ${syne.className} left-[15px] md:left-0 relative md:static`}>
                    Top-tier engineering
                  </span>
                </div>
                <div className="flex items-center gap-2 relative">
                  <div className="w-[12px] h-[12px] md:w-3 md:h-3 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full absolute md:static left-[20px] md:left-0"></div>
                  <span className={`text-black font-medium md:text-[18px] text-[14px] ${syne.className} left-[35px] md:left-0 relative md:static`}>
                    Innovation
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} number={stat.number} label={stat.label}
                isLast={index === stats.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <h2
                  className={`text-4xl md:text-[54px] font-semibold text-black mb-8  ${syne.className}`}
                >
                  What We Do
                </h2>
                <p
                  className={`text-black text-[18px] leading-relaxed mb-6 font-normal ${poppins.className}`}
                >
                  We Take Your Idea From Concept To Reality, Ensuring A
                  Market-Ready Product That Is Scalable, Reliable, And Designed
                  For Success.
                </p>
                <p
                  className={`text-black text-[16px] leading-relaxed mb-4 font-normal ${poppins.className}`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p
                  className={`text-black text-[16px] leading-relaxed mb-8 font-normal ${poppins.className}`}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <Button className="cursor-pointer bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] hover:from-blue-500 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                  Read More
                </Button>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <Image
                    src="/images/productDevelopment/group.png"
                    alt="Product Development Team"
                    width={600}
                    height={400}
                    className="w-full h-[300px] lg:h-[400px] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 lg:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16 lg:space-y-20">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-8 lg:gap-12 ${
                    index % 2 === 0 ? "bg-[#FAF6FF] rounded-2xl" : "" /*   index % 2 === 0 ? "bg-[#FAF6FF] rounded-2xl p-4 lg:p-8" : "" esto teniamos en el if*/
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        width={589}
                        height={537}
                        className="w-full h-[300px] lg:h-[537px] object-cover"
                      />
                      <div className="absolute inset-0 bg-opacity-20"></div>
                      <div
                        className="absolute flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16"
                        style={{
                          right: isMobile 
                            ? (step.numberPositionMobile?.right ? `${step.numberPositionMobile.right}%` : undefined)
                            : (step.numberPosition?.right ? `${step.numberPosition.right}%` : undefined),
                          left: isMobile
                            ? (step.numberPositionMobile?.left ? `${step.numberPositionMobile.left}%` : undefined)
                            : (step.numberPosition?.left ? `${step.numberPosition.left}%` : undefined),
                          top: isMobile
                            ? (step.numberPositionMobile?.top ? `${step.numberPositionMobile.top}%` : undefined)
                            : (step.numberPosition?.top ? `${step.numberPosition.top}%` : undefined),
                          bottom: isMobile
                            ? (step.numberPositionMobile?.bottom ? `${step.numberPositionMobile.bottom}%` : "5%")
                            : (step.numberPosition?.bottom ? `${step.numberPosition.bottom}%` : "5%"),
                        }}
                      >
                        <span
                          className={`text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-xl ${poppins.className} leading-none`}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6 px-4 lg:px-0">
                  <Image
                        src={step.icon}
                        alt={step.imageAlt}
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px]"
                      />
                    <div className="flex items-center gap-4">
                     
                      <h2
                        className={`text-2xl lg:text-3xl xl:text-[42px] font-bold text-black leading-tight ${poppins.className}`}
                      >
                        {step.title}
                      </h2>
                    </div>

                    <p
                      className={`text-gray-600 text-base lg:text-[19px] leading-relaxed ${poppins.className}`}
                    >
                      {step.description}
                    </p>

                    <div className="space-y-2 lg:space-y-3">
                      {step.bulletPoints.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex items-center space-x-2 lg:space-x-3"
                        >
                          <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-3 h-3 lg:w-4 lg:h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span
                            className={`text-gray-700 text-sm lg:text-base ${poppins.className} font-semibold`}
                          >
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button className="cursor-pointer bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] hover:from-blue-500 hover:to-purple-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-sm lg:text-base">
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Body>

      <div className="mb-[200px] w-[90%] rounded-[40px] bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] max-w-7xl mx-auto text-center relative z-10 py-16 px-4">
        <div className="absolute lg:left-[0%] left-[1%] lg:top-[15%] top-[1%]">
          <Image
            src="/images/productDevelopment/half-moon.png"
            alt="Network decoration"
            width={156}
            height={156}
            className="lg:w-[156px] lg:h-[156px] w-[70px] h-[70px] opacity-80"
          />
        </div>
        <div className="absolute lg:right-[0%] right-[1%] lg:top-[60%] top-[85%] rotate-[200deg]">
          <Image
            src="/images/productDevelopment/half-moon.png"
            alt="Network decoration"
            width={156}
            height={156}
            className="lg:w-[156px] lg:h-[156px] w-[70px] h-[70px] opacity-80"
          />
        </div>
        <h2
          className={`text-[30px] md:text-[56px] font-bold text-white mb-6 ${syne.className}`}
        >
          We drive business growth with memorable digital products.
        </h2>
        <p
          className={`text-[24px]  text-white/90 mb-8 font-semibold ${poppins.className}`}
        >
          Let&apos;s bring your vision to life.
        </p>
        <Button
          className={`cursor-pointer font-normal bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full shadow-lg transition-all duration-300 text-lg ${poppins.className}`}
        >
          Talk with our product team!
        </Button>
      </div>

      <WhyWorkWithUsSection 
        title="Why Choose"
        subtitle="DreamMakers?"
        highlights={[
          {
            title: "Custom-Tailored Approach",
            description: "Solutions that align with your business needs."
          },
          {
            title: "Cutting-Edge Technologies",
            description: "AI, blockchain, cloud solutions & more."
          },
          {
            title: "Full-Cycle Development",
            description: "From ideation to post-launch support."
          },
          {
            title: "Future-proof architecture",
            description: "Future-proof architecture."
          }
        ]}
        buttonText="Read More"
        className="-mt-8"
        variant="four-columns"
        useCustomIcons={true}
      />

      <section className="bg-white py-16 md:px-4 px-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 px-4">
              <h2
                className={`text-4xl md:text-[54px] font-bold text-black mb-8  ${syne.className}`}
              >
                Success stories
              </h2>
              <p
                className={`text-black text-[18px] leading-relaxed mb-6 md:w-[85%] w-[100%] font-normal ${poppins.className}`}
              >
                Discover how our product development Work based entirely on user
                feedback—took one startup to the next level.
              </p>
              <p
                className={`text-black text-[18px] leading-relaxed mb-8 md:w-[85%] w-[100%] font-normal ${poppins.className}`}
              >
                Our Versatile Technical Expertise Is The Gold Standard Of The
                Industry.
              </p>
              <Button className="bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] hover:from-blue-500 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                Read More
              </Button>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl p-4">
                  <div className="relative">
                    <Image
                      src="/images/productDevelopment/group6.png"
                      alt="Team collaboration"
                      width={620}
                      height={427}
                      className="w-full h-[300px] lg:h-[427px] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rounded-[40px] bg-[#000000] md:max-w-7xl w-[90%] mx-auto text-center relative z-10 py-16 px-4 mb-22">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2
            className={`text-[24px] md:text-[56px] font-bold text-white mb-8 leading-tight  ${syne.className}`}
          >
            We&apos;ll help you plan, design, and grow your digital product
          </h2>
          <Button className={`cursor-pointer font-normal bg-white text-black hover:bg-gray-100 border border-black px-8 py-6 rounded-full  shadow-lg transition-all duration-300 text-lg ${poppins.className} text-[18px]`}>
            Get In Touch
          </Button>
        </div>
      </div>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-[54px] font-bold text-black text-center mb-12 font-400 ${syne.className}`}
          >
            Dream Makers competitive edge
          </h2>

          <div className="space-y-4">
            {accordionItems.map((item, index) => {
              const isExpanded = expandedItems.includes(index);

              return (
                <div
                  onClick={() => {
                    if (isExpanded) {
                      setExpandedItems(
                        expandedItems.filter((i) => i !== index)
                      );
                    } else {
                      setExpandedItems([...expandedItems, index]);
                    }
                  }}
                  key={index}
                  className={`rounded-[30px] overflow-hidden ${
                    isExpanded
                      ? "bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE]"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="p-4 md:p-6 flex items-center justify-between">
                    <h3
                      className={`text-[13px] md:text-[32px] font-semibold  ${
                        isExpanded ? "text-white" : "text-gray-800"
                      } ${syne.className}`}
                    >
                      {item.title}
                    </h3>
                    <button
                      className={`md:w-8 md:h-8 w-4 h-4 rounded-full flex items-center justify-center ${
                        isExpanded
                          ? "bg-white"
                          : "bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE]"
                      }`}
                    >
                      <svg
                        className={`md:w-4 md:h-4 w-[20px] h-[20px] ${
                          isExpanded ? "text-gray-600" : "text-white"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-750 ease-in-out ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="md:p-4 p-2">
                      <div className="bg-white rounded-[30px] p-6 border border-gray-200">
                        <p
                          className={`text-gray-700 leading-relaxed font-400 text-[12px] md:text-[16px] ${poppins.className}`}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="bg-white px-4 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          <CTASection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDevelopmentPage;
