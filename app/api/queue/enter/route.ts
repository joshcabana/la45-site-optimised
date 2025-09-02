import { NextResponse } from "next/server";

// Simple in-memory tracker for demo purposes only.
// In production, use a database or queue.
const waiting = new Set<string>();

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();
    if (typeof userId === "string" && userId.length > 0) {
      waiting.add(userId);
    }
    // Immediately respond that we are searching. Matching is handled by /api/match/next
    return NextResponse.json({ status: "searching" });
  } catch (e) {
    return NextResponse.json({ status: "error", error: "invalid_body" }, { status: 400 });
  }
}

export const dynamic = "force-dynamic";

