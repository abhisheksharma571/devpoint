"use client";
import Image from "next/image";

const workData = [
  { src: "/work-img/jksd.png", alt: "Project 1", link: "https://jksd.in/" },
  { src: "/work-img/spring-cafe.png", alt: "Project 2", link: "https://springcafe.in/" },
  { src: "/work-img/jksd-auto.png", alt: "Project 3", link: "https://jksdautomation.com/" },
  { src: "/work-img/dr-viral.png", alt: "Project 4", link: "https://www.drviraldentalclinic.com/" },
  { src: "/work-img/four-corner.png", alt: "Project 5", link: "https://fourcornernetwork.co.in/" },
  { src: "/work-img/divinee.png", alt: "Project 6", link: "https://divineeaura.in/" },
];

export function OurWork() {
  return (
    <div className="bg-gray-950 antialiased bg-grid-white/[0.02] pb-8">
      <p className="text-[22px] md:text-5xl text-center text-white font-bold pt-8 md:pt-20 pb-1 md:pb-3">
        Your vision, our expertise
      </p>
      <p className="text-center text-sm md:text-2xl text-white pb-4 md:pb-8">
        We transform ideas into digital solutions!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-xs md:max-w-[1400px]">
        {workData.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl">
            <Image
              src={item.src}
              alt={item.alt}
              width={700}
              height={400}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200 transition"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
}
