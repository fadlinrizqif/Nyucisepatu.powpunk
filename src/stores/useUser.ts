import { UserRespond } from "@/services/userService";
import { create } from "zustand";

interface userStore {
  user: UserRespond | null
  setUser: (user: UserRespond | null) => void
  removeUser: () => void
}

export const useUser = create<userStore>((set) => ({
  user: null,
  setUser: (newUser: UserRespond | null) => set({ user: newUser }),
  removeUser: () => set({ user: null })
}))
