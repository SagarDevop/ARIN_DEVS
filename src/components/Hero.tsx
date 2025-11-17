import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;

    gsap.to(text, {
      z: -300,
      opacity: 0.4,
      scale: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom+=1% top",
      pin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center px-6 pt-20 
        bg-white dark:bg-black transition-colors duration-300 perspective-[1200px]"
      >
        <div
          ref={textRef}
          className="max-w-5xl mx-auto text-center will-change-transform"
        >
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 
          text-black dark:text-white"
          >
            Modern Websites.
            <br />
            <span className="text-primary">Clean Code.</span>
            <br />
            Real Results.
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 
            text-gray-700 dark:text-gray-300"
          >
            We craft exceptional digital experiences that drive growth and
            elevate your brand.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground 
            px-8 py-4 rounded-full text-lg font-medium"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section
        className="relative h-screen w-full overflow-hidden 
        bg-white dark:bg-black transition-colors duration-300"
      >
        <video
          src="/overlay.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        ></video>

        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 space-y-8">
          {/* TOP TAGLINE */}
          <p className="text-lg tracking-widest font-medium text-gray-200 uppercase">
            Digital Craftsmanship • Real Impact
          </p>

          {/* MAIN LINES */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Modern <span className="text-primary">Web Experiences</span> built
              with precision.
            </h2>

            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Scalable{" "}
              <span className="text-primary">Full-Stack Solutions</span> for
              real growth.
            </h2>

            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Impact-driven{" "}
              <span className="text-primary">Brand & UI Design</span> that
              stands out.
            </h2>
          </div>

          {/* BOTTOM BRAND LINE */}
          <p className="absolute bottom-8 left-6 md:left-12 text-gray-300 text-sm md:text-base font-light tracking-wide">
            Arin Devs — Shaping ideas into high-performance digital experiences.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
