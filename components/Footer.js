// 📄 src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1d3a] text-yellow-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Eleganza. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-yellow-400">
          <a href="/privacy-policy" className="hover:text-yellow-200 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-yellow-200 transition">Terms of Service</a>
          <a href="/contact" className="hover:text-yellow-200 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
