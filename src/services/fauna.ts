import Fauna from "faunadb";

export const fauna = new Fauna.Client({
  secret: process.env.FAUNA_API_KEY || "",
});
