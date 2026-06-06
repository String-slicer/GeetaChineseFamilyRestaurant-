"use client";

import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, Clock, AlertCircle } from "lucide-react";

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  if (!isOpen) return null;

  // Calculate pricing purely for the raw item values
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
      ></div>

      {/* Cart Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#0c0c0e] h-full shadow-2xl border-l border-white/5 flex flex-col z-10 animate-slide-in-right">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <h2 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Your Order List</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cartItems.length > 0 ? (
            <>
              {/* Informative Banner for Waiter Interaction */}
              <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 p-4 rounded-2xl flex gap-3 items-start">
                <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Show this to your Waiter</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Review your items below and dictate them directly to your table server to place the order.
                  </p>
                </div>
              </div>

              {/* Clear Basket Quick Button */}
              <div className="flex justify-between items-center bg-zinc-950/40 p-3 rounded-2xl border border-white/5">
                <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                  {cartItems.length} Distinct item{cartItems.length > 1 ? "s" : ""}
                </span>
                <button
                  onClick={onClearCart}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#e63946] hover:text-[#ff6b6b] transition-colors duration-300 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear List</span>
                </button>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="glassmorphism p-4 rounded-2xl flex items-center gap-4 border border-white/5 hover:border-white/10 transition-colors duration-300"
                  >
                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        {/* Veg/Non-Veg dot */}
                        <div className={`w-2 h-2 rounded-full ${item.isVeg ? "bg-[#10b981]" : "bg-[#ef4444]"}`}></div>
                        <span className="text-xs font-serif font-bold text-white truncate max-w-40 sm:max-w-48">
                          {item.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                          Size:
                        </span>
                        <span className="text-[10px] font-bold text-[#d4af37] px-2 py-0.5 rounded bg-[#d4af37]/10 uppercase tracking-widest">
                          {item.size} Plate
                        </span>
                      </div>
                      <span className="block text-xs text-zinc-500 mt-1.5 font-medium">
                        Unit: ₹{item.price}
                      </span>
                    </div>

                    {/* Quantity Selector and Total */}
                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
                      {/* Price Total */}
                      <span className="font-serif text-sm font-bold text-white">
                        ₹{item.price * item.quantity}
                      </span>

                      {/* Control Panel */}
                      <div className="flex items-center gap-2 bg-zinc-950 p-1.5 rounded-lg border border-white/5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                          className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1.5">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Empty Basket State */
            <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-4 border border-white/5 animate-pulse">
                <ShoppingBag className="w-6 h-6 text-zinc-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Your List is Empty</h3>
              <p className="text-zinc-500 text-sm max-w-xs mb-6">
                Explore our dishes and build your selection to show your waiter later.
              </p>
              <button
                onClick={onClose}
                className="bg-white hover:bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 cursor-pointer"
              >
                Browse Menu
              </button>
            </div>
          )}
        </div>

        {/* Total Cost Block - No Actions */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/5 bg-zinc-950/50 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-xs uppercase font-bold text-zinc-400 tracking-wider">Estimated Total</span>
                <span className="text-[10px] text-zinc-500">*Taxes extra as applicable at billing</span>
              </div>
              <span className="font-serif text-2xl font-bold text-[#d4af37]">₹{subtotal}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
