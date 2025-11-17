import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail, Linkedin, Phone } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  about: string[];
  tech: string[];
  highlights: string[];
  social: {
    linkedin: string;
    email: string;
    phone: string;
  };
};

export default function OurTeam() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const team: TeamMember[] = [
    {
      name: "Sagar Singh",
      role: "Full Stack Developer",
      img: "/sagar.png",

      about: [
        "Skilled in building scalable full-stack applications.",
        "Works on backend, APIs, cloud deployments, and architecture.",
        "Focuses on performance, code quality, and clean structure.",
      ],

      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS",
        "Docker",
        "GSAP",
        "Framer Motion",
      ],

      highlights: [
        "Developed complete production-level systems.",
        "Integrated advanced UI animations.",
        "Architected backend infrastructure.",
        "Improved performance & UX across products.",
      ],

      social: {
        linkedin: "https://linkedin.com",
        email: "sagar@example.com",
        phone: "+91 9876543210",
      },
    },

    {
      name: "Rahul Sharma",
      role: "UI/UX Designer",
      img: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",

      about: [
        "Creates user-friendly interfaces and refined UI systems.",
        "Builds design systems and product-ready layouts.",
        "Ensures clean visuals and smooth user flows.",
      ],

      tech: ["Figma", "XD", "Illustrator", "Wireframing", "Prototyping"],

      highlights: [
        "Designed 50+ high-end interfaces.",
        "Built complete UI kits for multiple projects.",
        "Improved UX metrics with deep research.",
      ],

      social: {
        linkedin: "https://linkedin.com",
        email: "rahul@example.com",
        phone: "+91 9876543000",
      },
    },

    {
      name: "Ragesh",
      role: "Frontend Engineer",
      img: "/ragesh.jpg",

      about: [
        "Works on frontend performance and UI logic.",
        "Implements animations and responsive layouts.",
        "Collaborates with designers and backend teams.",
      ],

      tech: ["React", "TypeScript", "Redux", "Tailwind", "GSAP"],

      highlights: [
        "Built high-performance UI components.",
        "Optimized JS bundle size.",
        "Improved accessibility & responsiveness.",
      ],

      social: {
        linkedin: "https://linkedin.com",
        email: "aman@example.com",
        phone: "+91 9999999999",
      },
    },
  ];

  return (
    <div className="relative w-full h-[200vh] dark:bg-black bg-white">
        <div className="text-center pt-20">
          <h2 className="text-4xl md:text-6xl font-bold">Our Team Members </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            They are passionate
          </p>
        </div>
      <button
        ref={prevRef}
        className="absolute left-[70vw] bottom-[25vh] z-50
        w-12 h-12 rounded-full bg-white shadow 
        flex items-center justify-center
        hover:scale-110 hover:-translate-x-1 hover:bg-gray-100
        transition-all duration-200"
      >
        <ArrowLeft className="dark:text-black w-5 h-5" />
      </button>

      <button
        ref={nextRef}
        className="absolute right-[15vw] bottom-[25vh] z-50
        w-12 h-12 rounded-full bg-white shadow 
        flex items-center justify-center
        hover:scale-110 hover:translate-x-1 hover:bg-gray-100
        transition-all duration-200"
      >
        <ArrowRight className="dark:text-black w-5 h-5" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onInit={(swiper) => {
          if (prevRef.current && nextRef.current) {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        className="w-full h-full"
      >
        {team.map((member, index) => (
          <SwiperSlide
            key={index}
            className="h-full flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-center justify-between 
              px-10 pb-12 w-full max-w-6xl mx-auto gap-12"
            >
              <div className="flex-1 flex flex-col">
                <h2 className="text-5xl font-extrabold dark:text-white mb-3">{member.name}</h2>
                <p className="text-2xl text-gray-700 font-semibold mb-6">
                  {member.role}
                </p>

                {/* ABOUT */}
                <div className="space-y-4 text-lg text-gray-700 mb-10">
                  {member.about.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>

                <h3 className="text-3xl font-bold dark:text-black mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3 mb-10">
                  {member.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 dark:text-black bg-gray-100 rounded-lg shadow text-lg font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-4">Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {member.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white rounded-xl shadow border text-gray-800"
                    >
                      {h}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>

                  <a
                    href={`mailto:${member.social.email}`}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
                  >
                    <Mail size={18} /> Email
                  </a>

                  <a
                    href={`tel:${member.social.phone}`}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
                  >
                    <Phone size={18} /> Call
                  </a>
                </div>
              </div>

              <motion.img
                src={member.img}
                alt={member.name}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[450px] h-[380px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
