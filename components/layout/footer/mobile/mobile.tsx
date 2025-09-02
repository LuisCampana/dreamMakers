import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const MobileFooter = () => {
  return (
    <div className="w-full p-8 space-y-8">
      {/* Sección 1: Logo y Social Media */}
      <div className="flex flex-col gap-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logoEmpresa.png"
            alt="Logo"
            width={54}
            height={58}
          />
          <span className="text-2xl font-bold uppercase tracking-wide text-white">
            Dream Makers
          </span>
        </Link>
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">SOCIAL MEDIA</h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaFacebookF className="text-white" />
            </a>
            <Image src="/file.svg" alt="Wave Icon" width={32} height={32} />
          </div>
        </div>
      </div>

      {/* Sección 2: Explore y Services lado a lado */}
      <div className="flex gap-8">
        {/* Explore */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-white">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Work"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Our Work
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/software-development"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Custom Software
              </Link>
            </li>
            <li>
              <Link
                href="/product-development"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Product Development
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Sección 3: Newsletter */}
      <div className="w-full">
        <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
        <p className="mb-4 text-white/70">
          Sign Up to get updates & news about us.
        </p>
        <form className="flex items-center bg-white rounded-full p-1 shadow-lg mb-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-transparent text-black px-4 py-2 outline-none placeholder-gray-500"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-105 transition-transform"
          >
            Subscribe
          </button>
        </form>
        <div className="flex justify-end">
          <Image src="/globe.svg" alt="Globe Icon" width={32} height={32} />
        </div>
      </div>

      {/* Línea separadora */}
      <hr className="border-white/20" />

      {/* Copyright */}
      <div className="text-center text-white/50">
        <p>&copy; Copyright 2025 All Right Reserved</p>
      </div>
    </div>
  );
};

export default MobileFooter;
