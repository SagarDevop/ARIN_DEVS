import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
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

    gsap.fromTo(
      section.querySelectorAll(".review-card"),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, []);

  const reviews = [
    {
      name: "Alex Thompson",
      role: "CEO",
      company: "Innovate Co.",
      rating: 5,
      review: "Outstanding work! The team delivered a pixel-perfect website that exceeded all expectations.",
      avatar: "AT",
    },
    {
      name: "Jessica Lee",
      role: "Marketing Director",
      company: "Future Brands",
      rating: 5,
      review: "Professional, responsive, and incredibly talented. Our website traffic tripled within weeks.",
      avatar: "JL",
    },
    {
      name: "Ryan Martinez",
      role: "Founder",
      company: "StartUp Hub",
      rating: 5,
      review: "The smoothest development experience ever. Clean code and beautiful animations throughout.",
      avatar: "RM",
    },
    {
      name: "Sophie Williams",
      role: "Product Manager",
      company: "Tech Solutions",
      rating: 5,
      review: "Incredible attention to detail. Every interaction feels polished and premium.",
      avatar: "SW",
    },
    {
      name: "Daniel Kim",
      role: "CTO",
      company: "Digital Wave",
      rating: 5,
      review: "Best agency we've worked with. Fast turnaround and exceptional quality.",
      avatar: "DK",
    },
    {
      name: "Lisa Anderson",
      role: "Creative Director",
      company: "Design Studio",
      rating: 5,
      review: "They brought our vision to life perfectly. The animations are simply stunning.",
      avatar: "LA",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-apple-grey dark:bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-4xl md:text-5xl font-light text-center mb-4">
          Client Reviews
        </h2>
        <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
          Real feedback from real clients who trusted us with their digital presence
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card p-8 bg-background dark:bg-card rounded-2xl border border-border/50 hover:border-ios-blue/50 transition-all duration-300 hover:shadow-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-ios-blue text-white flex items-center justify-center font-medium text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                  <p className="text-xs text-muted-foreground">{review.company}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-ios-blue text-ios-blue" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
