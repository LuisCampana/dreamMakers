"use client";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/ProductDevelopment", label: "Product Development" },
  { href: "/software-development", label: "Custom Software Development" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 md:hidden"
        aria-label="menu"
      >
        <svg
          className="w-6 h-6 text-white"
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

      {/* Semi-transparent Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 right-0 bg-black z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
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
              className="block w-full bg-gradient-to-r  from-green-400 to-purple-500 hover:from-green-500 hover:to-purple-600 text-white text-center py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
