import { api } from "@/services/api";
import { useTransactionsStore } from "@/store/modal.store.";
import { ChangeEvent, useEffect, useState } from "react";
import { Container, FilterButton } from "./styles";
import { IoFastFoodOutline, IoSchoolOutline } from "react-icons/io5";
import { MdEmojiTransportation, MdOutlinePets } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
import { AiOutlineYoutube, AiOutlineHome } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";

export type TransactionType = {
  title: string;
  value: number;
  category: "Pet" | "Transport" | "Fun" | "Streaming" | "Home" | "Food" | "Mãe";
  type: string;
  date: Date;
};

const categoryValues = [
  { label: "Food", value: "Food" },
  { label: "Transport", value: "Transport" },
  { label: "Fun", value: "Fun" },
  { label: "Streaming", value: "Streaming" },
  { label: "Home", value: "Home" },
  { label: "Pet", value: "Pet" },
  { label: "Educação", value: "Educação" },
  { label: "Salário", value: "Salário" },
  { label: "Mamãe", value: "Mãe" },
];

export function TransactionsTable() {
  const { transactions } = useTransactionsStore();

  const CategoryIcons = {
    Food: <IoFastFoodOutline />,
    Transport: <MdEmojiTransportation />,
    Fun: <GrGamepad />,
    Streaming: <AiOutlineYoutube />,
    Home: <AiOutlineHome />,
    Pet: <MdOutlinePets />,
    Mãe: "",
    Educação: <IoSchoolOutline />,
    Salário: <GiTakeMyMoney />,
  };

  const [transactionsTable, setTransactionsTable] = useState<TransactionType[]>(
    []
  );

  useEffect(() => {
    setTransactionsTable(transactions);
  }, [transactions]);

  const handleApplyFilter = (event: { target: { value: string } }) => {
    if (event.target.value === "all") {
      setTransactionsTable(transactions);
      return;
    }

    let selectedFilter;

    selectedFilter = transactions.filter(
      (element) => element.category === event.target.value
    );

    setTransactionsTable(selectedFilter);
  };

  return (
    <Container>
      <FilterButton onChange={handleApplyFilter}>
        <option value="" selected disabled>
          Filtros
        </option>
        <option value="all">Todos</option>

        {categoryValues.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </FilterButton>
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
          {transactionsTable?.map((element, index: number) => (
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
