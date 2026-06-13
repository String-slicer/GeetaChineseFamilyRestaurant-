"use client";

import React, { useState, useMemo } from "react";
import DishCard from "./DishCard";
import { menuItems, menuCategories } from "../menuData";
import { Search, Filter, Leaf, Flame, Sparkles } from "lucide-react";

export default function MenuSection({ onAddToCart }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [vegFilter, setVegFilter] = useState("All"); // "All", "Veg", "NonVeg"

  // Filter logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // 1. Search Query filter
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      // 2. Category filter
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      // 3. Veg / Non-Veg filter
      const matchesVeg =
        vegFilter === "All" ||
        (vegFilter === "Veg" && item.isVeg) ||
        (vegFilter === "NonVeg" && !item.isVeg);

      return matchesSearch && matchesCategory && matchesVeg;
    });
  }, [searchQuery, selectedCategory, vegFilter]);

  return (
    <section id="menu" className="py-24 relative overflow-hidden bg-zinc-950/40 border-y border-white/5">
      {/* Decorative BG element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e63946]/3 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/35 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover culinary bliss</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-wide mb-4">
            Our Wok Creations
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Every dish is prepared to order with fresh ingredients, traditional spices, and absolute mastery. 
            Use the filters below to curate your perfect dining session.
          </p>
        </div>

        {/* Filter controls panel */}
        <div className="glassmorphism p-6 rounded-3xl mb-12 shadow-xl flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search favorite dishes (e.g. noodles, paneer, dim sum)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/60 border border-white/5 focus:border-[#d4af37]/50 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none placeholder-zinc-500 transition-colors duration-300"
              />
            </div>

            {/* Veg / Non-Veg Toggle Tabs */}
            <div className="flex p-1 rounded-2xl bg-zinc-950 border border-white/5 w-full sm:w-auto">
              <button
                onClick={() => setVegFilter("All")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 py-2 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  vegFilter === "All"
                    ? "bg-zinc-800 text-white shadow-md border border-white/5"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                All Food
              </button>
              
              <button
                onClick={() => setVegFilter("Veg")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 py-2 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  vegFilter === "Veg"
                    ? "bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 shadow-sm veg-btn-glow"
                    : "text-zinc-500 hover:text-[#10b981]"
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                 Veg
              </button>
              <button
                onClick={() => setVegFilter("NonVeg")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 py-2 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  vegFilter === "NonVeg"
                    ? "bg-[#ef4444]/15 text-[#ef4444] border border-[#ef4444]/30 shadow-sm nonveg-btn-glow"
                    : "text-zinc-500 hover:text-[#ef4444]"
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                Non-Veg
              </button>
            </div>

          </div>

          {/* Categories Pill Slider */}
          <div className="border-t border-white/5 pt-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-none">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mr-4 flex-shrink-0">Categories:</span>
              <div className="flex gap-2">
                {menuCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`py-2 px-4 rounded-xl text-xs font-medium tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      selectedCategory === category
                        ? "bg-[#d4af37] text-black font-semibold shadow-md shadow-[#d4af37]/10"
                        : "glassmorphism-light text-zinc-400 hover:text-white hover:border-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Results Counter */}
        <div className="mb-6 flex justify-between items-center px-2">
          <p className="text-zinc-500 text-xs tracking-wider uppercase font-semibold">
            Showing {filteredItems.length} {filteredItems.length === 1 ? "dish" : "dishes"}
          </p>
          {(searchQuery || selectedCategory !== "All" || vegFilter !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setVegFilter("All");
              }}
              className="text-[#d4af37] hover:text-[#f3d078] text-xs font-bold transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Dishes Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((dish, index) => (
              <div 
                key={dish.id} 
                className="animate-fade-in-up" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <DishCard dish={dish} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        ) : (
          <div className="glassmorphism p-16 rounded-3xl text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-4 border border-white/5">
              <Filter className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">No culinary items found</h3>
            <p className="text-zinc-500 text-sm max-w-sm mx-auto">
              We couldn't find any dish matching your search or filters. Try adjusting your query or resetting selectors.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
