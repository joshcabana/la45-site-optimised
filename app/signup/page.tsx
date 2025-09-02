"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Identity = "Woman" | "Man" | "Non-binary" | "Another";
type Pronouns = "She/her" | "He/him" | "They/them" | "Self describe";

export default function SignupPage() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [isAdult, setIsAdult] = useState(false);
  const [identity, setIdentity] = useState<Identity | "">("");
  const [identityOther, setIdentityOther] = useState("");
  const [pronouns, setPronouns] = useState<Pronouns | "">("");
  const [pronounsOther, setPronounsOther] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // If already signed up, skip ahead
    try {
      if (localStorage.getItem("signed_up")) router.replace("/queue");
    } catch {}
  }, [router]);

  const canSubmit = isAdult && displayName.trim().length > 1 && identity !== "" && pronouns !== "";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const userId = crypto.randomUUID();
    try {
      localStorage.setItem("dev_user_id", userId);
      localStorage.setItem("dev_user_name", displayName.trim());
      localStorage.setItem("user_identity", identity === "Another" ? identityOther.trim() : identity);
      localStorage.setItem("user_pronouns", pronouns === "Self describe" ? pronounsOther.trim() : pronouns);
      if (email) localStorage.setItem("user_email", email.trim());
      localStorage.setItem("signed_up", "true");
    } catch {}
    router.push("/queue");
  };

  return (
    <main id="main" className="mx-auto max-w-xl px-6 py-16">
      <h1 className="font-serif text-3xl mb-6 text-center">Create your profile</h1>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="displayName" className="block text-sm mb-2">Display name</label>
          <input
            id="displayName"
            className="w-full rounded-xl bg-white/5 border border-black/10 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            placeholder="e.g. beachrunner"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-5 w-5 accent-gold-500"
              checked={isAdult}
              onChange={(e) => setIsAdult(e.target.checked)}
            />
            <span>I confirm I’m 18 or older</span>
          </label>
        </div>

        <div>
          <span className="block text-sm mb-2">How do you describe yourself?</span>
          <div className="grid grid-cols-2 gap-2">
            {(["Woman", "Man", "Non-binary", "Another"] as Identity[]).map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setIdentity(opt)}
                className={`rounded-full px-4 py-2 border text-sm ${
                  identity === opt ? "border-gold-500 bg-black/5" : "border-black/10 hover:border-black/20"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {identity === "Another" && (
            <input
              className="mt-2 w-full rounded-xl bg-white/5 border border-black/10 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              placeholder="Describe in your own words"
              value={identityOther}
              onChange={(e) => setIdentityOther(e.target.value)}
            />
          )}
        </div>

        <div>
          <span className="block text-sm mb-2">Pronouns</span>
          <div className="grid grid-cols-2 gap-2">
            {(["She/her", "He/him", "They/them", "Self describe"] as Pronouns[]).map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setPronouns(opt)}
                className={`rounded-full px-4 py-2 border text-sm ${
                  pronouns === opt ? "border-gold-500 bg-black/5" : "border-black/10 hover:border-black/20"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {pronouns === "Self describe" && (
            <input
              className="mt-2 w-full rounded-xl bg-white/5 border border-black/10 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              placeholder="Share your pronouns"
              value={pronounsOther}
              onChange={(e) => setPronounsOther(e.target.value)}
            />
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">Email (optional)</label>
          <input
            id="email"
            type="email"
            className="w-full rounded-xl bg-white/5 border border-black/10 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-full bg-gold-500 text-ink px-6 py-3 font-medium disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          Continue
        </button>

        <p className="text-xs text-ink/60 text-center">
          Your details help us make better matches. Share only what you’re comfortable with.
        </p>
      </form>
    </main>
  );
}
