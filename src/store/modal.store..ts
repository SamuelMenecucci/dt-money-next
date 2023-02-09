import { create } from "zustand";

type useTransactionsStoreType = {
  isOpen: boolean;
  transactions: Array<any>;
  handleOpenNewTransactionModal: () => void;
  handleCloseNewTransactionModal: () => void;
  setTransactions: (value: any) => void;
};

export const useTransactionsStore = create<useTransactionsStoreType>((set) => ({
  isOpen: false,
  transactions: [],
  handleOpenNewTransactionModal: () => set(() => ({ isOpen: true })),
  handleCloseNewTransactionModal: () => set(() => ({ isOpen: false })),
  setTransactions: (value: any) =>
    set((state) => ({ ...state, transactions: value })),
}));
