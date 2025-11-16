import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Showcase from "@/components/Showcase";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Showcase />
      <CaseStudies />
      <Process />
      <Pricing />
      <Testimonials />
      <Reviews />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
