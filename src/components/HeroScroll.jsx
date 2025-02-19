"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageScroll = () => {
  const containerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom centre",
        end: "top centre",
        scrub: 2, // Smooth scrolling effect
        pin: true,
        scroller: "body",
      },
    });

    // Image 1 scroll-up effect
    tl.to(image1Ref.current, {
      y: -300,
      duration: 1.5,
    });

    // Image 2 scroll-up effect (after Image 1)
    tl.to(image2Ref.current, {
      y: -300,
      duration: 1.5,
    });

  }, []);

  return (
    <div ref={containerRef} className="h-screen flex flex-col items-center justify-center space-y-10">
      <img
        ref={image1Ref}
        src="./laptop.jpeg"
        alt="Image 1"
        className="w-64 h-64 object-cover rounded-lg shadow-lg"
      />
      <img
        ref={image2Ref}
        src="./phone.jpeg"
        alt="Image 2"
        className="w-64 h-64 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ImageScroll;
