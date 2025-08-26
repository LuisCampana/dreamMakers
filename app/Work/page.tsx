import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Body from "@/components/layout/body/Body";
import React from "react";
import CTASection from "@/components/ui/CTASection";
import WhyWorkWithUsSection from "@/components/ui/WhyWorkWithUsSection";
import ProjectCard from "@/components/ui/ProjectCard";
import HeroSection from "@/components/ui/HeroSection";
import { Project } from "@/lib/types";

const WorkPage = () => {
  const projects: Project[] = [
    {
      id: "01",
      title: "AI-Driven Customer Insights Platform",
      subtitle: "Predictive analytics with LLMs and ML pipelines.",
      description:
        "The client needed to leverage AI to extract actionable insights from omnichannel data and improve decision-making.",
      solution:
        "We built an end-to-end AI platform combining LLM-based summarization with supervised models for churn prediction, including a robust MLOps workflow.",
      metrics: [
        "15% reduction in churn within three months",
        "2x faster insight generation for analysts",
        "Automated data pipelines with CI/CD for models",
      ],
      image: "/images/work-images/imageAI.png",
 
      numberPosition: { left: { mobile: 0, desktop: 2 }, bottom: { mobile: 0, desktop: 1 } },
    },
    {
      id: "02",
      title: "AI-Powered E-Commerce Recommendation Engine",
      subtitle: "A mid-sized e-commerce company.",
      description:
        "The client needed an intelligent recommendation system to increase conversion rates and improve customer experience.",
      solution:
        "We implemented an AI-driven recommendation engine that personalized product suggestions based on user behavior and preferences.",
      metrics: [
        "25% increase in conversion rates",
        "3x improvement in customer retention",
        "Enhanced user experience with real-time suggestions",
      ],
      image: "/images/work-images/imageWork1.png",
      numberPosition: { left: { mobile: 0, desktop: 2 }, bottom: { mobile: 0, desktop: 1 } },
    },
    {
      id: "03",
      title: "Custom ERP System for Logistics & Supply Chain",
      subtitle: "A logistics company managing large-scale supply chains.",
      description:
        "Inefficient inventory tracking and outdated manual processes.",
      solution:
        "We developed a custom ERP solution with automated workflows, real-time inventory tracking, and predictive analytics.",
      metrics: [
        "50% reduction in operational costs",
        "30% faster order fulfillment",
        "Seamless integration with third-party logistics providers",
      ],
      image: "/images/work-images/imageWork2.png",
      numberPosition: { right: { mobile: 0, desktop: 2 }, bottom: { mobile: 0, desktop: 1 } },
    },
    {
      id: "04",
      title: "Scalable SaaS Platform for Project Management",
      subtitle: "A growing startup in the productivity space.",
      description:
        "The client needed a scalable, feature-rich project management tool to compete in a crowded market.",
      solution:
        "We designed and developed a cloud-based SaaS platform with real-time collaboration, task automation, and seamless integrations.",
      metrics: [
        "10,000+ active users within six months",
        "40% increase in team efficiency for users",
        "Secured Series A funding",
      ],
      image: "/images/work-images/imageWork.png",
      numberPosition: { right: { mobile: 0, desktop: 2 }, bottom: { mobile: 0, desktop: 1 } },
    },
  ];

  return (
    <div className="w-full">
      <Header />
      <Body>
        <HeroSection
          title="Our Work"
          description="At DreamMakers.Tech, We Take Pride In Delivering High-Quality Digital Solutions That Drive Business Success. From Startups To Enterprises, Our Team Has Built Cutting-Edge Products That Solve Real-World Challenges."
          buttonText="Contact Us"
          buttonVariant="transparent"
        />

        <section className="bg-white py-12 lg:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16 lg:space-y-20">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </Body>
      <WhyWorkWithUsSection />
      <div className="bg-white lg:px-4 py-6 lg:py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <CTASection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;
