import { NextResponse, type NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a rate limiter allowing 10 requests per 10 seconds per IP
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  analytics: true,
});

export default async function middleware(req: NextRequest) {
  const ip =
    req.ip ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "127.0.0.1";
  const key = `queue:${ip}`;
  const { success, limit, reset, remaining } = await ratelimit.limit(key);

  const headers = new Headers({
    "X-RateLimit-Limit": String(limit),
    "X-RateLimit-Remaining": String(remaining),
    "X-RateLimit-Reset": String(reset),
  });

  if (!success) {
    return new NextResponse("Too Many Requests", { status: 429, headers });
  }
  return NextResponse.next({ headers });
}

// Only run on queue API endpoints
export const config = {
  matcher: ["/api/queue/:path*"],
};

