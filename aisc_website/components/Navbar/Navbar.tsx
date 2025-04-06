import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center text-white font-semibold tracking-wide text-[18px]">
        {/* Logo */}
        <Link href="/">
          <div className="relative w-16 h-16 group mr-8">
            <Image
              src="/transparent_logo.png"
              alt="AISC Logo"
              width={64}
              height={64}
              className="absolute transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/colored_logo.png"
              alt="AISC Logo Lit"
              width={64}
              height={64}
              className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
        </Link>

        {/* Left Nav */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/initiatives">INITIATIVES</Link>
          </li>
          <li>
            <Link href="/events">EVENTS</Link>
          </li>
          <li>
            <Link href="/hfai">HFAI</Link>
          </li>
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right Nav */}
        <ul>
          <li>
            <Link href="/get-involved">GET INVOLVED</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
