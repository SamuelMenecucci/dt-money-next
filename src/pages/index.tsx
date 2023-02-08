import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";
import { Summary } from "@/components/Summary";
import { TransactionsTable } from "@/components/TransactionsTable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsTable />
    </>
  );
}
