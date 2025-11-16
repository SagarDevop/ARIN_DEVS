import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelector(".section-title"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );

    section.querySelectorAll(".case-study").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );

      const image = card.querySelector(".case-image");
      gsap.fromTo(
        image,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const caseStudies = [
    {
      title: "E-Commerce Revolution",
      client: "Fashion Forward",
      description: "Complete redesign of online shopping experience with 300% increase in conversions",
      results: "+300% conversions, +150% revenue",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "SaaS Platform Launch",
      client: "CloudTech Solutions",
      description: "Modern SaaS dashboard with intuitive UX and real-time analytics",
      results: "10k+ active users in 3 months",
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Mobile Banking App",
      client: "FinServe",
      description: "Secure mobile banking experience with biometric authentication",
      results: "4.9★ rating, 500k+ downloads",
      category: "FinTech",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-4xl md:text-5xl font-light text-center mb-4">
          Portfolio Case Studies
        </h2>
        <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
          Real projects, real results. See how we've helped businesses transform their digital presence.
        </p>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`case-study grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="inline-block px-4 py-1 bg-ios-blue/10 text-ios-blue rounded-full text-sm mb-4">
                  {study.category}
                </div>
                <h3 className="text-3xl md:text-4xl font-light mb-4">
                  {study.title}
                </h3>
                <p className="text-sm text-ios-blue mb-4">{study.client}</p>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {study.description}
                </p>
                <div className="bg-apple-grey dark:bg-card p-6 rounded-xl mb-6">
                  <p className="font-medium">{study.results}</p>
                </div>
                <Button className="magnetic-button group">
                  View Case Study
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <div className="overflow-hidden rounded-2xl shadow-hover">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="case-image w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
