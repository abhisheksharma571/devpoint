"use client";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import CallbackForm2 from "./CallbackForm2";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-[rgba(24,24,24,0.6)] px-8 py-3 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="/devpoint-logo-removebg.png" alt="Logo" className="h-8 sm:h-10 w-auto" />
      </Link>

      {/* Social Icons */}
      <div className="flex items-center space-x-5">
        {/* Contact Icon - Opens CallbackForm2 */}
        <button onClick={() => setOpen(true)} className="text-white text-lg hover:opacity-60 transition">
          <FaPhoneAlt />
        </button>

        {/* Instagram */}
        <Link href="https://www.instagram.com/devpoint.in/" target="_blank">
          <FaInstagram className="text-white text-lg hover:opacity-60 transition" />
        </Link>

        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/company/dev-point/about/?viewAsMember=true" target="_blank">
          <FaLinkedin className="text-white text-lg hover:opacity-60 transition" />
        </Link>

        {/* X (Twitter) */}
        <Link href="#" target="_blank">
          <FaXTwitter className="text-white text-lg hover:opacity-60 transition" />
        </Link>
      </div>

      {/* Callback Form */}
      <CallbackForm2 open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
