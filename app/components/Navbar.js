
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar({ cartCount, onCartClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "hero")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Geeta Chinese Family Restaurant"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white group-hover:text-[#d4af37] transition-colors duration-300">
              GEETA
            </span>

            <span className="block text-[10px] tracking-[0.2em] text-[#e63946] font-semibold uppercase">
              Chinese Family Restaurant
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-zinc-300">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="hover:text-[#d4af37] transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#menu"
            onClick={(e) => handleLinkClick(e, "menu")}
            className="hover:text-[#d4af37] transition-colors duration-300"
          >
            Menu
          </a>

          <a
            href="#reviews"
            onClick={(e) => handleLinkClick(e, "reviews")}
            className="hover:text-[#d4af37] transition-colors duration-300"
          >
            Reviews
          </a>

          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "about")}
            className="hover:text-[#d4af37] transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative p-2.5 rounded-full glassmorphism text-white hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all duration-300 group cursor-pointer"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />

            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#e63946] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce border-2 border-[#09090b]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-full glassmorphism text-white md:hidden hover:text-[#d4af37] transition-colors duration-300 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-[#09090b]/95 backdrop-blur-xl z-50 animate-fade-in-up py-12 px-6 flex flex-col gap-6 text-center border-t border-white/5">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="font-serif text-2xl tracking-widest text-white hover:text-[#d4af37] py-2 transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#menu"
            onClick={(e) => handleLinkClick(e, "menu")}
            className="font-serif text-2xl tracking-widest text-white hover:text-[#d4af37] py-2 transition-colors duration-300"
          >
            Menu
          </a>

          <a
            href="#reviews"
            onClick={(e) => handleLinkClick(e, "reviews")}
            className="font-serif text-2xl tracking-widest text-white hover:text-[#d4af37] py-2 transition-colors duration-300"
          >
            Reviews
          </a>

          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "about")}
            className="font-serif text-2xl tracking-widest text-white hover:text-[#d4af37] py-2 transition-colors duration-300"
          >
            Contact
          </a>

          <div className="mt-8 border-t border-white/5 pt-8">
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">
              Call Us
            </p>

            <a
              href="tel:+918554962119"
              className="text-[#d4af37] text-lg font-medium hover:underline"
            >
              +91 85549 62119
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
