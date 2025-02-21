import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function OurWork() {
  const testimonials = [
    {
      description:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      category: "Product Manager at TechFlow",
      src: "/web-dev.png",
      logo: "/web-dev.png"
    },
    {
      description:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      category: "CTO at InnovateSphere",
      src: "/seo.png",
      logo: "/seo.png"
    },
    {
      description:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      category: "Operations Director at CloudScale",
      src: "/social.png",
      logo: "/social.png"
    },
    {
      description:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      category: "Engineering Lead at DataPro",
      src: "/e-com.png",
      logo: "/e-com.png"
    },
    {
      description:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      category: "VP of Technology at FutureNet",
      src: "/hero-bg.jpg",
      logo: "/hero-bg.jpg"
    },
  ];
  return (
    <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <p className="text-3xl md:text-5xl text-center text-white pt-20 pb-4">
        Your vision, our expertise
      </p>
      <p className="text-center text-xl md:text-2xl text-white pb-4">
        We transform ideas into digital solutions!
      </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  
  );
}
