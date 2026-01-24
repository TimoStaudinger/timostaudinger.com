import { NextRequest, NextResponse } from "next/server";
import { auth } from "../_auth";

export async function GET(request: NextRequest) {
  try {
    await auth(request);
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const raw = process.env.ICE_DATA;

  if (!raw) {
    return NextResponse.json(
      { error: "ICE_DATA env var is not defined" },
      { status: 500 }
    );
  }

  try {
    const data = JSON.parse(raw);
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "ICE_DATA contains invalid JSON" },
      { status: 500 }
    );
  }
}
