"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Your", "Vision,", "Our", "Expertise"];

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Loader will show for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Delay between each word
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex space-x-2 text-2xl text-white"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;

