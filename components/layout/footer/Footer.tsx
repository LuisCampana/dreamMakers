"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import MobileFooter from "./mobile/mobile";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="text-white mt-16 w-full"
      style={{
        backgroundColor: "#111111",
        backgroundSize: "2.5rem 2.5rem",
      }}
    >
      {/* Mobile Footer */}
      <div className="block md:hidden">
        <MobileFooter />
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block w-full p-8 md:p-12 lg:p-16 relative">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 relative">
          {/* Columna 1: Logo y Social Media */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logoEmpresa.png"
                alt="Logo"
                width={54}
                height={58}
              />
              <span className="text-2xl font-bold uppercase tracking-wide">
                Dream Makers
              </span>
            </Link>
            <div>
              <h3 className="text-xl font-bold mb-4">SOCIAL MEDIA</h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

          {/* Botón "Go Up" con línea que atraviesa todo el alto */}
          <div className="hidden lg:block lg:col-span-1 relative">
            {/* <div className="absolute  w-px h-full bg-white"></div> */}
            <button 
              onClick={scrollToTop}
              className="h-full flex items-center justify-center relative z-10 hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center gap-2 text-sm font-bold p-3 bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] rounded-full shadow-lg">
                <span>G</span>
                <span>O</span>
                <FiArrowUp className="w-5 h-5" />
                <span>U</span>
                <span>P</span>
              </div>
            </button>
          </div>

          {/* Columna 2: Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Work" className="hover:text-gray-300 transition-colors">
                  Our Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/software-development" className="hover:text-gray-300 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/product-development" className="hover:text-gray-300 transition-colors">
                  Product Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-white/70">
              Sign Up to get updates & news about us.
            </p>
            <form className="flex items-center bg-white rounded-full p-1 shadow-lg">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent text-black px-4 py-2 outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-[#8DE7AF] via-[#4D80F9] to-[#8B39EE] hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4 flex justify-end">
              <Image src="/globe.svg" alt="Globe Icon" width={32} height={32} />
            </div>
          </div>
        </div>
        <hr className="my-8 border-white/20" />

        <div className="text-center text-white/50">
          <p>&copy; Copyright 2025 All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
