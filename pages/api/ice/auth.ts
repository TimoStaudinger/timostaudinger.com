import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const pin = String(req.body?.pin ?? "");
  const hash = process.env.ICE_PIN_HASH!;
  const ok = await bcrypt.compare(pin, hash);
  if (!ok) return res.redirect(303, "/ice/auth?error=1");

  const token = jwt.sign({ pin: true }, process.env.ICE_PIN_SESSION_SECRET!, {
    expiresIn: "30m",
  });

  res.setHeader(
    "Set-Cookie",
    serialize("pin_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 30,
    }),
  );

  return res.redirect(303, "/ice");
}
