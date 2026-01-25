import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { auth } from "./app/api/ice/_auth";

export async function proxy(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/ice") &&
    !req.nextUrl.pathname.startsWith("/ice/auth")
  ) {
    try {
      await auth(req);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/ice/auth", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ice/:path*"],
};
