"use client"
import GradientCheckBadge from "@/components/ui/GradientCheckBadge";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Body from "@/components/layout/body/Body";
import React from "react";
import { Poppins, Syne } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/ui/CTASection";
import ServiceCard from "@/components/ui/ServiceCard";
import StatCard from "@/components/ui/StatCard";
import InsightCard from "@/components/ui/InsightCard";
import HeroSection from "@/components/ui/HeroSection";
import HowWeHelp from "@/components/ui/howWeHelp";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({ subsets: ["latin"] });

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

interface InsightCard {
  image: string;
  title: string;
  description: string;
}

interface StatItem {
  number: string;
  label: string;
}

const CustomSoftwareDevelopmentPage = () => {
  const whyChooseUsPoints = [
    {
      title: "Custom-Built For Your Needs",
      description:
        "We don’t believe in one-size-fits-all solutions. Every piece of software we develop is designed to meet your specific business requirements.",
    },
    {
      title: "Scalable & Future-Proof",
      description:
        "Our solutions are built with scalability in mind, ensuring your software grows as your business expands.",
    },
    {
      title: "Secure & Reliable",
      description:
        "With industry best practices in cybersecurity and compliance, we prioritize data protection and software reliability.",
    },
    {
      title: "Agile & Efficient Development",
      description:
        "Our agile approach ensures quick iterations, transparent communication, and timely delivery.",
    },
  ];

  const services: ServiceCard[] = [
    {
      title: "Enterprise Software Solutions",
      description:
        "Custom-built software designed to streamline business operations, improve efficiency, and support large-scale workflows.",
      image: "/images/softwareDevelopment/icon.svg",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "We build intuitive, high-performance web and mobile applications that offer seamless user experiences across all devices.",
      image: "/images/softwareDevelopment/icon.svg",
    },
    {
      title: "API Development & System Integrations",
      description:
        "We create powerful APIs and integrations to ensure your business systems work seamlessly together. ",
      image: "/images/softwareDevelopment/icon2.svg",
    },
  ];

  const technologyCategories = [
    {
      title: "Frontend",
      technologies: ["React", "Vue.js", "Angular"],
    },
    {
      title: "Backend",
      technologies: ["Node.js", "Python", ".NET", "Java"],
    },
    {
      title: "Mobile",
      technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
    },
    {
      title: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    },
  ];

  const insights: InsightCard[] = [
    {
      image: "/images/softwareDevelopment/insights2.png",
      title: "Oracle Content Manager vs. Adobe Experience Manager",
      description:
        "Which is best: Oracle Content Manager or Adobe Experience Manager? We’ve analyzed these two CMSs, including features, pros/cons and best use cases so you can make an informed choice.",
    },
    {
      image: "/images/softwareDevelopment/insights1.png",
      title: "What Is Salesforce? Key Features and Benefits",
      description:
        "Discover the main features and advantages of Salesforce. We’ll analyze why it’s a top-ranked platform and discuss the best use cases for boosting your business KPIs.",
    },
    {
      image: "/images/softwareDevelopment/insights.png",
      title: "Oracle Content Manager vs. Adobe Experience Manager",
      description:
        "This blog serves as a guide for tech-savvy business directors and professionals who want a deeper understanding of GenAI applications in critical functions.",
    },
  ];

  const stats: StatItem[] = [
    { number: "64", label: "NPS Score" },
    { number: "660", label: "Tech experts" },
    { number: "89+", label: "Average expert seniority" },
    { number: "152", label: "Expertise in top 10 technologies" },
  ];

  return (
    <div className="w-full">
      <Header />
      <Body>
        <HeroSection
          title={`Tailored Solutions for
                Your Business`}
          description="We create robust, scalable, and secure software to solve complex business challenges."
          buttonText="Contact Us"
          buttonVariant="transparent"
          titleSize="text-[30px]"
        />

        {/* Why Choose Us Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <h2
                  className={`text-[28px] md:text-[54px] font-bold text-black mb-8 ${syne.className}`}
                >
                  Why Choose Us?
                </h2>
                <div className="space-y-6">
                  {whyChooseUsPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <GradientCheckBadge
                        size="sm"
                        className="mt-1.5 flex-shrink-0"
                      />
                      <div>
                        <h3
                          className={`text-[20px] font-semibold text-black mb-2 ${poppins.className}`}
                        >
                          {point.title}
                        </h3>
                        <p
                          className={`text-gray-600 text-[16px] leading-relaxed ${poppins.className}`}
                        >
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 mt-8">
                  Read More
                </Button>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/softwareDevelopment/group1.png"
                    alt="Why Choose Us"
                    width={620}
                    height={637}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-4">
          <div className="max-w-[1500px] lg:p-[2%] p-[4%] mx-auto bg-[#FAF6FF] rounded-2xl">
            <h2
              className={`text-[26px]  md:text-5xl font-bold text-black text-center mb-16 pt-20 ${syne.className}`}
            >
              Our Custom Software Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/softwareDevelopment/techology2.png"
                    alt="Technologies We Use"
                    width={620}
                    height={637}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2
                  className={`text-[26px] md:text-5xl font-bold text-black mb-8  ${syne.className}`}
                >
                  Technologies We Use
                </h2>
                <div className="space-y-6">
                  {technologyCategories.map((category, index) => (
                    <div key={index}>
                      <h3
                        className={`text-lg font-bold text-black mb-3 ${poppins.className} flex items-center gap-2`}
                      >
                        <GradientCheckBadge
                          size="sm"
                          className="flex-shrink-0"
                        />
                        {category.title}
                      </h3>
                      <p
                        className={`text-gray-600 leading-relaxed ${poppins.className} ml-6`}
                      >
                        {category.technologies.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 mt-8">
                  Read More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We Help You Thrive Section */}

        <HowWeHelp />

        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <h2
                  className={`md:text-[54px] text-[28px] md:text-5xl font-bold text-black mb-6  ${syne.className}`}
                >
                  Our leading-edge custom software development services
                </h2>
                <p
                  className={`text-gray-600 text-[22px] leading-relaxed mb-4 ${poppins.className}`}
                >
                  At Dream Makers We Specialize In Web And Mobile Applications
                </p>
                <p
                  className={`text-gray-600 text-[22px] leading-relaxed mb-4 ${poppins.className}`}
                >
                  We&apos;re Seasoned In Building Software From Scratch, As Well
                  As Setting Up High-Impact Integrations, Automations And
                  Migrations.
                </p>
                <p
                  className={`text-gray-600 text-[23px] leading-relaxed mb-8 ${poppins.className}`}
                >
                  Our Versatile Technical Expertise Is The Gold Standard Of The
                  Industry.
                </p>
                <Button className="bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                  Read More
                </Button>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/softwareDevelopment/leading-edge.png"
                    alt="Leading Edge Services"
                    width={620}
                    height={637}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2
              className={`md:text-[54px] text-[28px] md:text-5xl font-bold text-black text-center mb-12 ${syne.className}`}
            >
              Explore related insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <InsightCard
                  key={index}
                  image={insight.image}
                  title={insight.title}
                  description={insight.description}
                  buttonText="Business"
                  imageHeight="h-[304px]"
                  titleSize="text-[21px]"
                  descriptionSize="text-[16px]"
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2
              className={`text-[25px] md:text-[54px]  text-black mb-12 font-medium ${syne.className}`}
            >
              Why choose Dream Makers?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard 
                  key={index} 
                  number={stat.number} 
                  label={stat.label} 
                  isLast={index === stats.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </Body>
      <div className="bg-white px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <CTASection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomSoftwareDevelopmentPage;
