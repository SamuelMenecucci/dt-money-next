import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from "@/services/fauna";
import { query as q } from "faunadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result: any = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("transactions"))),
      q.Lambda((x) => q.Get(x))
    )
  );

  const allData = result.data.map((element: any) => {
    return element.data;
  });

  console.log(allData);

  res.status(200).json({ data: allData });
}
