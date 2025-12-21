import type { NextRequest } from "next/server";
import type { NextApiRequest } from "next";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.ICE_PIN_SESSION_SECRET!);

function getCookie(
  req: NextRequest | NextApiRequest,
  name: string,
): string | undefined {
  // App Router / Middleware (NextRequest)
  if ("cookies" in req && typeof req.cookies.get === "function") {
    return req.cookies.get(name)?.value;
  }

  // Pages Router API (NextApiRequest)
  if ("cookies" in req) {
    return req.cookies?.[name as keyof typeof req.cookies] as string;
  }

  return undefined;
}

export const auth = async (req: NextRequest | NextApiRequest) => {
  const token = getCookie(req, "pin_session");

  if (!token) {
    throw new Error("No session cookie found. Please login to continue.");
  }

  return jwtVerify(token, secret);
};
