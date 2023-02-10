import { api } from "@/services/api";
import { useTransactionsStore } from "@/store/modal.store.";
import { useEffect } from "react";
import { Container } from "./styles";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdEmojiTransportation, MdOutlinePets } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { AiOutlineYoutube, AiOutlineHome } from "react-icons/ai";

export function TransactionsTable() {
  const { transactions, setTransactions } = useTransactionsStore();

  const CategoryIcons = {
    Food: <IoFastFoodOutline />,
    Transport: <MdEmojiTransportation />,
    Fun: <GrGamepad />,
    Streaming: <AiOutlineYoutube />,
    Home: <AiOutlineHome />,
    Pet: <MdOutlinePets />,
  };

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
          {transactions?.map((element, index: number) => (
            <tr key={index}>
              <td>{element.title}</td>
              <td className={element.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(element.value)}
              </td>
              <td className="category">
                {CategoryIcons[element.category]}
                {element.category}
              </td>
              <td>
                {new Date(element.date).toLocaleString("pt-BR", {
                  timeZone: "utc",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
