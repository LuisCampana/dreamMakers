import Body from "@/components/layout/body/Body";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ContactSection from "@/components/sections/home/ContactSection";
import Herosection from "@/components/sections/home/Herosection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import WorkCarousel from "@/components/sections/home/WorkCarousel";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Body>
        <Herosection />
        <ServicesSection />
        <WorkCarousel />
        <ContactSection />
      </Body>
      <Footer />
    </div>
  );
}
