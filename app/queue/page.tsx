"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { gaEvent } from "@/utils/ga";

// Lazy-load TokenPacks so queue page stays light on first paint
const TokenPacks = dynamic(() => import("@/components/TokenPacks"), { ssr: false });

/**
 * The queue page allows a user to enter the matching pool. A unique
 * identifier and display name are persisted in localStorage so that
 * reloading or navigating back does not lose context. Once the
 * client posts to `/api/queue/enter`, it polls `/api/match/next` every
 * 1.5 seconds until a match is made. When matched it navigates to
 * the call page with the appropriate room and match identifiers.
 */
function QueueInner() {
  const router = useRouter();
  const params = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const pollRef = useRef<number | null>(null);

  // Redirect to signup if not signed up yet (allow guest via ?guest=1)
  useEffect(() => {
    try {
      const signed = typeof window !== "undefined" ? localStorage.getItem("signed_up") : null;
      const guest = params.get("guest") === "1";
      if (!signed && !guest) router.replace("/signup");
    } catch {}
    // Only concerns navigation based on params/router
  }, [params, router]);

  // Initialise local identifiers on first mount. Use crypto.randomUUID as a
  // fallback when no stored values exist. Save values back to localStorage.
  useEffect(() => {
    const id =
      (typeof window !== "undefined"
        ? localStorage.getItem("dev_user_id")
        : null) ?? crypto.randomUUID();
    const name =
      (typeof window !== "undefined"
        ? localStorage.getItem("dev_user_name")
        : null) ?? "You";
    setUserId(id);
    setUserName(name);
    if (typeof window !== "undefined") {
      localStorage.setItem("dev_user_id", id);
      localStorage.setItem("dev_user_name", name);
    }
  }, []);

  // Enter the queue and handle matching logic. Poll the backend for
  // matches until one is found, then redirect to the call page.
  const enter = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/queue/enter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, displayName: userName }),
      });
      setLoading(false);
      if (!res.ok) return;
      const json = await res.json();
      if (json.status === "matched") {
        const { match } = json;
        router.push(`/call?roomId=${match.roomId}&matchId=${match.matchId}`);
        return;
      }
      let elapsed = 0;
      const iv = window.setInterval(async () => {
        const r = await fetch("/api/match/next", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        });
        const j = await r.json();
        if (j.status === "matched") {
          clearInterval(iv);
          pollRef.current = null;
          const { match } = j;
          router.push(`/call?roomId=${match.roomId}&matchId=${match.matchId}`);
          // Store match ID for debugging purposes
          if (typeof window !== "undefined") {
            (window as Window & { matchId?: string }).matchId = match.matchId;
          }
        } else {
          elapsed += 1500;
          if (elapsed > 30000) {
            // Optionally show a subtle heartbeat or spinner after 30s
            console.debug("Still searching…");
          }
        }
      }, 1500);
      pollRef.current = iv;
    } catch (err) {
      setLoading(false);
      // Handle error appropriately - could show user notification
      if (process.env.NODE_ENV === "development") {
        console.error("Queue polling error:", err);
      }
    }
  };

  // Safety: clear any outstanding interval when unmounting
  useEffect(() => {
    return () => {
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };
  }, []);

  return (
    <main id="main" className="mx-auto max-w-xl px-6 py-16 space-y-6 text-center">
      <h1 className="font-serif text-3xl mb-2">Enter the queue</h1>
      <p className="text-ink/80">
        We’ll pair you for a 45‑second video intro.
      </p>
      <button
        onClick={() => {
          gaEvent("enter_queue_click");
          enter();
        }}
        disabled={loading}
        className="rounded-full bg-gold-500 text-ink px-6 py-3 hover:bg-gold-600 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        {loading ? "Looking for a match…" : "Enter"}
      </button>
      <p className="text-xs text-ink/60">
        You’ll be matched based on availability. This may take a few seconds.
      </p>
      {typeof window !== "undefined" && localStorage.getItem("signed_up") ? (
        <div className="mt-10">
          {/* Reveal token packs after sign up only */}
          <TokenPacks />
        </div>
      ) : null}
    </main>
  );
}

export default function QueuePage() {
  return (
    <Suspense>
      <QueueInner />
    </Suspense>
  );
}
