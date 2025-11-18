import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
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

    gsap.fromTo(
      section.querySelectorAll(".pricing-card"),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "7,999",
      period: "one-time",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Modern UI/UX design",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact form integration",
        "2 rounds of revisions",
        "1 month support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "10,999",
      period: "one-time",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 pages",
        "Custom animations (GSAP)",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce ready (up to 50 products)",
        "Performance optimization",
        "Unlimited revisions",
        "3 months support",
        "Analytics setup",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced animations & interactions",
        "API integrations",
        "Full e-commerce solution",
        "Database architecture",
        "Authentication system",
        "Dedicated project manager",
        "Priority support",
        "6 months maintenance",
      ],
      highlighted: false,
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-4xl md:text-5xl font-light text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
          Choose the package that fits your needs. All plans include our signature attention to detail and premium design.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-ios-blue text-white border-ios-blue scale-105 shadow-hover"
                  : "bg-apple-grey dark:bg-card border-border/50 hover:border-ios-blue/50 hover:shadow-soft"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-ios-blue text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3
                  className={`text-2xl font-medium mb-2 ${
                    plan.highlighted ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className={`text-4xl font-light ${
                      plan.highlighted ? "text-white" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <Button
                className={`w-full mb-8 magnetic-button ${
                  plan.highlighted
                    ? "bg-white text-ios-blue hover:bg-white/90"
                    : "bg-ios-blue text-white hover:bg-ios-blue/90"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-white" : "text-ios-blue"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/90" : "text-foreground/80"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include responsive design, cross-browser compatibility, and clean code.
          </p>
          <p className="text-sm text-muted-foreground">
            Need something custom? <span className="text-ios-blue cursor-pointer hover:underline">Let's talk</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
