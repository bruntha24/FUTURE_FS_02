// 📄 src/store/wishlistStore.js
import { create } from "zustand";

const useWishlistStore = create((set) => ({
  wishlist: [],
  addToWishlist: (item) =>
    set((state) => {
      const exists = state.wishlist.some((i) => i.id === item.id);
      if (exists) return state; // prevent duplicates
      return { wishlist: [...state.wishlist, item] };
    }),
  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),
}));

export default useWishlistStore;
