import { Product } from "@/type";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartItemsStore {
  items: Product[];
  addItem: (data: Product) => void;
  reomveItem: (id: string) => void;
  removeAll: () => void;
}

const useCartItemsStore = create(
  persist<CartItemsStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
          return toast("Item already added");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added successfully");
      },
      reomveItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed successfully");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartItemsStore;
