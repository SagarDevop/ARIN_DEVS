import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare } from "lucide-react"; 

gsap.registerPlugin(ScrollTrigger);

export default function Chatbot() {
  const sectionRef = useRef(null);
  const imagesContainerRef = useRef(null);

  const images = [
    "https://www.revechat.com/wp-content/uploads/2020/05/chatbot-best-practices.webp",
    "https://www.nextiva.com/blog/wp-content/uploads/sites/10/2024/07/Conversational-AI-Chatbots.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG11E2g2tbm1ieGA6KbzYM-qiJrrwFz4kV_ptbM21VcvMMPx2JixAD_XZ1RvQDW33Kx0E&usqp=CAU",
    "https://img.freepik.com/premium-vector/chatbot-concept-with-copy-space-text-vector-blue-background-ai-communication-designs-digital-assistance-techrelated-projects_1020043-804.jpg",
    "https://www.oracle.com/a/ocom/img/yt-video-thumbnail-qwokasmqcto.jpg",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = imagesContainerRef.current;

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

       
        <div className="h-fit sticky top-20">
          <MessageSquare className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            Smart <span className="text-primary">Chatbot Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            AI-powered chat systems built for automation, instant support, and enhanced customer experiences.
          </p>
        </div>

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
