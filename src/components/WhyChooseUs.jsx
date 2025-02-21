'use client';
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { FaClock, FaDollarSign, FaPaintBrush, FaGlobe, FaBullhorn, FaShareAlt } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Urgent Web Development",
    description: "Get a fully functional website quickly without compromising quality.",
    icon: <FaClock className="text-orange-400 text-2xl" />,
  },
  {
    id: 2,
    title: "Cost-Effective",
    description: "High-quality web development at an affordable price to fit your budget.",
    icon: <FaDollarSign className="text-green-400 text-2xl" />,
  },
  {
    id: 3,
    title: "Custom Design",
    description: "Unique, tailor-made websites that align perfectly with your brand identity.",
    icon: <FaPaintBrush className="text-blue-400 text-2xl" />,
  },
  {
    id: 4,
    title: "1-Year Free Domain",
    description: "Enjoy a free domain for one year to establish your online presence.",
    icon: <FaGlobe className="text-purple-400 text-2xl" />,
  },
  {
    id: 5,
    title: "Brand Awareness & Trust",
    description: "Strengthen your credibility and attract customers with a professional website.",
    icon: <FaBullhorn className="text-yellow-400 text-2xl" />,
  },
  {
    id: 6,
    title: "Social Media Marketing",
    description: "Enhance your reach and engagement with effective social media strategies.",
    icon: <FaShareAlt className="text-red-400 text-2xl" />,
  },
];

const WhyChooseUs = ({ containerClassName = "" }) => {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <p className="text-3xl md:text-5xl text-center text-white pt-20 pb-4">
        We don’t just build websites
      </p>
      <p className="text-center text-xl md:text-2xl text-white pb-4">We build your brand’s digital presence!</p>
      <div
        onMouseLeave={() => setHoveredIdx(0)}
        className={clsx(
          "grid md:grid-cols-3 px-32 pb-8",
          containerClassName
        )}
      >
        <LayoutGroup>
          {items.map((one) => (
            <a
              key={one.id}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIdx(one.id)}
              className="relative flex flex-col gap-3 p-4"
            >
              <AnimatePresence>
                {hoveredIdx === one.id && (
                  <motion.span
                    layoutId="cardeffect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0.8, transition: { duration: 2, delay: 0.2 } }}
                    className="absolute inset-0 z-0 block h-full w-full rounded-xl bg-lime-300/10"
                  />
                )}
              </AnimatePresence>
              <div className="z-[1] space-y-3 m-4 flex items-center gap-4">
                {one.icon}
                <div>
                  <h1
                    className={clsx(
                      "font-medium text-white transition-all duration-300",
                      hoveredIdx === one.id && "text-orange-400"
                    )}
                  >
                    {one.title}
                  </h1>
                  <p className="text-neutral-400">{one.description}</p>
                </div>
              </div>
            </a>
          ))}
        </LayoutGroup>
      </div>
    </div>
  );
};

export default WhyChooseUs;
