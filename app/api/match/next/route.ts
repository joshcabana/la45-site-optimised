import { NextResponse } from "next/server";

// In-memory poll counters to simulate a match after a short wait.
const polls: Record<string, number> = {};

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();
    if (!userId || typeof userId !== "string") {
      return NextResponse.json({ status: "error", error: "invalid_user" }, { status: 400 });
    }

    polls[userId] = (polls[userId] ?? 0) + 1;

    // Simulate a match on the second poll for a snappy demo.
    if (polls[userId] >= 2) {
      const roomId = crypto.randomUUID();
      const matchId = crypto.randomUUID();
      return NextResponse.json({ status: "matched", match: { roomId, matchId } });
    }

    return NextResponse.json({ status: "searching" });
  } catch (e) {
    return NextResponse.json({ status: "error", error: "invalid_body" }, { status: 400 });
  }
}

export const dynamic = "force-dynamic";

