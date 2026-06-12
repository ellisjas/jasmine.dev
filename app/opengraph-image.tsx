import { ImageResponse } from "next/og";
import { siteName } from "@/app/lib/site";

export const alt = "Jasmine Ellis — Web Developer based in Melbourne, Australia";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "96px",
          background: "linear-gradient(to bottom left, #8b5cf6, #d946ef)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: "-0.02em" }}>
          {siteName}
        </div>
        <div style={{ fontSize: 44, marginTop: 16, opacity: 0.95 }}>
          Web Developer · Melbourne
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
