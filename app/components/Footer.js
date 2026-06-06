
"use client";

import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="about"
      className="bg-[#060608] border-t border-white/5 pt-20 pb-8 text-zinc-400"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div className="flex flex-col gap-4 text-left">
          <span className="font-serif text-2xl font-bold tracking-wider text-white">
            GEETA <span className="text-[#e63946]">CHINESE</span>
          </span>

          <p className="text-zinc-500 text-sm leading-relaxed">
            Welcome to Geeta Chinese Family Restaurant. We serve delicious
            Chinese cuisine prepared with fresh ingredients, authentic flavors,
            and a commitment to quality. Enjoy memorable dining experiences
            with your family and friends in a warm and welcoming atmosphere.
          </p>

          <a
            href="https://wa.me/918554962119"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl transition-colors w-fit"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="font-serif text-lg font-bold text-white tracking-wider">
            Contact Us
          </h4>

          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <span>
                Geeta Chinese Family Restaurant
                <br />
                Near Kapol School
                <br />
                Shop No. 08, Surbhi Villa Society
                <br />
                Sankeshwar Nagar
                <br />
                Achole Road, Nallasopara East
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
              <a
                href="tel:+918554962119"
                className="hover:text-white transition-colors"
              >
                +91 85549 62119
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
              <span>Dine-In • Takeaway • Family Dining</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col gap-4 text-left">
          <h4 className="font-serif text-lg font-bold text-white tracking-wider">
            Opening Hours
          </h4>

          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-semibold">
                  Open Daily
                </span>
                <span className="block text-zinc-500">
                  11:30 AM - 11:30 PM
                </span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#e63946] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-semibold">
                  Reservations & Orders
                </span>
                <span className="block text-zinc-500">
                  +91 85549 62119
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Location Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-white/5 shadow-inner bg-zinc-950">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-950/90 to-transparent" />

          {/* Restaurant Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-[#d4af37] animate-ping opacity-75" />

              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e63946] to-[#b22222] flex items-center justify-center border-2 border-white shadow-lg text-white font-bold text-sm">
                G
              </div>
            </div>

            <div className="py-1.5 px-3 rounded-xl border border-white/10 mt-2 text-center bg-black/40 backdrop-blur-md">
              <span className="block text-[10px] font-bold text-white tracking-widest uppercase">
                Geeta Chinese Family Restaurant
              </span>

              <span className="block text-[8px] text-[#d4af37] mt-0.5 uppercase tracking-wider">
                Nallasopara East
              </span>
            </div>
          </div>

          {/* Address Card */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-sm z-10 text-left">
            <h5 className="font-serif text-[11px] font-bold text-white uppercase tracking-wider">
              Find Us Easily
            </h5>

            <p className="text-[10px] text-zinc-400 mt-2 leading-relaxed">
              Near Kapol School, Shop No. 08, Surbhi Villa Society,
              Sankeshwar Nagar, Achole Road, Nallasopara East.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Geeta Chinese Family Restaurant.
          All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>

          <a
            href="https://wa.me/918554962119"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

