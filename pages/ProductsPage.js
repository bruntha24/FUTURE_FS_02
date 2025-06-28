import React, { useEffect, useState } from "react";
import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const addToCart = useCartStore((state) => state.addToCart);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);

  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.name.split(" ")[0]))];

  const filteredProducts = products.filter(
    (item) =>
      (filteredCategory === "All" ||
        item.name.toLowerCase().includes(filteredCategory.toLowerCase())) &&
      parseFloat(item.price) >= priceRange[0] &&
      parseFloat(item.price) <= priceRange[1]
  );

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseFloat(e.target.value);
    setPriceRange(newRange);
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: item.quantity || 1 });
    toast.success("Added to Cart!", { position: "top-right" });
  };

  const handleWishlistToggle = (item) => {
    if (isWishlisted(item.id)) {
      removeFromWishlist(item.id);
      toast.info("Removed from Wishlist", { position: "top-right" });
    } else {
      addToWishlist(item);
      toast.success("Added to Wishlist!", { position: "top-right" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0b1d3a] text-white px-4 py-10">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Our Jewellery Collection
      </h2>

      {/* Filter Dropdown */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <select
          value={filteredCategory}
          onChange={(e) => setFilteredCategory(e.target.value)}
          className="px-4 py-2 rounded bg-[#132c4c] text-yellow-300 border border-yellow-600"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "All Products" : category}
            </option>
          ))}
        </select>

        <div className="flex gap-4 items-center">
          <label className="text-yellow-200">₹</label>
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-24 px-3 py-1 rounded bg-[#132c4c] text-yellow-200 border border-yellow-500"
          />
          <span className="text-yellow-300">to</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-24 px-3 py-1 rounded bg-[#132c4c] text-yellow-200 border border-yellow-500"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a2a44] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform hover:scale-105 relative border border-yellow-600"
          >
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-52 object-cover"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/400x300?text=No+Image")
              }
            />
            <button
              onClick={() => handleWishlistToggle(item)}
              className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-300 text-xl"
              title={isWishlisted(item.id) ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              {isWishlisted(item.id) ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-yellow-300">{item.name}</h3>
              <p className="text-sm text-yellow-200 mb-2">
                ₹{parseFloat(item.price).toFixed(2)}
              </p>
              <div className="flex items-center mb-2">
                <label className="text-sm mr-2">Qty:</label>
                <input
                  type="number"
                  min="1"
                  defaultValue={1}
                  onClick={(e) => (item.quantity = parseInt(e.target.value))}
                  className="w-16 px-2 py-1 rounded bg-[#132c4c] text-yellow-200 border border-yellow-500"
                />
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full py-2 px-4 bg-yellow-600 text-[#0b1d3a] rounded hover:bg-yellow-700 transition font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
