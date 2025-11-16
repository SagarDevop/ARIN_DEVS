import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project) => {
        const img = project.querySelector(".showcase-image");
        const content = project.querySelector(".showcase-content");

        gsap.from(img, {
          scrollTrigger: {
            trigger: project,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
          y: 100,
          scale: 0.95,
          opacity: 0.5,
        });

        gsap.from(content, {
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            end: "top 50%",
          },
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern shopping experience with seamless checkout, inventory management, and real-time analytics. Built for scale and conversion.",
      tech: "React, Node.js, Stripe",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Intuitive admin panel with data visualization, team collaboration, and advanced reporting. Clean interface, powerful features.",
      tech: "React, TypeScript, D3.js",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Mobile-First App",
      description:
        "Progressive web app delivering native-like experience. Offline support, push notifications, and lightning-fast performance.",
      tech: "Next.js, PWA, Firebase",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="showcase" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projects we're proud of
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectsRef.current[index] = el)}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`showcase-image ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-3xl shadow-[var(--shadow-soft)] w-full h-[400px] object-cover"
                />
              </div>

              <div
                className={`showcase-content ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
