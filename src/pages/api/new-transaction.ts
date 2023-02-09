// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fauna } from "@/services/fauna";
import { query as q } from "faunadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, value, type, category, date } = req.body;

  const transaction = {
    title,
    value,
    type,
    category,
    date,
  };

  if (req.method === "POST") {
    fauna.query(
      q.Create(q.Collection("transactions"), {
        data: transaction,
      })
    );

    res.status(200).json({ name: "John Doe" });
  } else {
    res.setHeader("Allow", "Post");
    res.status(450).end("Method not allowed");
  }
}
