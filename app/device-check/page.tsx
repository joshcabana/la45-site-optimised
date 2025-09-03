"use client";
import { useEffect, useState } from "react";

type Status = "idle" | "ok" | "blocked" | "error";

export default function DeviceCheckPage() {
  const [camera, setCamera] = useState<Status>("idle");
  const [microphone, setMicrophone] = useState<Status>("idle");
  const [details, setDetails] = useState<string>("");

  useEffect(() => {
    async function probe() {
      try {
        // Check permissions API first to avoid prompting unnecessarily
        if (navigator.permissions) {
          try {
            const camPerm = await navigator.permissions.query({ name: "camera" as PermissionName });
            const micPerm = await navigator.permissions.query({ name: "microphone" as PermissionName });
            setCamera(camPerm.state === "denied" ? "blocked" : "idle");
            setMicrophone(micPerm.state === "denied" ? "blocked" : "idle");
          } catch {}
        }

        // Try to capture briefly with both; immediately stop tracks
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        stream.getTracks().forEach((t) => t.stop());
        setCamera("ok");
        setMicrophone("ok");

        // Enumerate devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cams = devices.filter((d) => d.kind === "videoinput").length;
        const mics = devices.filter((d) => d.kind === "audioinput").length;
        setDetails(`${cams} camera(s), ${mics} microphone(s) detected`);
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        setDetails(msg);
        if (msg.toLowerCase().includes("denied") || msg.toLowerCase().includes("not allowed")) {
          setCamera("blocked");
          setMicrophone("blocked");
        } else {
          setCamera("error");
          setMicrophone("error");
        }
      }
    }
    probe();
  }, []);

  const Badge = ({ label, status }: { label: string; status: Status }) => (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${
        status === "ok"
          ? "bg-green-100 text-green-800"
          : status === "blocked"
          ? "bg-red-100 text-red-800"
          : status === "error"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {label}: {status}
    </span>
  );

  return (
    <main id="main" className="mx-auto max-w-2xl px-6 py-24 space-y-6">
      <h1 className="font-serif text-3xl">Device Check</h1>
      <p className="text-ink/80">We’ll quickly check your camera and microphone.</p>
      <div className="flex gap-3">
        <Badge label="Camera" status={camera} />
        <Badge label="Microphone" status={microphone} />
      </div>
      {details && <p className="text-sm text-ink/70">{details}</p>}
      <p className="text-sm text-ink/60">
        Tip: If permissions are blocked, open your browser’s site settings and allow camera and
        microphone for this site, then refresh.
      </p>
    </main>
  );
}

