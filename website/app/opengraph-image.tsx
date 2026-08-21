import { ImageResponse } from "next/og";

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
          justifyContent: "space-between",
          padding: "72px 84px",
          backgroundColor: "#050505",
          color: "#f4f4f5",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#c47a4a",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 48, height: 2, backgroundColor: "#c47a4a" }} />
            <div>Ship It!</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <div>Input</div>
            <div style={{ color: "#a1a1aa" }}>→</div>
            <div>Development</div>
            <div style={{ color: "#a1a1aa" }}>→</div>
            <div>Validation</div>
            <div style={{ color: "#a1a1aa" }}>→</div>
            <div>Ship</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
          }}
        >
          <div
            style={{
              maxWidth: 560,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#d4d4d8",
            }}
          >
            The minimal software delivery framework.
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#c47a4a",
              letterSpacing: "0.02em",
            }}
          >
            shipitframe.work
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
