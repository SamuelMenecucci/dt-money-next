import { create } from "zustand";

export type TransactionType = {
  title: string;
  value: number;
  category: "Pet" | "Transport" | "Fun" | "Streaming" | "Home" | "Food" | "Mãe";
  type: string;
  date: Date;
};

type useTransactionsStoreType = {
  isOpen: boolean;
  transactions: Array<TransactionType>;
  handleOpenNewTransactionModal: () => void;
  handleCloseNewTransactionModal: () => void;
  setTransactions: (value: Array<TransactionType>) => void;
};

export const useTransactionsStore = create<useTransactionsStoreType>((set) => ({
  isOpen: false,
  transactions: [],
  handleOpenNewTransactionModal: () => set(() => ({ isOpen: true })),
  handleCloseNewTransactionModal: () => set(() => ({ isOpen: false })),
  setTransactions: (value: Array<TransactionType>) =>
    set((state) => ({ ...state, transactions: value })),
}));
