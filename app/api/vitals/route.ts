import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.warn("Vitals", body);
  return new Response(null, { status: 204 });
}
