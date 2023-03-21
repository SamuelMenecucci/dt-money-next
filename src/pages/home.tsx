import { Header } from "@/components/Header";
import { Summary } from "@/components/Summary";
import { TransactionsTable } from "@/components/TransactionsTable";
import { NewTransactionModal } from "@/components/NewTransactionModal";
import { useTransactionsStore } from "@/store/modal.store.";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { api } from "@/services/api";
import axios from "axios";

type HomeProps = {
  response: {
    title: string;
    value: number;
    category: "Pet" | "Transport" | "Fun" | "Streaming" | "Home" | "Food";
    type: string;
    date: Date;
  }[];
};

export default function Home({ response }: HomeProps) {
  const { isOpen, handleCloseNewTransactionModal, setTransactions } =
    useTransactionsStore();

  useEffect(() => {
    setTransactions(response);
  }, []);

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

export const getServerSideProps: GetServerSideProps = async () => {
  const env = process.env.NODE_ENV;
  const dev = process.env.DEV_URL;
  const prod = process.env.PROD_URL;

  //Next recommends you write your server code directly in getServerSideProps: https://nextjs.org/docs/basic-features/data-fetching#write-server-side-code-directly
  // Otherwise you'd have to put the fully qualified url in your axios.get(`https://my-domain.com/api/trends...`) because the server doesn't know what your domain is.
  const response = await axios.get(
    env === "development"
      ? `${dev}/get-transactions`
      : `${prod}/get-transactions`
  );

  return {
    props: { response: response.data },
  };
};
