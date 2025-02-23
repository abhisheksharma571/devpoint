import { cn } from "@/lib/utils";
import {
  IconDeviceDesktop,
  IconShoppingCart,
  IconSearch,
  IconBrandFacebook,
  IconChartLine,
  IconShieldCheck,
  IconUsers,
  IconTools,
} from "@tabler/icons-react";

export function WhatWeOffer() {
  const features = [
    {
      title: "Website Development",
      description:
        "Custom, responsive websites tailored for your business growth.",
      icon: <IconDeviceDesktop />,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Seamless online stores with secure payment integrations.",
      icon: <IconShoppingCart />,
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your rankings and visibility with expert SEO strategies.",
      icon: <IconSearch />,
    },
    {
      title: "Social Media Marketing",
      description:
        "Grow your brand and engage customers across social platforms.",
      icon: <IconBrandFacebook />,
    },
    {
      title: "Data-Driven Analytics",
      description:
        "Gain insights with performance tracking and analytics tools.",
      icon: <IconChartLine />,
    },
    {
      title: "Secure Hosting & Maintenance",
      description:
        "Reliable, secure hosting and ongoing support for your website.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Customer Engagement Strategies",
      description:
        "Improve customer retention with personalized marketing.",
      icon: <IconUsers />,
    },
    {
      title: "Custom Web Solutions",
      description:
        "Tailored digital solutions to fit your unique business needs.",
      icon: <IconTools />,
    },
  ];
  
  return (
    <div className="bg-[#14281D] antialiased bg-grid-white/[0.02]">
        <p className="text-[22px] md:text-5xl text-center text-[#fffcdc] font-bold pt-20 pb-1 md:pb-3">
          Everything your business needs
        </p>
        <p className="text-center text-sm md:text-2xl text-[#fffcdc] pb-4">
          Websites, marketing, and branding for growth!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-[#fffcdc]",
        (index === 0 || index === 4) && "lg:border-l border-[#fffcdc]",
        index < 4 && "lg:border-b border-[#fffcdc]"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#fffcdc]/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#fffcdc]/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#fffcdc]/70">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#fffcdc] group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#fffcdc] ">
          {title}
        </span>
      </div>
      <p className="text-sm text-[#fffcdc]/70 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
