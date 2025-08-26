"use client";
import React, { useState, useEffect } from "react";
import MobileHeader from "./mobile/mobile";
import DesktopHeader from "./desktop/desktop";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      document.body.style.paddingTop = "80px";
    } else {
      document.body.style.paddingTop = "0px";
    }

    return () => {
      document.body.style.paddingTop = "0px";
    };
  }, [isScrolled]);

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-lg"
          : "relative bg-black"
      }`}
    >
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <div className="hidden md:block">
        <DesktopHeader />
      </div>
    </header>
  );
};

export default Header;
