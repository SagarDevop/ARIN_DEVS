import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
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
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      logo: "TS",
      review: "Arin Devs transformed our online presence. The website is stunning and our conversions increased by 200%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Digital Flow",
      logo: "DF",
      review: "Professional, creative, and incredibly efficient. They delivered beyond our expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Brand Studio",
      logo: "BS",
      review: "The attention to detail and user experience is exceptional. Our clients love the new interface.",
      rating: 5,
    },
    {
      name: "David Park",
      company: "Growth Labs",
      logo: "GL",
      review: "Clean code, beautiful design, and seamless functionality. Best development team we've worked with.",
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-4xl md:text-5xl font-light text-center mb-20">
          What Our Clients Say
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-8 bg-apple-grey dark:bg-card rounded-2xl h-full border border-border/50 hover:border-ios-blue/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-ios-blue text-white flex items-center justify-center font-medium">
                      {testimonial.logo}
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-ios-blue text-ios-blue"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    "{testimonial.review}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
