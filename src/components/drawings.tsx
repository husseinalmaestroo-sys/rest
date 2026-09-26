/**
 * Line drawings in the manner of a bakery-bag stamp. Used inside photo
 * placeholders and as small marks next to labels. All drawn on a 120×120
 * grid, stroked in currentColor; `--draw-fill` lets overlapping shapes
 * occlude each other on a toned background.
 */

import type { ReactNode, SVGProps } from "react";

const scallops = Array.from({ length: 10 }, () => "q4.8 7 9.6 0").join(" ");

const drawings = {
  pita: (
    <>
      <path d="M48 40c-4-5 4-8 0-13M60 37c-4-5 4-8 0-13M72 40c-4-5 4-8 0-13" />
      <path d="M16 78v4c0 8 20 14 44 14s44-6 44-14v-4" />
      <ellipse cx="60" cy="78" rx="44" ry="14" />
      <path d="M20 62v4c0 7 18 13 40 13s40-6 40-13v-4" fill="var(--draw-fill)" />
      <ellipse cx="60" cy="62" rx="40" ry="13" fill="var(--draw-fill)" />
      <path d="M40 58c4-2.5 9-2.5 13 0M64 64c3-1.5 7-1.5 10 0M50 67c2-1 5-1 7 0M72 56c2-1 5-1 7 0" />
    </>
  ),
  cheesePie: (
    <>
      <path d="M12 64C30 42 90 42 108 64C90 86 30 86 12 64Z" />
      <path d="M30 64C44 53 76 53 90 64C76 75 44 75 30 64Z" />
      <path d="M12 64l-6-4M12 64l-6 4M108 64l6-4M108 64l6 4" />
      <circle cx="50" cy="62" r="1.8" fill="currentColor" />
      <circle cx="61" cy="67" r="1.8" fill="currentColor" />
      <circle cx="70" cy="61" r="1.8" fill="currentColor" />
      <circle cx="58" cy="59" r="1.2" fill="currentColor" />
      <path d="M22 56l2 1M34 48l1 2M86 48l-1 2M98 56l-2 1M34 80l1-2M86 80l-1-2" />
    </>
  ),
  spinachPie: (
    <>
      <path d="M60 22L104 94H16Z" strokeLinejoin="round" />
      <path d="M60 70V30M60 70L25 90M60 70L95 90" />
      <path d="M57 38l6 3M56 48l8 3M56 58l8 3M34 84l4-5M42 80l4-5M78 79l5 5M86 83l4 5" />
      <path d="M10 100h100" />
    </>
  ),
  pastry: (
    <>
      <path d="M8 96h104" />
      {[24, 60, 96].map((c) => (
        <g key={c}>
          <path d={`M${c} 36L${c + 18} 64L${c} 92L${c - 18} 64Z`} strokeLinejoin="round" />
          <path d={`M${c - 11} 53h22M${c - 17} 63h34M${c - 11} 74h22`} />
          <circle cx={c} cy={45} r="2.2" fill="currentColor" />
        </g>
      ))}
    </>
  ),
  bread: (
    <>
      <path d="M18 78C18 50 40 38 60 38S102 50 102 78C102 86 96 88 60 88S18 86 18 78Z" />
      <path d="M36 58c6-7 12-9 20-9M50 66c8-8 14-10 24-10M66 74c6-6 12-8 20-8" />
      <path d="M10 96h100" />
    </>
  ),
  jar: (
    <>
      <path d="M40 20h40v14H40z" />
      <path d="M44 26h32" />
      <path d="M42 34C30 40 28 48 28 58V92C28 98 34 102 40 102H80C86 102 92 98 92 92V58C92 48 90 40 78 34" />
      <path d="M34 58h52v28H34z" />
      <path d="M44 68h32M48 76h24" />
    </>
  ),
  basket: (
    <>
      <path d="M30 54C30 22 90 22 90 54" />
      <path d="M34 54a10 10 0 0 1 20 0" fill="var(--draw-fill)" />
      <path d="M54 54a13 13 0 0 1 26 0" fill="var(--draw-fill)" />
      <path d="M44 44c1-4 4-6 7-6M66 41c0-4 3-7 6-7" />
      <path d="M14 54h92l-10 42H24z" fill="var(--draw-fill)" />
      <path d="M20 66h80M23 78h74M34 54l4 42M60 54v42M86 54l-4 42" />
    </>
  ),
  container: (
    <>
      <path d="M46 34c-3-4 3-7 0-11M60 32c-3-4 3-7 0-11M74 34c-3-4 3-7 0-11" />
      <path d="M18 44h84l-4 12H22z" />
      <path d="M24 56h72l-6 38H30z" />
      <path d="M44 68h32v14H44z" />
      <path d="M50 75h20" />
    </>
  ),
  coffee: (
    <>
      <path d="M44 98C36 98 33 90 39 82C45 74 46 68 44 58H76C74 68 75 74 81 82C87 90 84 98 76 98Z" />
      <path d="M47 58C50 48 50 42 46 36H74C70 42 70 48 73 58" />
      <path d="M46 36C50 26 70 26 74 36" />
      <path d="M60 28v-6" />
      <circle cx="60" cy="19" r="3" />
      <path d="M44 64C30 60 22 50 16 36h6c6 10 12 16 22 18" />
      <path d="M75 44c16 0 18 26 5 34" />
      <path d="M10 104h100" />
    </>
  ),
  shawarma: (
    <>
      <path d="M58 6v108" />
      <path d="M40 104h36" />
      <path d="M36 22C34 44 40 76 48 98H68C76 76 82 44 80 22Z" fill="var(--draw-fill)" />
      <ellipse cx="58" cy="22" rx="22" ry="5" fill="var(--draw-fill)" />
      <path d="M37 36c6 3 11-2 17 1s11 2 17-1 7 1 9 0M38 50c6 3 10-2 16 1s11 2 16-1 7 1 9 0M41 64c5 3 9-2 14 1s10 2 14-1 6 1 7 0M44 78c4 2 8-1 12 1s9 2 12-1 4 0 5 0" />
      <path d="M86 44l18 44" strokeWidth="2.6" />
      <path d="M104 88l4 12" strokeWidth="4.5" />
    </>
  ),
  falafel: (
    <>
      <path d="M12 94h96" />
      <circle cx="60" cy="50" r="18" fill="var(--draw-fill)" />
      <circle cx="41" cy="74" r="18" fill="var(--draw-fill)" />
      <circle cx="79" cy="74" r="18" fill="var(--draw-fill)" />
      {[
        [54, 44], [64, 52], [58, 58], [68, 42], [36, 70], [46, 78], [40, 84], [74, 68], [84, 78], [78, 84], [88, 70],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.1" fill="currentColor" />
      ))}
    </>
  ),
  hummus: (
    <>
      <path d="M16 56C18 82 36 96 60 96S102 82 104 56" />
      <path d="M46 96l-2 6h32l-2-6" />
      <ellipse cx="60" cy="56" rx="44" ry="14" />
      <path d="M34 56c0-8 52-8 52 0s-40 8-38 0 22-6 22 0" />
      <ellipse cx="60" cy="56" rx="7" ry="2.2" fill="currentColor" />
      <circle cx="42" cy="52" r="1.2" fill="currentColor" />
      <circle cx="80" cy="58" r="1.2" fill="currentColor" />
      <circle cx="74" cy="51" r="1.2" fill="currentColor" />
    </>
  ),
  rice: (
    <>
      <ellipse cx="60" cy="80" rx="50" ry="14" />
      <ellipse cx="60" cy="78" rx="38" ry="9" />
      <path d="M28 76C30 54 48 42 60 42S90 54 92 76" fill="var(--draw-fill)" />
      <path d="M48 46C50 34 70 30 76 42C72 50 56 52 48 46Z" fill="var(--draw-fill)" />
      <path d="M58 40c2 3 3 6 2 9" />
      <path d="M38 64l3-1M46 58l3-1M52 68l3-1M64 60l3-1M72 70l3-1M80 62l3-1M44 72l3-1M60 74l3-1" />
    </>
  ),
  platter: (
    <>
      <path d="M4 92h112" />
      <path d="M50 52c0 9 20 9 20 0" fill="var(--draw-fill)" />
      <ellipse cx="60" cy="52" rx="10" ry="3" fill="var(--draw-fill)" />
      <ellipse cx="34" cy="78" rx="28" ry="7" fill="var(--draw-fill)" />
      <path d="M14 76c4-14 36-14 40 0" />
      <ellipse cx="86" cy="78" rx="28" ry="7" fill="var(--draw-fill)" />
      <path d="M66 76c3-12 17-16 22-10 5-6 16-2 18 10" />
      <path d="M26 66l2 4M36 64l1 4M44 67l-1 4M78 66v4M92 64l-1 4" />
    </>
  ),
  storefront: (
    <>
      <path d="M30 12h60v14H30z" />
      <path d="M38 19h44" />
      <path d="M8 30h104l-4 14H12z" />
      <path d={`M12 44 ${scallops}`} />
      <path d="M14 44v60h92V44" />
      <path d="M52 66h16v38H52zM20 58h26v30H20zM74 58h26v30H74z" />
      <path d="M4 104h112" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type DrawingName = keyof typeof drawings;

export function Drawing({
  name,
  strokeWidth = 1.6,
  ...props
}: { name: DrawingName; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {drawings[name]}
    </svg>
  );
}
