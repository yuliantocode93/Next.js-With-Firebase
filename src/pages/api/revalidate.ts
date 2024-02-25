// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revialidated: boolean;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ revialidated: false, message: "Insert Correct Token!" });
  }
  if (req.query.data === "product") {
    try {
      await res.revalidate("/product/static");
      return res.json({ revialidated: true });
    } catch (error) {
      return res.status(500).json({ revialidated: false });
    }
  }
  return res.json({
    revialidated: false,
    message: "Insert Correct Data!",
  });
}
