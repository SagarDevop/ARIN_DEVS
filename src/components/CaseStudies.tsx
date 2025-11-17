import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCaseStudy = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

    section.querySelectorAll(".case-study").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const caseStudies = [
    {
      title: "AI-Driven Support & Lead Automation",
      category: "AI & Automation",
      client: "GrowEase Technologies",
      description:
        "Custom-built chatbot system that automates queries and captures quality leads.",
      results:
        "Reduced support load • Instant replies • Strong jump in engagement",
      image:
        "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdCUyMGJvdHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",

      details:
        "This AI chatbot was designed to replace a large chunk of manual customer support. With advanced NLP flows, response memory, and auto-lead qualification, it delivers instant answers and captures detailed user intent. Integrated seamlessly with CRM tools.",

      features: [
        "Smart conversational flows",
        "Automated lead capture",
        "CRM integration",
        "Instant response engine",
        "Multi-language support",
      ],

      tech: ["Django", "OpenAI API", "MongoDB", "TailwindCSS"],

      gallery: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWQ4KUWHXnuqGdkDHai7sXe0VZpIm55YdLA&s",
        "https://img.freepik.com/free-vector/dialog-with-chatbot-artificial-intelligence-reply-question-tech-support-instant-messaging-hotline-operator-ai-assistant-client-bot-consultant-vector-isolated-concept-metaphor-illustration_335657-1995.jpg?semt=ais_hybrid&w=740&q=80",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceVlJdoq4aB1xFDTn5s_aqlmXxStAxJKDeQ&s",
      ],
    },

    {
      title: "Smart E-Commerce Platform",
      category: "E-Commerce Development",
      client: "GreenCart Online Store",
      description:
        "High-performance online store with secure checkouts and product automation.",
      results:
        "Increase in sales • Better browsing experience • Mobile-optimized speed",
      image:
        "https://www.notiontechnologies.com/blog/wp-content/uploads/2023/03/how-to-build-an-ecommerce-website-from-scratch.webp",

      details:
        "A full e-commerce solution with custom admin dashboards, coupon system, product reviews, and analytics. Built with performance-first architecture to handle scale easily.",

      features: [
        "Product management system",
        "Real-time cart & checkout",
        "Admin dashboard",
        "SEO optimized pages",
        "Secure payment gateway",
      ],

      tech: ["React", "Express", "MongoDB", "Stripe", "Cloudinary"],

      gallery: [
        "https://img.freepik.com/free-vector/business-hand-drawn-e-commerce-landing-page_23-2149600513.jpg?semt=ais_hybrid&w=740&q=80",
        "https://cdn.prod.website-files.com/600b6ab92506fd10a1ca3f8a/649939b19ebdd8aa63ff87ca_eCommerce%20Website%20cover.png",
        "https://pixel77.com/wp-content/uploads/2024/06/ecommerce-website-designs-1-1024x768.webp",
      ],
    },
    {
  title: "Fitness Membership & Training Platform",
  category: "Gym & Fitness",
  client: "IronPulse Fitness Center",
  description:
    "High-impact gym website with membership plans, trainer profiles, and lead-focused enquiry system.",
  results:
    "More walk-ins • Higher membership enquiries • Better brand trust",
  image:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",

  details:
    "A complete fitness website built to convert visitors into members. Includes dynamic membership packages, trainer showcase, transformation gallery, and enquiry automation. Designed with strong visuals and performance-first structure to build authority and drive leads.",

  features: [
    "Membership plan showcase",
    "Trainer profiles & details",
    "Lead enquiry automation",
    "Transformation gallery",
    "SEO-optimized pages",
  ],

  tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "Cloudinary"],

  gallery: [
    "/gymg (1).png",
    "/gymg.png",
    "/gymg (2).png",
  ],
},
{
  title: "Restaurant Website With Online Reservations",
  category: "Food & Hospitality",
  client: "TasteBite Restaurant",
  description:
    "A visually rich restaurant website with digital menu, reservation form, and fast browsing experience.",
  results:
    "More table bookings • Stronger local SEO • Better first-impression experience",
  image:
    "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png",

  details:
    "A modern restaurant website crafted to improve customer trust and footfall. Includes menu categorization, chef highlights, ambience gallery, reviews, and an easy reservation system. Built with highly optimized images and smooth interactions.",

  features: [
    "Digital food menu",
    "Online table reservation",
    "Chef & speciality section",
    "Customer reviews",
    "High-resolution gallery",
  ],

  tech: ["React", "Express", "PostgreSQL", "TailwindCSS", "Cloudinary"],

  gallery: [
    "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxJRA3jotVs0FBS1PqOZ1JqXFPt0HDRjni3ov70DfUbHkYuFln1Nq-niMQBNWKHOuEbE&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwg88XvRoDwhy4BJKUB1Pblq2yDs_CQjiLaXOQ_zvRVoGQr5FKOEgYTED1jkE-9jSNgWg&usqp=CAU",
  ],
},


  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-background dark:bg-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-4xl md:text-5xl font-light text-center mb-4">
          Portfolio Case Studies
        </h2>
        <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
          Real projects, real results. See how we've helped businesses transform
          their digital presence.
        </p>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`case-study grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="inline-block px-4 py-1 bg-ios-blue/10 text-ios-blue rounded-full text-sm mb-4">
                  {study.category}
                </div>

                <h3 className="text-3xl md:text-4xl font-light mb-4">
                  {study.title}
                </h3>

                <p className="text-sm text-ios-blue mb-4">{study.client}</p>

                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="bg-apple-grey dark:bg-card p-6 rounded-xl mb-6">
                  <p className="font-medium">{study.results}</p>
                </div>
                <Button
                  className="magnetic-button group"
                  onClick={() => toggleCaseStudy(index)}
                >
                  {activeIndex === index
                    ? "Close Case Study"
                    : "View Case Study"}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                {activeIndex === index && (
                  <div className="mt-8 p-8 rounded-2xl border border-border bg-card transition-all duration-500">
                    <h4 className="text-xl font-semibold mb-4">
                      Project Overview
                    </h4>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {study.details}
                    </p>

                    <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc ml-6 text-muted-foreground mb-6">
                      {study.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold mb-2">Tech Used</h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {study.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-muted text-xs uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold mb-4">
                      Project Gallery
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {study.gallery.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          className="w-full h-full rounded-lg shadow-sm object-cover"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className={
                  index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                }
              >
                <div className="overflow-hidden rounded-2xl shadow-hover">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="case-image w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
