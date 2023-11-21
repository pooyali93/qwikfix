import { NAV_LINKS } from "@/constants/data";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative z-30 py-5 mr-6">
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="medium-14 text-black-50 uppercase no-underline flexCenter cursor-pointer transition-all hover:text-blue-70 relative group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-70 transition-all duration-300 origin-left group-hover:w-full"></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
