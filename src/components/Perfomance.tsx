import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Perfomance() {
  const sectionRef = useRef(null);
  const imagesContainerRef = useRef(null);

  const images = [
    "https://pureseo.com/wp-content/uploads/2022/05/page-experience-website-performance.jpg",
    "https://cdn.prod.website-files.com/62fec8041edae129b05e72ac/64f81731b2006733813f1d25_Blog-HeroImage-Website-Speed-Optimization-1600x900px.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZygFsAO45sc0n36YMNqmI5P2Qm00YwBPfsg&s",
    "https://cdnwebsite.databox.com/wp-content/uploads/2019/05/22115536/website-kpis.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopOZ3DWRGu9PfYL1yUy6HY4XOt890iUh0Mw5cMdkoU-WdKy8PdOPmAbn0auPJ5EJhrC8&usqp=CAU",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = imagesContainerRef.current;

    // SLIDE ENTIRE IMAGE STACK (Mikatalo method)
    gsap.to(container, {
      yPercent: -22 * (images.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=900",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen px-10 flex items-center justify-center overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full">
        {/* LEFT CONTENT */}

        {/* RIGHT – IMAGE STACK SLIDING */}
        <div
          ref={imagesContainerRef}
          className="relative top-[150vh] flex flex-col space-y-20 will-change-transform"
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-full rounded-3xl object-cover shadow-xl"
            />
          ))}
        </div>

        <div className="h-fit sticky top-20">
          <Zap className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            Smooth <span className="text-primary">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Lightning-fast load times and seamless interactions. Optimized for
            speed and search engines.
          </p>
        </div>
      </div>
    </section>
  );
}
