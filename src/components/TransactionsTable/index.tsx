import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<any>([]);

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
              <td>{element.value}</td>
              <td>{element.category}</td>
              <td>{element.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
