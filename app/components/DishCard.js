"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ShoppingBag, Leaf, Flame, Check } from "lucide-react";

export default function DishCard({ dish, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState("Full"); // "Full" or "Half"
  const [isAdded, setIsAdded] = useState(false);
  const [imgSrc, setImgSrc] = useState(dish.image || "/hero_dish.png");

  useEffect(() => {
    setImgSrc(dish.image || "/hero_dish.png");
  }, [dish.image]);

  const currentPrice =
    dish.hasHalfOption && selectedSize === "Half"
      ? dish.priceHalf
      : dish.priceFull;

  const handleAddClick = () => {
    setIsAdded(true);
    onAddToCart(dish, selectedSize, currentPrice);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="glassmorphism group rounded-3xl overflow-hidden hover:border-[#d4af37]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/5 flex flex-col h-full flex-1">
      {/* Dish Image container */}
      <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
        <Image
          src={imgSrc}
          alt={dish.name}
          fill
          sizes="(max-w-768px) 100vw, 30vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={() => {
            const categoryDefault = 
              dish.category === "Soup" ? "/default_soup.jpg" :
              dish.category === "Starter" ? "/default_starter.jpg" :
              dish.category === "Noodles" ? "/default_noodles.jpg" :
              dish.category === "Rice" ? "/default_rice.jpg" : "/hero_dish.png";
            setImgSrc(categoryDefault);
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent"></div>

        {/* Veg / Non-Veg Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-white/10 shadow-md">
          {dish.isVeg ? (
            <>
              {/* Veg dot-in-square indicator */}
              <div className="w-3.5 h-3.5 border border-[#10b981] flex items-center justify-center p-[2px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
              </div>
              <span className="text-[10px] tracking-wider font-semibold text-[#10b981] uppercase">Veg</span>
            </>
          ) : (
            <>
              {/* Non-veg dot-in-square indicator */}
              <div className="w-3.5 h-3.5 border border-[#ef4444] flex items-center justify-center p-[2px]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></div>
              </div>
              <span className="text-[10px] tracking-wider font-semibold text-[#ef4444] uppercase">Non-Veg</span>
            </>
          )}
        </div>

        {/* Star Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-md bg-black/60 border border-white/10 shadow-md">
          <Star className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
          <span className="text-white text-xs font-bold">{dish.rating.toFixed(1)}</span>
        </div>

        {/* Tags overlay */}
        {dish.tags && dish.tags.length > 0 && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
            {dish.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-semibold uppercase tracking-wider bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f3d078] px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Dish details content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
          {dish.name}
        </h3>

        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {dish.description}
        </p>

        {/* Half / Full size selector if available */}
        {dish.hasHalfOption ? (
          <div className="mb-6">
            <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Select Portion Size:</span>
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-zinc-950/80 border border-white/5">
              <button
                type="button"
                onClick={() => setSelectedSize("Half")}
                className={`py-1.5 px-3 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedSize === "Half"
                    ? "bg-[#d4af37] text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Half Plate
              </button>
              <button
                type="button"
                onClick={() => setSelectedSize("Full")}
                className={`py-1.5 px-3 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedSize === "Full"
                    ? "bg-[#d4af37] text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Full Plate
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Portion Size:</span>
            <div className="py-2 px-3 rounded-xl bg-zinc-950/40 border border-white/5 text-zinc-400 text-xs font-medium tracking-wider">
              Standard Full Portion Only
            </div>
          </div>
        )}

        {/* Price and Add button */}
        <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
          <div>
            <span className="block text-[9px] text-zinc-500 uppercase tracking-widest leading-none">Price</span>
            <span className="text-[#d4af37] font-serif text-2xl font-bold">
              ₹{currentPrice}
            </span>
          </div>

          <button
            onClick={handleAddClick}
            disabled={isAdded}
            className={`flex items-center gap-2 font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-full shadow-lg transition-all duration-300 cursor-pointer ${
              isAdded
                ? "bg-[#10b981] text-white shadow-[#10b981]/20 scale-95"
                : "bg-white text-black hover:bg-[#d4af37] hover:text-black hover:shadow-[#d4af37]/20 hover:scale-105"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 animate-scale-up" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
