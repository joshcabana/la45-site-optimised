import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Log vitals data for monitoring (in production, send to analytics service)
    if (process.env.NODE_ENV === "development") {
      console.warn("Vitals", body);
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response("Invalid JSON", { status: 400 });
  }
}
