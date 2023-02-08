import Modal from "react-modal";
import {
  CloseButton,
  Container,
  Content,
  Input,
  RegisterButton,
  Title,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal"
    >
      <Container>
        <CloseButton onClick={onRequestClose}>
          <img src="/assets/close.svg" alt="" />
        </CloseButton>

        <Content>
          <Title>Register Transaction</Title>

          <Input type="text" placeholder="Title" />
          <Input type="text" placeholder="Value" />

          <TransactionType>
            <TransactionTypeButton>
              <img src="/assets/income.svg" alt="" />
              Income
            </TransactionTypeButton>

            <TransactionTypeButton>
              <img src="/assets/withdraw.svg" alt="" />
              Withdraw
            </TransactionTypeButton>
          </TransactionType>

          <Input type="text" placeholder="Category" />

          <RegisterButton>Register</RegisterButton>
        </Content>
      </Container>
    </Modal>
  );
}
