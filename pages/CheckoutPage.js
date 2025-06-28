import React, { useState } from "react";
import useCartStore from "../store/cartStore";

const CheckoutPage = () => {
  const { cartItems = [], clearCart } = useCartStore();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleCheckout = () => {
    const { name, email, address } = form;
    if (!name || !email || !address) {
      setError("Please fill out all fields.");
      return;
    }

    clearCart();
    setSuccess("🎉 Order placed successfully!");
    setForm({ name: "", email: "", address: "" });
  };

  return (
    <div className="min-h-screen bg-[#0b1d3a] flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full flex flex-col md:flex-row gap-8">
        <img
          src="https://images.unsplash.com/photo-1682811962756-c6478ba9f377?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Jewelry Checkout"
          className="w-full md:w-1/2 object-cover rounded-lg"
        />

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-[#bfa046] mb-4 text-center">Checkout</h2>

          <div className="space-y-4">
            <input
              name="name"
              placeholder="Name"
              className="w-full border px-4 py-2 rounded"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded"
              value={form.email}
              onChange={handleChange}
            />
            <input
              name="address"
              placeholder="Address"
              className="w-full border px-4 py-2 rounded"
              value={form.address}
              onChange={handleChange}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}
            <button
              onClick={handleCheckout}
              className="w-full bg-[#bfa046] text-white px-6 py-2 rounded hover:bg-[#d8b23a] transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
