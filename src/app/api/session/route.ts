import { NextResponse } from "next/server";
import { getSession } from "@/app/_lib/session";

export async function GET() {
  const session = await getSession();
  return NextResponse.json(session || {});
}
