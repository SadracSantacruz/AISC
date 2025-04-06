import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="AISC Logo" width={40} height={40} />
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold tracking-wide text-sm">
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
          <li>
            <Link href="/get-involved">GET INVOLVED</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
