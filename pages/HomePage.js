import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const bannerImages = [
  "https://media.istockphoto.com/id/1056349912/video/falling-diamonds-4k-close-up.avif?s=640x640&k=20&c=a2bzuFgA1HN05I-r2ngz70BPMMLrzIY32H9pu2wA1PI=",
  "https://media.istockphoto.com/id/2149946809/photo/closeup-of-kundan-necklace-wore-by-indian-bride.jpg?s=2048x2048&w=is&k=20&c=5h8rWL8pBXcHo_t0J_PpoSbIpM3cEjEjzJdoL9ENfr0=",
  "https://media.istockphoto.com/id/937126594/photo/brides-jewelery-in-indian-wedding.jpg?s=2048x2048&w=is&k=20&c=vp0qccKJ41IIlRgpnbgczOZyh30XxSLlqtc9s5d9Lm0="
];

const promoCards = [
  {
    img: "https://images.unsplash.com/photo-1574814073364-e865c9b6a3a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVuZGFudHxlbnwwfHwwfHx8MA%3D%3D",
    text: "Heart so full"
  },
  {
    img: "https://images.unsplash.com/photo-1732949749473-301ceeb019e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmllJTIwamV3ZWxzfGVufDB8fDB8fHww",
    text: "Barbie Collection"
  },
  {
    img: "https://images.unsplash.com/photo-1552287401-92eeb11bce68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZpbCUyMGV5ZXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Evil Eye"
  }
];

const testimonialImages = [
 "https://shorturl.at/a263p",
 "https://shorturl.at/Zznqf",
 "https://shorturl.at/7Neu2",
 "https://shorturl.at/GaU6d",
 "https://shorturl.at/Jalpw",
 "https://tinyurl.com/3yujhevh"
];

const promises = [
  {
    text: "\uD83D\uDC8E 100% Genuine Gold & Diamonds",
    img: "https://tinyurl.com/5n886da6"
  },
  {
    text: "\uD83D\uDCDC Certified Quality Assurance",
    img: "https://tinyurl.com/deabsaj2"
  },
  {
    text: "\uD83D\uDD01 Easy Returns & Refunds",
    img: "https://tinyurl.com/d8savcpd"
  },
  {
    text: "\uD83D\uDCE6 Secure Packaging & Delivery",
    img: "https://tinyurl.com/y67wavn6"
  },
  {
    text: "\uD83D\uDCDE Dedicated Customer Support",
    img: "https://tinyurl.com/5n6vfn84"
  },
  {
    text: "\uD83D\uDEE0\uFE0F Lifetime Maintenance Service",
    img: "https://tinyurl.com/3yvtc9y9"
  }
];

const discountBanners = [
  {
    title: "Festive Gold Offers ✨",
    subtitle: "Up to 30% Off on Gold Ornaments",
    img: "https://tinyurl.com/5azpx4k9"
  },
  {
    title: "Diamond Deals \uD83D\uDC8E",
    subtitle: "Flat 20% Off on Diamond Rings",
    img: "https://tinyurl.com/3s7jtbaf"
  },
  {
    title: "Traditional Touch \uD83C\uDDF8",
    subtitle: "Exclusive Mangalsutra Designs",
    img: "https://tinyurl.com/ycyc3v4z"
  },
  {
    title: "Men\u2019s Collection \uD83C\uDFA9",
    subtitle: "Flat \u20B92000 Off on Men's Jewellery",
    img: "https://tinyurl.com/3d6t8mh4"
  },
  {
    title: "Kids Sparkle \uD83C\uDF1F",
    subtitle: "Cute & Affordable Jewelry for Kids",
    img: "https://tinyurl.com/4n67xdsy"
  }
];

const HomePage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate("/products?search=" + encodeURIComponent(searchTerm));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1d3a] to-[#12264a] text-yellow-100">
      <div className="flex justify-center py-6 px-4">
        <input
          type="text"
          placeholder="Search for Jewellery"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full max-w-xl px-4 py-2 rounded-full border border-yellow-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>

      <div className="w-full h-[50vh] overflow-hidden relative mb-8">
        <motion.img
          key={currentBanner}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 1 }}
          src={bannerImages[currentBanner]}
          alt="Banner"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${currentBanner === idx ? "bg-yellow-400" : "bg-yellow-100"}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-pink-100 text-[#0b1d3a] text-center py-2 font-medium animate-pulse mb-6">
        Gold Mine <strong className="text-pink-500">10+1</strong> Monthly Plan – Pay 10 installments & enjoy 100% savings on the 11th month!
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 pb-12">
        {promoCards.map((card, i) => (
          <motion.div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img src={card.img} alt={card.text} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#0b1d3a] mb-2">{card.text}</h3>
              {i === 1 ? (
                <Link
                  to="/checkout"
                  className="inline-block mt-2 bg-[#0b1d3a] text-white px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-[#0b1d3a]"
                >
                  Make Payment
                </Link>
              ) : null}
            </div>
          </motion.div>
        ))}
      </section>

      <section className="flex overflow-x-auto gap-6 px-4 pb-12 animate-marquee">
        {discountBanners.map((item, i) => (
          <motion.div
            key={i}
            className="min-w-[300px] rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
            animate={{ x: [300, 0] }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          >
            <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-4 text-center text-[#0b1d3a]">
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm mb-2">{item.subtitle}</p>
              <Link
                to="/products"
                className="inline-block mt-2 bg-[#0b1d3a] text-white px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-[#0b1d3a]"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="w-full overflow-hidden pb-12">
        <motion.div
          className="flex gap-6 px-4"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {testimonialImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Testimonial ${i + 1}`}
              className="rounded-xl shadow-md w-64 h-64 object-cover"
            />
          ))}
        </motion.div>
      </section>

      <section className="px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-yellow-300 mb-8">Our Promises</h2>
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {promises.map((item, i) => (
            <div
              key={i}
              className="bg-[#1a2c52] border border-yellow-400 text-yellow-100 p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-transform duration-300"
            >
              <img src={item.img} alt="" className="w-full h-40 object-cover rounded mb-4" />
              {item.text}
            </div>
          ))}
        </motion.div>
      </section>

      <footer className="bg-[#0b1d3a] text-yellow-100 py-6 text-center">
        <p className="mb-2">Follow us on:</p>
        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">eleganza24facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">eleganza24Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">eleganza2twitter</a>
          <a href="mailto:support@eleganza.com">eleganza24@gmail</a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
