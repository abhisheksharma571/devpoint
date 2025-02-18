import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <main className="backdrop-blur-lg bg-[rgba(24,24,24,0.6)] px-8 py-1 mx-auto max-w-fit gap-[0px] sm:gap-[200px] md:gap-[300px] rounded-full flex items-center border border-gray-700">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="./devpoint-logo-removebg.png" alt="Your Logo" className="h-6 sm:h-10 w-auto"/>
      </Link>

      {/* Book a Callback Button */}
      <button className="bg-white text-black font-semibold px-4 py-1 my-1 ml-6 rounded-full hover:bg-gray-200 transition">
        Book a Callback
      </button>
    </main>
  );
};

export default Navbar;