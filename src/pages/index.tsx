import { Header } from "@/components/Header";
import { Summary } from "@/components/Summary";
import { TransactionsTable } from "@/components/TransactionsTable";
import { NewTransactionModal } from "@/components/NewTransactionModal";
import { useTransactionsStore } from "@/store/modal.store.";

export default function Home() {
  const { isOpen, handleCloseNewTransactionModal } = useTransactionsStore();

  return (
    <>
      <Header />
      <Summary />
      <TransactionsTable />
      <NewTransactionModal
        isOpen={isOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
