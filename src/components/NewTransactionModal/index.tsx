import { api } from "@/services/api";
import { FormEvent, useState } from "react";
import Modal from "react-modal";
import {
  CloseButton,
  Container,
  Form,
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
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    if (!title || !value || !type || !category) {
      return alert("Por favor, preencha todos os campos");
    }

    await api.post("new-transaction", {
      title,
      value,
      type,
      category,
    });

    onRequestClose();

    window.location.reload();
  }

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

        <Form onSubmit={handleCreateNewTransaction}>
          <Title>Register Transaction</Title>

          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            type="number"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <TransactionType>
            <TransactionTypeButton
              type="button"
              onClick={() => setType("income")}
            >
              <img src="/assets/income.svg" alt="" />
              Income
            </TransactionTypeButton>

            <TransactionTypeButton
              type="button"
              onClick={() => setType("withdraw")}
            >
              <img src="/assets/withdraw.svg" alt="" />
              Withdraw
            </TransactionTypeButton>
          </TransactionType>

          <Input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <RegisterButton type="submit">Register</RegisterButton>
        </Form>
      </Container>
    </Modal>
  );
}
