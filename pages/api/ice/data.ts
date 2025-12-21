import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../util/ice";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await auth(req);
  } catch (error) {
    res.status(401).send("Unauthorized");
    return;
  }

  const raw = process.env.ICE_DATA;

  if (!raw) {
    res.status(500).send("ICE_DATA env var is not defined");
    return;
  }

  try {
    const data = JSON.parse(raw);
    res.status(200).json(data);
  } catch {
    res.status(500).send("ICE_DATA contains invalid JSON");
  }
}
