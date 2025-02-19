"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import CallbackForm from "./CallbackForm";
import FollowCursor from "./bitsui/FollowCursor";
import RotatingText from "./bitsui/RotatingText";

function HeroSection() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <FollowCursor
        className="z-50"
        offsetX={20}
        cardWidth="200px"
        rotationFactor={40}
        enableTilt={true}
        animationConfig={{ mass: 5, tension: 350, friction: 40 }}
        wheelConfig={{ mass: 1, tension: 200, friction: 30 }}
      ></FollowCursor>
      <Spotlight />
      <div className="mt-16 p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Grow Your <br />
          Business Online with Us!
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
          We craft high-performance websites and execute data-driven digital
          marketing strategies to boost your brand, attract customers, and drive
          success.
        </p>
        <div className="mt-16">
          <CallbackForm />
        </div>
        <div className="flex text-5xl font-bold pt-16 justify-center gap-4">
          <p className="text-white pt-2">We build Websites that are </p>
          <RotatingText
            texts={["Responsive!", "Eye-catching!", "User-friendly!", "SEO-optimized!", "Engaging!"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-lime-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
