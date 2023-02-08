import Image from "next/image";
import { Container, Content, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={"/assets/logo.svg"} alt="logo image" />
        <NewTransactionButton>New Transaction</NewTransactionButton>
      </Content>
    </Container>
  );
}
