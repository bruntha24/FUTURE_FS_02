// 📄 src/pages/OrderPage.js
import React from "react";
import useCartStore from "../store/cartStore";

const OrderPage = () => {
  const { cartItems } = useCartStore();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-yellow-800">Order Summary</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 shadow rounded">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-2 flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="mt-6 text-center">
            <a
              href="/payment"
              className="inline-block bg-yellow-700 text-white py-2 px-6 rounded hover:bg-yellow-800 transition"
            >
              Proceed to Payment
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
