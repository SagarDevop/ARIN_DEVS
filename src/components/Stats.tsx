import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const statsSection = statsRef.current;
    const items = statsSection.querySelectorAll(".stat-number");

    items.forEach((item) => {
      const finalValue = item.getAttribute("data-value");

      gsap.fromTo(
        item,
        { innerText: 0 },
        {
          innerText: finalValue.replace(/[^0-9]/g, ""),
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsSection,
            start: "top 80%",
          },
          onUpdate: function () {
            const raw = Math.floor(this.targets()[0].innerText);

            // Add suffixes like + or %
            if (finalValue.includes("+")) {
              item.innerText = raw + "+";
            } else if (finalValue.includes("%")) {
              item.innerText = raw + "%";
            } else {
              item.innerText = raw;
            }
          },
        }
      );
    });
  }, []);

  const stats = [
    { number: "5+", label: "Satisfied Clients" },
    { number: "1+", label: "Brands Trust Us" },
    { number: "10+", label: "Projects Delivered" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section ref={statsRef} className="py-32 bg-apple-grey dark:bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <h3
                className="stat-number text-5xl md:text-6xl font-light mb-2 text-ios-blue"
                data-value={stat.number}
              >
                0
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
