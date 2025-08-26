
import React from "react";
import { Syne } from "next/font/google";
import ServiceCard from "@/components/ui/ServiceCard";

const syne = Syne({ subsets: ["latin"] });

const ServicesSection = () => {
  const services = [
    {
      image: "/images/services-images/webDeveloper.png",
      title: "Web Development",
      description: "Our team specializes in creating comprehensive, scalable, and high-performing web applications tailored to meet your specific business requirements. From e-commerce platforms to content management systems, we build robust solutions that drive engagement and efficiency."
    },
    {
      image: "/images/services-images/uidesign.png",
      title: "UI/UX Design",
      description: "Our UI/UX Design services focus on delivering visually appealing and highly functional interfaces. We prioritize user experience, ensuring that each design is intuitive, engaging, and optimized for usability, leading to higher user satisfaction and retention."
    },
    {
      image: "/images/services-images/mobileDevelopment.png",
      title: "Mobile Development",
      description: "We provide comprehensive Mobile Development services, crafting high-performance applications for both iOS and Android platforms. Our expertise ensures seamless integration, intuitive design, and optimized performance to deliver exceptional user experiences on mobile devices."
    },
    {
      image: "/images/services-images/apiIntegration.png",
      title: "API & Integrations",
      description: "Our API & Integrations services enable seamless connectivity between your systems and third-party applications. We develop robust APIs and implement integrations that enhance your digital ecosystem, improving data flow and operational efficiency."
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <button
            className={`px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] shadow-lg mb-8 ${syne.className}`}
          >
            Our Services
          </button>
          <h2
            className={`text-[25px] md:text-[54px] font-500 text-black leading-tight ${syne.className}`}
          >
            Cutting-edge technologies to deliver the best projects meeting the
            high demands of today.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
