import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Account {
  firstName: string;
  lastName: string;
  userName: string;
  address: string;
  phone: string;
  email: string;
}

type AccountState = {
  account: Account | null;
  setAccount: (data: Account) => void;
  updateAccount: (data: Partial<Account>) => void;
};

export const useAccountStore = create<AccountState>()(
  persist(
    (set) => ({
      account: null,
      setAccount: (data) => set({ account: data }),
      updateAccount: (data) =>
        set((state) => ({
          account: state.account
            ? { ...state.account, ...data }
            : (data as Account),
        })),
    }),
    {
      name: "account-storage", // 🔹 Tên key lưu trong localStorage
    }
  )
);
