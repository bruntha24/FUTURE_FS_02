import React from "react";
import useCartStore from "../store/cartStore";
import { useNavigate } from "react-router-dom";

const ShoppingCartPage = () => {
  const { cartItems = [], removeFromCart } = useCartStore();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + parseFloat(item.price || 0), 0);
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-[#0b1d3a] text-white">
      <div className="max-w-4xl mx-auto bg-[#1a2a44] rounded-lg shadow-lg p-8 border border-yellow-500">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-yellow-200 text-center">Your cart is empty.</p>
        ) : (
          <ul className="divide-y divide-yellow-800">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/100x100?text=No+Image")}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-300">{item.name}</h3>
                    <p className="text-yellow-200">₹{parseFloat(item.price).toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <div className="mt-8">
            <div className="text-right text-xl text-yellow-400 font-bold mb-4">
              Total: ₹{calculateTotal().toFixed(2)}
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded"
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
