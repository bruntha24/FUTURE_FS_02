import React, { useState } from "react";

const CheckoutPaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [sortOption, setSortOption] = useState("default");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) setQuantity(value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setFormData({ name: "", email: "", address: "" });
    setQuantity(1);
    setSortOption("default");
  };

  return (
    <div className="min-h-screen bg-[#0b1d3a] text-yellow-400 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#132c4c] border border-yellow-500 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-yellow-300 mb-6 text-center">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-[#0b1d3a] text-white placeholder-yellow-200 border border-yellow-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-[#0b1d3a] text-white placeholder-yellow-200 border border-yellow-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-[#0b1d3a] text-white placeholder-yellow-200 border border-yellow-500"
          />

          <div className="flex items-center justify-between">
            <label htmlFor="quantity" className="text-yellow-200">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="w-20 px-3 py-1 rounded bg-[#0b1d3a] text-white border border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="sort" className="text-yellow-200 block mb-1">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="w-full px-3 py-2 rounded bg-[#0b1d3a] text-white border border-yellow-500"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>

          {orderPlaced && (
            <p className="text-green-400 text-center">🎉 Order placed successfully!</p>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-[#0b1d3a] font-semibold rounded hover:bg-yellow-600"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPaymentPage;
