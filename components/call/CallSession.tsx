"use client";

/**
 * This is a stub implementation of the call session. In future
 * iterations you can swap this out for your preferred video SDK
 * implementation (for example, 100ms.live, Twilio or WebRTC directly).
 * The component accepts the same props as the original but simply
 * displays a placeholder along with the identifiers and an end
 * button. It delegates ending the call to the passed `onEnd` handler.
 */
export type CallSessionProps = {
  roomId: string;
  userId: string;
  userName: string;
  onEnd: () => void;
  seconds?: number;
};

export default function CallSession({ roomId, userId, userName, onEnd }: CallSessionProps) {
  return (
    <div className="space-y-4 text-center">
      <p className="text-ink/80">Video calling is not available in this build.</p>
      <p className="text-ink/60 text-sm">Room: {roomId}</p>
      <button
        onClick={onEnd}
        className="rounded-full bg-gold-500 text-ink px-6 py-3 hover:bg-gold-600 focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        End call
      </button>
    </div>
  );
}
