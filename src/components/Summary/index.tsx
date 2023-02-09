import { useTransactionsStore } from "@/store/modal.store.";
import {
  Container,
  SummaryItem,
  SummaryItemHeader,
  SummaryItemValue,
} from "./styles";

export function Summary() {
  const { transactions } = useTransactionsStore();

  const summaryValues = transactions.reduce(
    (acc, element) => {
      element.type === "income"
        ? (acc.income += Number(element.value))
        : (acc.withdraw += Number(element.value));

      acc.total = acc.income - acc.withdraw;

      return acc;
    },
    {
      income: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <SummaryItem>
        <SummaryItemHeader>
          Incomes
          <img src="/assets/income.svg" alt="" />
        </SummaryItemHeader>
        <SummaryItemValue>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summaryValues.income)}
        </SummaryItemValue>
      </SummaryItem>

      <SummaryItem>
        <SummaryItemHeader>
          Withdraw
          <img src="/assets/withdraw.svg" alt="" />
        </SummaryItemHeader>
        <SummaryItemValue>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summaryValues.withdraw)}
        </SummaryItemValue>
      </SummaryItem>

      <SummaryItem>
        <SummaryItemHeader>
          Total
          <img src="/assets/total.svg" alt="" />
        </SummaryItemHeader>
        <SummaryItemValue>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summaryValues.total)}
        </SummaryItemValue>
      </SummaryItem>
    </Container>
  );
}
