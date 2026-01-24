import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.ICE_PIN_SESSION_SECRET!);

export const auth = async (req: NextRequest) => {
  const token = req.cookies.get("pin_session")?.value;

  if (!token) {
    throw new Error("No session cookie found. Please login to continue.");
  }

  return jwtVerify(token, secret);
};
