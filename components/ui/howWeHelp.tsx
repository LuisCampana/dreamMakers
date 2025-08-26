import React from "react";
import { Poppins, Syne } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({ subsets: ["latin"] });

interface ServiceItem {
  title: string;
  description: string[];
}

interface HowWeHelpProps {
  className?: string;
}

const HowWeHelp: React.FC<HowWeHelpProps> = ({ className = "" }) => {
  const services: ServiceItem[] = [
    {
      title: "Managed Services",
      description: [
        "Our end-to-end managed services ensure your software runs smoothly while you focus on growing your business. We handle development, maintenance, and continuous improvements, allowing you to stay ahead of the curve.",
        "With proactive support from our specialized Studios, we ensure your software evolves alongside your business needs, providing long-term stability and innovation.",
      ],
    },
    {
      title: "Staff Augmentation",
      description: [
        "Whether you need a single expert or a full team, we provide pre-vetted specialists who integrate effortlessly into your workflow, enhancing productivity and delivering results from day one.",
        "Seamlessly scale your in-house team with our flexible, cost-effective talent solutions.",
      ],
    },
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="flex justify-center mb-0 bg-white">
        <div className="relative bg-black px-8 md:px-35 py-3 md:py-6 rounded-t-[20px] md:rounded-t-[25px] z-10">
          <span
            className={`font-semibold text-white text-xl md:text-[56px] ${syne.className}`}
          >
            How we help
            <br />
            you thrive
          </span>
        </div>
      </div>

      <section className="bg-black py-20 px-4 rounded-b-[30px] md:rounded-b-[50px] rounded-t-[20px] md:rounded-t-[25px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center lg:text-left lg:px-0 px-8">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                </div>
                <h3
                  className={`lg:text-[34px] text-[26px] font-bold text-white mb-6 ${poppins.className}`}
                >
                  {service.title}
                </h3>
                <div
                  className={`text-gray-300 leading-relaxed space-y-4 lg:text-[18px] text-[16px] ${poppins.className}`}
                >
                  {service.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeHelp;
