import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WebDev() {
  const sectionRef = useRef(null);
  const imagesContainerRef = useRef(null);

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRdOUTqMnUgDbrwM4uTsYo4LaOqrno94W6EKyQro1Wgsfk8bIoalzE1IzMR7VY4iO2wA&usqp=CAU",
    "https://px-web-images5.pixpa.com/7ZVD4Il4BeqljUQfyI_jD9wOwt1jfmbL5sarR56GX4Q/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNzE1MTYxNDM4LTc1MTUyMC1waXhwYWpwZy5wbmc=",
    "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/04/Website-mockup2.jpg?w=750",
    "https://cdn.prod.website-files.com/687e8d1b96312cc631cafec7/68c49315f3746a789e97bf0b_66cca67ec447bd92b80d6521_646bbdd902be8595a4d0b7e9_Superlist.png",
    "https://cdn.shopify.com/s/files/1/0070/7032/articles/best_2520free_2520stock_2520photo_2520sites.png?v=1732290102",
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
        <div className="h-fit sticky top-20">
          <Code2 className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            Modern <span className="text-primary">Web Development</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            High-performance websites and full-stack applications built with
            scalable engineering.
          </p>
        </div>

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
      </div>
    </section>
  );
}

