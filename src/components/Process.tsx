import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stepsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery",
      description:
        "We start by understanding your vision, goals, and challenges. Deep dive into your business needs.",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description:
        "Craft a tailored roadmap with clear milestones. Define scope, timeline, and deliverables.",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Build your solution with clean code and best practices. Regular updates and transparent communication.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description:
        "Deploy with confidence. Ongoing support and optimization to ensure continued success.",
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                ref={(el) => (stepsRef.current[index] = el)}
                className="relative"
              >
                <div className="bg-card p-8 rounded-2xl border border-border h-full">
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mt-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
