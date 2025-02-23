"use client"
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CallbackForm2 from "./CallbackForm2";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <footer className="bg-black text-white py-4 md:py-10 px-5 md:px-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src="./devpoint-logo-removebg.png" alt="Company Logo" className="h-14" />
          <p className="text-gray-400 text-sm mt-2">Empowering your business with technology.</p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-lime-500" /> +91 707 823 1741
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-lime-500" /> devpoint908@gmail.com
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 mt-3">
            <button onClick={() => setOpen(true)} className="p-2 rounded-full bg-gray-800 hover:text-lime-500 transition">
              <FaPhoneAlt />
            </button>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:text-lime-500 transition">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/devpoint.in/" target="_blank" className="p-2 rounded-full bg-gray-800 hover:text-lime-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/dev-point/about/?viewAsMember=true" target="_blank" className="p-2 rounded-full bg-gray-800 hover:text-lime-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <p className="text-lg text-gray-300">
          🚀 Let’s build your online presence with <span className="text-lime-500 font-semibold">Web Development</span> & 
          <span className="text-lime-500 font-semibold"> Digital Marketing</span>. Grow with us today!
        </p>
      </div>
      <CallbackForm2 open={open} setOpen={setOpen} />
    </footer>
  );
};

export default Footer;

