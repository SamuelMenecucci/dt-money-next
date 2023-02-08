import { create } from "zustand";

type useTransactionsStoreType = {
  isOpen: boolean;
  handleOpenNewTransactionModal: () => void;
  handleCloseNewTransactionModal: () => void;
};

export const useTransactionsStore = create<useTransactionsStoreType>((set) => ({
  isOpen: false,
  handleOpenNewTransactionModal: () => set(() => ({ isOpen: true })),
  handleCloseNewTransactionModal: () => set(() => ({ isOpen: false })),
}));
