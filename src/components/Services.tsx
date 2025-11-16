import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Palette, Zap, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: false,
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks. Fast, scalable, and maintainable code.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful interfaces that users love. Every pixel crafted with attention to detail and user experience.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Lightning-fast load times and seamless interactions. Optimized for speed and search engines.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Perfect experience across all devices. From mobile to desktop, your site looks stunning everywhere.",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
