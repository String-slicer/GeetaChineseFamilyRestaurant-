"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Leaf } from "lucide-react";

export default function Hero({ onExploreMenu }) {
  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const element = document.getElementById("menu");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#e63946]/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#d4af37]/4 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="md:col-span-7 flex flex-col items-start text-left z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphism-light text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Award Winning Culinary Experience</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
            Savor the Art of <br />
            <span className="text-gold-gradient font-serif">Chinese Bistro</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Experience an authentic harmony of fiery Szechuan spices and subtle Cantonese delicacies. 
            Crafted by master chefs using dual-kitchen protocols to ensure separate, pristine preparation for both 
            <span className="text-[#10b981] font-semibold"> Vegetarian</span> and 
            <span className="text-[#ef4444] font-semibold"> Non-Vegetarian</span> gourmands.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleScrollToMenu}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#e63946] to-[#b22222] hover:from-[#f04a58] hover:to-[#c62837] text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-[#e63946]/20 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Quick Badges */}
          <div className="grid grid-cols-3 gap-4 mt-12 border-t border-white/5 pt-8 w-full">
            <div>
              <p className="text-[#d4af37] text-2xl font-bold font-serif">4.9 ★</p>
              <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">5,000+ Reviews</p>
            </div>
            <div>
              <p className="text-[#e63946] text-2xl font-bold font-serif">100%</p>
              <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">Fresh Ingredients</p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold font-serif">Dual</p>
              <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">Veg / Non-Veg Prep</p>
            </div>
          </div>
        </div>

        {/* Interactive Graphic Showcase */}
        <div className="md:col-span-5 flex justify-center items-center relative z-10">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 lg:w-108 lg:h-108 animate-float">
            
            {/* Ambient Background Glow ring */}
            <div className="absolute inset-0 rounded-full border border-[#d4af37]/10 animate-slow-spin p-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#d4af37]/60 gold-glow"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#e63946]/60 crimson-glow"></div>
            </div>

            {/* Inner Ring */}
            <div className="absolute inset-8 rounded-full border border-dashed border-white/5 animate-slow-spin-reverse"></div>

            {/* Main Interactive Rotating Food Plate */}
            <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl gold-glow border-2 border-white/10 group">
              <Image
                src="/hero_dish.png"
                alt="Signature Chinese Wok Dish"
                fill
                priority
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge 1 - Rating */}
            <div className="absolute -top-4 -right-2 glassmorphism py-2 px-4 rounded-2xl flex items-center gap-2 shadow-lg animate-bounce delay-100">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping"></div>
              <span className="text-white text-xs font-semibold">Cooking Live</span>
            </div>

            {/* Floating Badge 2 - Pure Veg Label */}
            <div className="absolute bottom-8 -left-6 glassmorphism py-2.5 px-4 rounded-2xl flex items-center gap-2 shadow-lg">
              <div className="w-6 h-6 rounded-lg bg-[#10b981]/10 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-[#10b981]" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-zinc-400 leading-none"> Authentic Taste</span>
                <span className="text-white text-xs font-bold font-serif text-[#10b981]">Chinese Specialities</span>
              </div>
            </div>

            {/* Floating Badge 3 - Szechuan Chili Label */}
            <div className="absolute bottom-1/2 -right-8 glassmorphism py-2.5 px-4 rounded-2xl flex items-center gap-2 shadow-lg">
              <div className="w-6 h-6 rounded-lg bg-[#e63946]/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-zinc-400 leading-none">Fresh & Fiery</span>
                <span className="text-[#d4af37] text-xs font-bold">Chef's Wok Special</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Decorative Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none"></div>
    </section>
  );
}
