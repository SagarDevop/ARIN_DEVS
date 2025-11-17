import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function UiUx() {
  const sectionRef = useRef(null);
  const imagesContainerRef = useRef(null);

  const images = [
    "https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
    "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149053613.jpg?semt=ais_hybrid&w=740&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs0rMgmlu3lSzpNYxXXrRkZt0ZeJGthgEQ1lbFHK0ZueeQzsy-792vUWmxJOAJdd6XD4&usqp=CAU",
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
          <Palette className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            UI/UX <span className="text-primary">Design</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Beautiful interfaces that users love. Every pixel crafted with
            attention to detail and user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
