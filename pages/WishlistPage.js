// 📄 src/pages/WishlistPage.js
import React from "react";
import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const WishlistPage = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-12 bg-[#0b1d3a] text-white"
    >
      <div className="max-w-3xl mx-auto bg-[#1a2a44] rounded-lg shadow-lg p-8 border border-yellow-500">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
          <AiFillHeart className="text-yellow-400" /> Your Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <p className="text-yellow-100">Your wishlist is currently empty.</p>
        ) : (
          <ul className="divide-y divide-yellow-700">
            {wishlist.map((item, index) => {
              const discount = index % 2 === 0 ? 0.2 : 0.3; // 20% or 30%
              const discountedPrice = item.price ? Number(item.price) * (1 - discount) : 0;
              return (
                <li key={item.id} className="py-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-lg text-yellow-300">{item.name}</h3>
                    <p className="text-sm text-yellow-200">
                      <span className="line-through text-yellow-500 mr-2">
                        ₹{item.price ? Number(item.price).toFixed(2) : "0.00"}
                      </span>
                      <span className="text-yellow-300 font-semibold">
                        ₹{discountedPrice.toFixed(2)} ({discount * 100}% OFF)
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-yellow-300 hover:text-yellow-400"
                      title="Remove from wishlist"
                    >
                      <AiFillHeart size={22} />
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      disabled={isInCart(item.id)}
                      className={`px-3 py-1 text-sm rounded font-semibold ${
                        isInCart(item.id)
                          ? "bg-yellow-800 text-yellow-300 cursor-not-allowed"
                          : "bg-yellow-600 text-white hover:bg-yellow-700"
                      }`}
                    >
                      {isInCart(item.id) ? "In Cart" : "Add to Cart"}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default WishlistPage;
