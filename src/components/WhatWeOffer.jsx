"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Website Development",
    description:
      "We craft responsive, high-performance websites tailored to your business needs. Whether it's a corporate site, portfolio, or custom web solution, we focus on user experience, speed, and functionality. Our websites are SEO-friendly, mobile-optimized, and designed to drive engagement and conversions.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="./web-dev.png"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Our e-commerce solutions help you establish a seamless online store with secure payment gateways, user-friendly navigation, and a smooth checkout process. From small businesses to large-scale enterprises, we design custom e-commerce platforms that enhance customer experience, boost sales, and streamline operations efficiently.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="./e-com.png"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "SEO Optimization",
    description:
      "Our SEO services ensure your website ranks higher on search engines, driving organic traffic and improving visibility. We optimize on-page content, build high-quality backlinks, and refine technical SEO to enhance performance. With a strategic approach, we help your business attract the right audience and achieve long-term growth.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="./seo.png"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Social Media Marketing",
    description:
      "We help brands grow their online presence through targeted social media strategies. From content creation to ad campaigns, we engage your audience across platforms like Facebook, Instagram, and LinkedIn. Our goal is to increase brand awareness, drive traffic, and boost conversions through data-driven marketing.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="./social.png"
          
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function WhatWeOffer() {
  return (
    <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <h1 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4 pb-2">
            Boost your business with
            <br /> Website Development and Digital Marketing.
        </h1>
        <div>
            <StickyScroll content={content} />
        </div>
    </div>
  );
}
