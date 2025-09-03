import { NextResponse } from "next/server";

export const revalidate = 60; // cache for 1 minute
export const runtime = "edge";

export async function GET() {
  const now = new Date();
  const days = [...Array(7)].map((_, i) => {
    const d = new Date(now);
    d.setDate(now.getDate() - (6 - i));
    return d;
  });
  const labels = days.map((d) => d.toLocaleDateString(undefined, { weekday: "short" }));
  // Demo data; in production, query your datastore
  const counts = days.map((_, i) => 50 + Math.round(30 * Math.sin(i)) + Math.round(Math.random() * 10));
  return NextResponse.json({ labels, counts });
}

