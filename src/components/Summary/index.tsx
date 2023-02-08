import {
  Container,
  SummaryItem,
  SummaryItemHeader,
  SummaryItemValue,
} from "./styles";

export function Summary() {
  return (
    <Container>
      <SummaryItem>
        <SummaryItemHeader>
          Incomes
          <img src="/assets/income.svg" alt="" />
        </SummaryItemHeader>
        <SummaryItemValue>R$ XXXX.XX</SummaryItemValue>
      </SummaryItem>

      <SummaryItem>
        <SummaryItemHeader>
          Withdraw
          <img src="/assets/withdraw.svg" alt="" />
        </SummaryItemHeader>
        <SummaryItemValue>R$ XXXX.XX</SummaryItemValue>
      </SummaryItem>

      <SummaryItem>
        <SummaryItemHeader>
          Incomes
          <img src="/assets/total.svg" alt="" />
        </SummaryItemHeader>
        <SummaryItemValue>R$ XXXX.XX</SummaryItemValue>
      </SummaryItem>
    </Container>
  );
}
