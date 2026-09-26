import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — a little taste of home, right here in Orland Park.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const youngSerif = await readFile(
    join(process.cwd(), "node_modules/@fontsource/young-serif/files/young-serif-latin-400-normal.woff"),
  );

  const paper = "#f2eadb";
  const ink = "#231a13";
  const paprika = "#a63b25";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: paper,
          color: ink,
          padding: "56px 64px",
          fontFamily: "Young Serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: `2px solid ${ink}`,
            paddingBottom: 14,
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>Market · Bakery · Kitchen · Catering</span>
          <span style={{ color: paprika }}>No. 9005</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 80, lineHeight: 1, letterSpacing: -2 }}>
          <span>A little taste of home,</span>
          <span>
            right here in <span style={{ color: paprika, marginLeft: 22 }}>Orland Park.</span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid ${ink}`,
            paddingTop: 18,
          }}
        >
          <span style={{ fontSize: 40 }}>
            Orland Market <span style={{ color: paprika, margin: "0 12px" }}>&amp;</span> Bakery
          </span>
          <span style={{ fontSize: 24 }}>9005 151st St · 708-949-8890</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Young Serif", data: youngSerif, style: "normal", weight: 400 }],
    },
  );
}
