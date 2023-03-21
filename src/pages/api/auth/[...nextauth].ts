import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Samuel",
          username: "samuelmenecucci",
          password: "zoetototi",
        };

        if (
          credentials.password === user.password &&
          credentials.username === user.username
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  //   callbacks: {
  // async signIn({ user, account, profile }) {
  //   return true;
  //   //   return false;
  // },
  //   },
  pages: {
    signIn: "/",
  },
});
