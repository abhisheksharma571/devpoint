"use client";
import React from "react";
import CallbackForm from "./CallbackForm";
import { BackgroundBeams } from "./ui/background-beams";

export default function HeroSection() {
  return (
    (<div
      className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-6xl mx-auto p-4">
        <h1
          className="relative z-10 text-3xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Grow Your <br />
          Business Online with Us!
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-2xl mx-auto my-4 text-lg text-center relative z-10">
          We craft high-performance websites and execute data-driven digital
          marketing strategies to boost your brand, attract customers, and drive
          success.
        </p>
        <div className="mt-16 relative z-10">
          <CallbackForm />
        </div>
      </div>
      <BackgroundBeams />
    </div>)
  );
}
