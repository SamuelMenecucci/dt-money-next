import { api } from "@/services/api";
import axios from "axios";
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

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    if (!title || !value || !type || !category) {
      return alert("preencha todos os campos, caralho");
    }

    api.post("new-transaction", {
      title,
      value,
      type,
      category,
    });
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
            type="text"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <TransactionType>
            <TransactionTypeButton onClick={() => setType("income")}>
              <img src="/assets/income.svg" alt="" />
              Income
            </TransactionTypeButton>

            <TransactionTypeButton onClick={() => setType("withdraw")}>
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
