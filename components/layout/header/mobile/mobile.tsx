"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const links = [
  { href: "/", label: "Home" },
  { href: "/Work", label: "Our Work" },
  { href: "/software-development", label: "Custom Software Development" },
  { href: "/product-development", label: "Product Development" },
];

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Bar */}
      <div className="w-full bg-black shadow-md relative z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logoEmpresa.png"
                alt="Logo"
                width={54}
                height={58}
              />
              <span
                className={`text-xl font-bold text-white uppercase tracking-wide ${inter.className}`}
              >
                Dream Makers
              </span>
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="w-12 h-12 flex items-center justify-center transition-all duration-300"
              aria-label="menu"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay - Solo hasta el botón Let's Talk */}
      <div
        className={`fixed top-0 left-0 right-0 h-[400px] bg-black transition-opacity duration-500 ease-in-out z-40 ${
          open 
            ? "opacity-100" 
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 right-0 z-45 transform transition-all duration-700 ease-out ${
          open 
            ? "translate-y-0 opacity-100 scale-100" 
            : "-translate-y-full opacity-0 scale-95"
        } ${
          open && isScrolled 
            ? "bg-black/70 backdrop-blur-sm" 
            : "bg-black"
        }`}
      >
        <div className="p-6 pt-24">
          <nav className="flex flex-col items-start space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full text-left py-3 px-4 text-white text-lg font-medium hover:bg-gray-800 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <Link
              href="/talk"
              onClick={() => setOpen(false)}
              className="block w-full bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] text-white text-center py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
