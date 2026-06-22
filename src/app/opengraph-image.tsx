import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Usama Ahmed — Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F4F1EA",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            width: 48,
            height: 4,
            backgroundColor: "#C44E2A",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#111111",
              lineHeight: 1,
            }}
          >
            Usama Ahmed
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#C44E2A",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Full-Stack Engineer
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#5C5C5C",
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            Tech lead at MentorMind · Founding engineer at OneCart · London
          </div>
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#5C5C5C",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Next.js · React Native · AWS
        </div>
      </div>
    ),
    { ...size },
  );
}
