import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#0b1d3a] text-yellow-300 shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition">
          Eleganza
        </Link>
        <ul className="flex gap-6 text-md font-medium">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li>
          <li><Link to="/wishlist" className="hover:text-yellow-400">Wishlist</Link></li>
          <li><Link to="/checkout" className="hover:text-yellow-400">Checkout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;