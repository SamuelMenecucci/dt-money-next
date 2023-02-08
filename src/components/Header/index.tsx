import { useModal } from "@/store/modal.store.";
import Image from "next/image";
import { Container, Content, NewTransactionButton } from "./styles";

export function Header() {
  const { handleOpenNewTransactionModal } = useModal();

  return (
    <Container>
      <Content>
        <img src={"/assets/logo.svg"} alt="logo image" />
        <NewTransactionButton onClick={handleOpenNewTransactionModal}>
          New Transaction
        </NewTransactionButton>
      </Content>
    </Container>
  );
}
