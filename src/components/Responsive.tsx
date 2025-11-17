import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Responsive() {
  const sectionRef = useRef(null);
  const imagesContainerRef = useRef(null);

  const images = [
    "https://thezoeteam.com/hubfs/Web%20Design%20MArketing%20Best%20Practices-min.jpg",
    "https://ijustneedawebsite.com/wp-content/uploads/2024/10/mockup.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcwJG8yP1wvHxj4lcKULz6AOBTpua_Cp4zInefaegKRIFCSnsQBBkWKQLVTsp268192U&usqp=CAU",
    "https://www.thanksweb.in/assets/img/web-design-img.webp",
    "https://www.designer-daily.com/wp-content/uploads/2021/12/image1.jpeg",
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
          <Smartphone className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            Responsive <span className="text-primary">Design</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
           Perfect experience across all devices. From mobile to desktop, your site looks stunning everywhere.
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

