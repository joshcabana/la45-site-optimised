"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

/**
 * The call page fetches the room and match identifiers from the URL
 * query parameters and ensures the user has persisted identifiers.
 * In this minimal build video calling is not implemented; instead a
 * placeholder interface is shown with the room and match IDs and a
 * button to end the call. When the call ends the user is returned
 * to the onboarding flow.
 */
function CallInner() {
  const params = useSearchParams();
  const router = useRouter();
  const roomId = params.get("roomId") || "";
  const matchId = params.get("matchId") || "";
  const [userId] = useState(() =>
    typeof window !== "undefined"
      ? (localStorage.getItem("dev_user_id") ?? crypto.randomUUID())
      : ""
  );
  const [userName] = useState(() =>
    typeof window !== "undefined"
      ? (localStorage.getItem("dev_user_name") ?? "You")
      : "You"
  );

  // Persist identifiers once loaded
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dev_user_id", userId);
      localStorage.setItem("dev_user_name", userName);
    }
  }, [userId, userName]);

  // If no room ID is present show an error message
  if (!roomId) {
    return <div className="p-6">Missing room</div>;
  }

  const onEnd = () => router.push("/onboarding");

  return (
    <main id="main-content" className="mx-auto max-w-4xl px-6 py-12 space-y-6 text-center">
      <h1 className="font-serif text-3xl">Video call</h1>
      <p className="text-ink/80">
        Video calling is coming soon. This is a placeholder for the call
        experience.
      </p>
      <p className="text-ink/60 text-sm">
        Room ID: {roomId} {matchId ? `| Match ID: ${matchId}` : ""}
      </p>
      <button
        onClick={onEnd}
        className="mt-6 rounded-full bg-gold-500 text-ink px-6 py-3 hover:bg-gold-600 focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        End call
      </button>
    </main>
  );
}

export default function CallPage() {
  return (
    <Suspense>
      <CallInner />
    </Suspense>
  );
}
