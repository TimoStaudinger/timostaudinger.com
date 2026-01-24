import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const pin = String(formData.get("pin") ?? "");

    const hash = process.env.ICE_PIN_HASH!;
    const ok = await bcrypt.compare(pin, hash);

    if (!ok) {
      return NextResponse.redirect(new URL("/ice/auth?error=1", request.url), 303);
    }

    const token = jwt.sign(
      { pin: true },
      process.env.ICE_PIN_SESSION_SECRET!,
      { expiresIn: "30m" }
    );

    const response = NextResponse.redirect(new URL("/ice", request.url), 303);

    response.cookies.set("pin_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 30,
    });

    return response;
  } catch (error) {
    return NextResponse.redirect(new URL("/ice/auth?error=1", request.url), 303);
  }
}
