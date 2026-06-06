"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("geeta_cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
    }
  }, []);

  // Save cart to localStorage on updates
  useEffect(() => {
    try {
      localStorage.setItem("geeta_cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error writing cart to localStorage:", error);
    }
  }, [cart]);

  const handleAddToCart = (dish, size, price) => {
    setCart((prevCart) => {
      // Find if item already exists with matching id AND portion size
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === dish.id && item.size === size
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [
          ...prevCart,
          {
            id: dish.id,
            name: dish.name,
            size: size,
            price: price,
            quantity: 1,
            isVeg: dish.isVeg,
            image: dish.image
          }
        ];
      }
    });
  };

  const handleUpdateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id, size);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Calculate unique item quantity total for cart badge
  const totalCartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b]">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <MenuSection onAddToCart={handleAddToCart} />
        <Reviews />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
