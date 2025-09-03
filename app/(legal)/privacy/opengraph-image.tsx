import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#0B0B0B",
          color: "#fff",
          fontSize: 64,
          letterSpacing: -1,
          fontWeight: 600,
        }}
      >
        LA45 — Privacy Policy
      </div>
    ),
    size,
  );
}

