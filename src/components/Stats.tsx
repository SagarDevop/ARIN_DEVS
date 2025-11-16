import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const stats = statsRef.current;

    gsap.fromTo(
      stats.querySelectorAll(".stat-item"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: stats,
          start: "top 80%",
        },
      }
    );
  }, []);

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "150+", label: "Brands Trust Us" },
    { number: "1000+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section ref={statsRef} className="py-32 bg-apple-grey dark:bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <h3 className="text-5xl md:text-6xl font-light mb-2 text-ios-blue">
                {stat.number}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
