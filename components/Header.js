// 📄 src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#0b1d3a] text-yellow-200 py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">Eleganza</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/products" className="hover:text-yellow-400">Products</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/wishlist" className="hover:text-yellow-400">Wishlist</Link>
          <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
