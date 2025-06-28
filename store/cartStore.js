import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  wishlist: [],
  orderHistory: [],

  // 🛒 Cart functionality
  addToCart: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item]
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id)
    })),
  clearCart: () => set({ cartItems: [] }),

  // ❤️ Wishlist functionality
  addToWishlist: (item) =>
    set((state) => {
      if (state.wishlist.some((i) => i.id === item.id)) return state;
      return { wishlist: [...state.wishlist, item] };
    }),
  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id)
    })),

  // 🧾 Order History
  setOrderHistory: (orders) => set({ orderHistory: orders }),
}));

export default useCartStore;
