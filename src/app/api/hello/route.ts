import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: "world" }, { status: 404 });
}
