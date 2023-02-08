import { create } from "zustand";

type useModalStoreType = {
  isOpen: boolean;
  handleOpenNewTransactionModal: () => void;
  handleCloseNewTransactionModal: () => void;
};

export const useModal = create<useModalStoreType>((set) => ({
  isOpen: false,
  handleOpenNewTransactionModal: () => set(() => ({ isOpen: true })),
  handleCloseNewTransactionModal: () => set(() => ({ isOpen: false })),
}));
