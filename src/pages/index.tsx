import {
  AuthButton,
  AuthOptions,
  Container,
  Form,
  Input,
  Label,
  LoginButton,
} from "@/styles/auth";
import { AiFillGithub } from "react-icons/ai";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "@/services/api";
import { useState } from "react";

export default function Auth() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { data } = useSession();
  const router = useRouter();

  if (data) {
    router.push("/home");
  }

  async function handleLogin(e) {
    e.preventDefault();
    await signIn("credentials", { username: user, password });
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Label>Usuário</Label>
        <Input type={"text"} onChange={(e) => setUser(e.target.value)} />

        <Label>Senha</Label>

        <Input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />

        <LoginButton type="submit">Login</LoginButton>
      </Form>

      <AuthOptions>
        <AuthButton disabled onClick={() => signIn("github")}>
          <AiFillGithub size={"25px"} />
          LogIn with GitHub
        </AuthButton>
      </AuthOptions>
    </Container>
  );
}
