import { useTransactionsStore } from "@/store/modal.store.";
import {
  Container,
  Content,
  LogOutButton,
  NewTransactionButton,
} from "./styles";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Header() {
  const { handleOpenNewTransactionModal } = useTransactionsStore();

  const { data } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.push("/");
    }
  }, []);

  return (
    <Container>
      <Content>
        <NewTransactionButton onClick={handleOpenNewTransactionModal}>
          New Transaction
        </NewTransactionButton>
        <img src={"/assets/logo.svg"} alt="logo image" />
        <LogOutButton onClick={() => signOut()}>LogOut</LogOutButton>
      </Content>
    </Container>
  );
}
