"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import CallbackForm from "./CallbackForm";

function HeroSection() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="mt-16 p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Grow Your <br />Business Online with Us!
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
            We craft high-performance websites and execute data-driven digital marketing strategies to boost your brand, attract customers, and drive success.
        </p>
        <div className="mt-16">
            <CallbackForm />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;