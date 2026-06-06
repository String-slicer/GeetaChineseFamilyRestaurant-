"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Verified Food Connoisseur",
    rating: 5,
    quote: "Finding authentic Chinese food that respects vegetarian protocols is incredibly hard. Geeta's separate vegetarian kitchen is a absolute blessing! The Szechuan Chili Paneer was fired to perfection—perfect heat and wok-smoky flavor.",
    date: "June 2026"
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Local Guide",
    rating: 5,
    quote: "The Peking Duck here is legendary, rivaling high-end dining spots in San Francisco. Crispy skin, meltingly tender meat. Also love the quick service and the elegant dark aesthetic of their brand. Highly recommended!",
    date: "May 2026"
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Regular Customer",
    rating: 5,
    quote: "Their Dumpling basket is always steamed fresh. I've ordered delivery multiple times and the spring rolls actually stay crispy! The half-plate options are very convenient when I want to sample different dishes.",
    date: "April 2026"
  }
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#09090b]">
      {/* Decorative lighting */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#d4af37]/3 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-zinc-900 border border-white/5 mb-4 shadow-inner">
            <Quote className="w-6 h-6 text-[#d4af37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-wide mb-2">
            Gourmand Testimonials
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm uppercase tracking-widest">What our patrons are saying</p>
        </div>

        {/* Carousel Container */}
        <div className="relative glassmorphism p-8 sm:p-12 rounded-3xl min-h-[300px] flex flex-col justify-center items-center overflow-hidden border border-white/5 shadow-2xl">
          
          {/* Active Review Content */}
          <div className="animate-fade-in-up duration-500 flex flex-col items-center">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
              ))}
            </div>

            {/* Quote text */}
            <p className="text-white text-base sm:text-lg lg:text-xl italic font-medium leading-relaxed mb-8 max-w-2xl">
              "{reviews[activeIndex].quote}"
            </p>

            {/* Author */}
            <div>
              <span className="block text-white font-serif text-base font-bold tracking-wider">
                {reviews[activeIndex].name}
              </span>
              <span className="block text-zinc-500 text-xs mt-1 uppercase tracking-widest">
                {reviews[activeIndex].role} &bull; {reviews[activeIndex].date}
              </span>
            </div>
          </div>

          {/* Left / Right arrow navigation buttons */}
          <div className="absolute left-4 right-4 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 flex justify-between w-[92%] mx-auto pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full glassmorphism text-zinc-400 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all duration-300 pointer-events-auto cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full glassmorphism text-zinc-400 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all duration-300 pointer-events-auto cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Carousel dots indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeIndex === i ? "w-8 bg-[#d4af37]" : "w-2 bg-zinc-700"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
