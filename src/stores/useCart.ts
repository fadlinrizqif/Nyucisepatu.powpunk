import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  decreseItem: (id: number) => void;
  clearItem: () => void;

}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item: CartItem) => set((state) => {
        const isExist = state.items.find((e) => e.id == item.id)
        if (isExist) {
          return {
            items: state.items.map((el) => {
              return el.id == item.id ? { ...el, quantity: el.quantity + 1 } : el
            })
          }
        }
        return { items: [...state.items, item] }
      }
      ),
      decreseItem: (id: number) => set((state) => {
        const isExist = state.items.find((e) => e.id == id)
        if (isExist && isExist.quantity <= 1) {
          return {
            items: state.items.filter((el) => el.id != id)
          }
        }
        return {
          items: state.items.map((el) => el.id == id ? { ...el, quantity: el.quantity - 1 } : el)
        }
      }),
      clearItem: () => set({ items: [] })
    }),
    { name: "cart-storage" },
  )
)
