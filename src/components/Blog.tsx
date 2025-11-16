import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
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
      section.querySelectorAll(".blog-card"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, []);

  const posts = [
    {
      title: "The Future of Web Design: AI and Minimalism",
      excerpt: "Exploring how artificial intelligence is shaping modern web design principles while maintaining clean aesthetics.",
      category: "Design",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
    },
    {
      title: "Building Performant React Applications",
      excerpt: "Best practices for optimizing React apps with code splitting, lazy loading, and efficient state management.",
      category: "Development",
      date: "Jan 10, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    },
    {
      title: "UX Principles from Apple's Design Language",
      excerpt: "Learn the core principles behind Apple's intuitive interfaces and how to apply them to your projects.",
      category: "UX Design",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-apple-grey dark:bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-4xl md:text-5xl font-light text-center mb-4">
          Latest Insights
        </h2>
        <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
          Thoughts on design, development, and digital experiences
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="blog-card group cursor-pointer bg-background dark:bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-ios-blue/50 transition-all duration-300 hover:shadow-hover"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-ios-blue/10 text-ios-blue rounded-full text-xs mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-ios-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
