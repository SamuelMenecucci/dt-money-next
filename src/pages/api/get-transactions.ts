import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from "@/services/fauna";
import { query as q } from "faunadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const result: any = await fauna.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("transactions"))),
        q.Lambda((x) => q.Get(x))
      )
    );

    const allData = result.data.map((element: any) => {
      return element.data;
    });

    res.status(200).json(allData);
  } else {
    res.setHeader("Allow", "Get");
    res.status(450).end("Method not allowed");
  }
}
