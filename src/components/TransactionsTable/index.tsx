import { api } from "@/services/api";
import { useTransactionsStore } from "@/store/modal.store.";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions, setTransactions } = useTransactionsStore();

  useEffect(() => {
    api.get("/get-transactions").then((res) => setTransactions(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map((element: any, index: number) => (
            <tr key={index}>
              <td>{element.title}</td>
              <td className={element.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(element.value)}
              </td>
              <td>{element.category}</td>
              <td>{element.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
