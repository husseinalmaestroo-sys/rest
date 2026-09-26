/**
 * Colour illustrations in the manner of printed bakery packaging. They stand
 * in for photography until the shop's own photos are added (see
 * content/photos.ts). Drawn on a 120×120 grid in painter's order: shadow,
 * then shapes back to front. Colours are CSS custom properties (see `.illus`
 * in globals.css); `mono` turns an illustration back into a one-colour stamp.
 */

import type { ReactNode, SVGProps } from "react";

const f = (name: string) => `var(--f-${name})`;
const scallops = Array.from({ length: 10 }, () => "q4.8 7 9.6 0").join(" ");

function Shadow({ cy, rx, ry = 5 }: { cy: number; rx: number; ry?: number }) {
  return <ellipse cx="60" cy={cy} rx={rx} ry={ry} fill={f("shadow")} stroke="none" />;
}

function Steam({ y = 40 }: { y?: number }) {
  return (
    <path
      d={`M48 ${y}c-4-5 4-8 0-13M60 ${y - 3}c-4-5 4-8 0-13M72 ${y}c-4-5 4-8 0-13`}
      opacity="0.55"
    />
  );
}

const drawings = {
  pita: (
    <>
      <Shadow cy={95} rx={50} ry={7} />
      <Steam y={38} />
      <path d="M16 78v4c0 8 20 14 44 14s44-6 44-14v-4Z" fill={f("crust")} />
      <ellipse cx="60" cy="78" rx="44" ry="14" fill={f("bread")} />
      <path d="M20 62v4c0 7 18 13 40 13s40-6 40-13v-4Z" fill={f("crust")} />
      <ellipse cx="60" cy="62" rx="40" ry="13" fill={f("bread")} />
      <g fill={f("toast")} stroke="none">
        <ellipse cx="45" cy="59" rx="5.5" ry="1.8" />
        <ellipse cx="70" cy="65" rx="4.5" ry="1.5" />
        <ellipse cx="79" cy="58" rx="3" ry="1.2" />
        <ellipse cx="54" cy="67" rx="3" ry="1.1" />
        <ellipse cx="62" cy="55" rx="2.5" ry="0.9" />
      </g>
      <path d="M40 58c4-2.5 9-2.5 13 0M64 64c3-1.5 7-1.5 10 0M50 67c2-1 5-1 7 0M72 56c2-1 5-1 7 0" />
    </>
  ),
  cheesePie: (
    <>
      <Shadow cy={84} rx={52} ry={6} />
      <path d="M12 64C30 42 90 42 108 64C90 86 30 86 12 64Z" fill={f("crust")} />
      <path d="M12 64l-6-4M12 64l-6 4M108 64l6-4M108 64l6 4" />
      <path d="M30 64C44 53 76 53 90 64C76 75 44 75 30 64Z" fill={f("cheese")} />
      <g fill={f("toast")} stroke="none">
        <circle cx="50" cy="62" r="2.2" />
        <circle cx="61" cy="67" r="1.8" />
        <circle cx="70" cy="61" r="2" />
        <circle cx="57" cy="59" r="1.2" />
      </g>
      <g fill={f("line")} stroke="none">
        <circle cx="24" cy="58" r="0.9" />
        <circle cx="34" cy="51" r="0.9" />
        <circle cx="86" cy="51" r="0.9" />
        <circle cx="96" cy="58" r="0.9" />
        <circle cx="36" cy="77" r="0.9" />
        <circle cx="84" cy="77" r="0.9" />
      </g>
    </>
  ),
  spinachPie: (
    <>
      <Shadow cy={97} rx={48} ry={5} />
      <path d="M60 22L104 94H16Z" fill={f("crust")} strokeLinejoin="round" />
      <path d="M60 70V30M60 70L25 90M60 70L95 90" />
      <path d="M52 78c5-5 11-5 16 0-5 4-11 4-16 0Z" fill={f("green")} />
      <path d="M55 78h10" stroke={f("greenDark")} />
      <path d="M57 38l6 3M56 48l8 3M56 58l8 3M34 84l4-5M42 80l4-5M78 79l5 5M86 83l4 5" />
    </>
  ),
  pastry: (
    <>
      <Shadow cy={98} rx={56} ry={5} />
      <path d="M4 90h112v6H4z" fill={f("metal")} />
      {[24, 60, 96].map((c) => (
        <g key={c}>
          <path d={`M${c} 36L${c + 18} 64L${c} 90L${c - 18} 64Z`} fill={f("gold")} strokeLinejoin="round" />
          <path d={`M${c - 11} 53h22M${c - 17} 63h34M${c - 11} 74h22`} stroke={f("toast")} />
          <circle cx={c} cy={46} r="3.4" fill={f("pistachio")} />
        </g>
      ))}
    </>
  ),
  bread: (
    <>
      <Shadow cy={90} rx={48} ry={6} />
      <path d="M18 78C18 50 40 38 60 38S102 50 102 78C102 86 96 88 60 88S18 86 18 78Z" fill={f("crust")} />
      <path d="M36 58c6-7 12-9 20-9M50 66c8-8 14-10 24-10M66 74c6-6 12-8 20-8" stroke={f("bread")} strokeWidth="5" />
      <path d="M36 58c6-7 12-9 20-9M50 66c8-8 14-10 24-10M66 74c6-6 12-8 20-8" />
      <g fill={f("cream")} stroke="none" opacity="0.7">
        <circle cx="30" cy="70" r="0.8" />
        <circle cx="84" cy="54" r="0.8" />
        <circle cx="92" cy="72" r="0.8" />
        <circle cx="44" cy="46" r="0.8" />
      </g>
    </>
  ),
  jar: (
    <>
      <Shadow cy={104} rx={38} ry={4} />
      <path d="M42 34C30 40 28 48 28 58V92C28 98 34 102 40 102H80C86 102 92 98 92 92V58C92 48 90 40 78 34Z" fill={f("glass")} />
      <g fill={f("olive")}>
        {[[38, 50], [50, 46], [64, 50], [78, 47], [44, 94], [58, 96], [72, 93], [84, 90]].map(([x, y]) => (
          <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="6" ry="4.5" />
        ))}
      </g>
      <path d="M34 58h52v28H34z" fill={f("cream")} />
      <path d="M44 68h32" stroke={f("red")} strokeWidth="2.4" />
      <path d="M48 76h24" />
      <path d="M40 20h40v14H40z" fill={f("red")} />
      <path d="M44 26h32" />
    </>
  ),
  basket: (
    <>
      <Shadow cy={98} rx={48} ry={5} />
      <path d="M30 54C30 22 90 22 90 54" stroke={f("wood")} strokeWidth="4" />
      <path d="M30 54C30 22 90 22 90 54" />
      <path d="M32 54a11 11 0 0 1 22 0Z" fill={f("red")} />
      <path d="M54 54a13 13 0 0 1 26 0Z" fill={f("green")} />
      <path d="M72 54a10 10 0 0 1 20 0Z" fill={f("red")} />
      <path d="M43 43c1-4 4-6 7-6M66 41c0-4 3-7 6-7" stroke={f("greenDark")} strokeWidth="2" />
      <path d="M14 54h92l-10 42H24z" fill={f("wood")} />
      <path d="M20 66h80M23 78h74M34 54l4 42M60 54v42M86 54l-4 42" stroke={f("toast")} />
      <path d="M14 54h92l-10 42H24z" />
    </>
  ),
  container: (
    <>
      <Shadow cy={96} rx={42} ry={5} />
      <Steam y={34} />
      <path d="M24 56h72l-6 38H30z" fill={f("tahini")} />
      <path d="M40 70c6-4 14-4 20 0s14 4 20 0" stroke={f("toast")} />
      <path d="M18 44h84l-4 12H22z" fill={f("cream")} />
      <path d="M44 72h32v14H44z" fill={f("cream")} />
      <path d="M50 79h20" stroke={f("red")} strokeWidth="2.2" />
    </>
  ),
  coffee: (
    <>
      <Shadow cy={101} rx={46} ry={5} />
      <path d="M75 44c16 0 18 26 5 34" stroke={f("gold")} strokeWidth="4" />
      <path d="M75 44c16 0 18 26 5 34" />
      <path d="M44 64C30 60 22 50 16 36h6c6 10 12 16 22 18Z" fill={f("gold")} />
      <path d="M44 98C36 98 33 90 39 82C45 74 46 68 44 58H76C74 68 75 74 81 82C87 90 84 98 76 98Z" fill={f("gold")} />
      <path d="M47 58C50 48 50 42 46 36H74C70 42 70 48 73 58Z" fill={f("gold")} />
      <path d="M46 36C50 26 70 26 74 36Z" fill={f("gold")} />
      <path d="M60 28v-6" />
      <circle cx="60" cy="19" r="3" fill={f("gold")} />
      <path d="M40 84c10 3 30 3 40 0" stroke={f("toast")} />
      <path d="M92 88h16l-2 10H94z" fill={f("cream")} />
    </>
  ),
  shawarma: (
    <>
      <Shadow cy={108} rx={36} ry={4} />
      <path d="M58 6v108" stroke={f("metal")} strokeWidth="3" />
      <path d="M58 6v108" />
      <path d="M36 22C34 44 40 76 48 98H68C76 76 82 44 80 22Z" fill={f("meatLight")} />
      <path
        d="M37 36c6 3 11-2 17 1s11 2 17-1 7 1 9 0M38 50c6 3 10-2 16 1s11 2 16-1 7 1 9 0M41 64c5 3 9-2 14 1s10 2 14-1 6 1 7 0M44 78c4 2 8-1 12 1s9 2 12-1 4 0 5 0"
        stroke={f("meat")}
        strokeWidth="2.6"
      />
      <ellipse cx="58" cy="22" rx="22" ry="5" fill={f("meat")} />
      <path d="M40 104h36" stroke={f("metal")} strokeWidth="3" />
      <path d="M86 44l4-2 18 44-4 2Z" fill={f("metal")} />
      <path d="M104 88l4 12" stroke={f("wood")} strokeWidth="5" />
    </>
  ),
  falafel: (
    <>
      <Shadow cy={96} rx={50} ry={6} />
      <ellipse cx="60" cy="92" rx="46" ry="6" fill={f("tahini")} />
      <circle cx="60" cy="50" r="18" fill={f("falafel")} />
      <circle cx="41" cy="74" r="18" fill={f("falafel")} />
      <circle cx="79" cy="74" r="18" fill={f("falafel")} />
      <g fill={f("gold")} stroke="none">
        {[[54, 44], [64, 52], [58, 58], [68, 42], [36, 70], [46, 78], [40, 84], [74, 68], [84, 78], [78, 84], [88, 70], [50, 50], [32, 78]].map(
          ([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" />
          ),
        )}
      </g>
      <path d="M96 60c6-6 12-6 16-2-5 5-11 6-16 2Z" fill={f("green")} />
    </>
  ),
  hummus: (
    <>
      <Shadow cy={103} rx={46} ry={5} />
      <path d="M46 96l-2 6h32l-2-6Z" fill={f("bowl")} />
      <path d="M16 56C18 82 36 96 60 96S102 82 104 56Z" fill={f("bowl")} />
      <ellipse cx="60" cy="56" rx="44" ry="14" fill={f("bowlRim")} />
      <ellipse cx="60" cy="56" rx="38" ry="11" fill={f("tahini")} />
      <path d="M34 56c0-8 52-8 52 0s-40 8-38 0 22-6 22 0" stroke={f("crust")} />
      <ellipse cx="60" cy="56" rx="8" ry="2.6" fill={f("oil")} stroke="none" />
      <g fill={f("red")} stroke="none">
        <circle cx="42" cy="52" r="1.5" />
        <circle cx="80" cy="58" r="1.5" />
        <circle cx="74" cy="51" r="1.5" />
        <circle cx="48" cy="61" r="1.2" />
      </g>
      <g fill={f("bread")}>
        <circle cx="52" cy="54" r="2.3" />
        <circle cx="68" cy="59" r="2.3" />
        <circle cx="64" cy="52" r="2.1" />
      </g>
      <path d="M86 50c4-4 8-4 10-1-3 3-7 4-10 1Z" fill={f("green")} />
    </>
  ),
  rice: (
    <>
      <Shadow cy={92} rx={52} ry={6} />
      <ellipse cx="60" cy="80" rx="50" ry="14" fill={f("plate")} />
      <ellipse cx="60" cy="78" rx="38" ry="9" fill={f("plateIn")} />
      <path d="M28 76C30 54 48 42 60 42S90 54 92 76Z" fill={f("rice")} />
      <path d="M38 64l3-1M46 58l3-1M52 68l3-1M64 60l3-1M72 70l3-1M80 62l3-1M44 72l3-1M60 74l3-1" stroke={f("gold")} />
      <path d="M46 46C48 32 72 28 78 42C72 52 54 54 46 46Z" fill={f("meat")} />
      <path d="M58 40c2 3 3 6 2 9" stroke={f("meatLight")} strokeWidth="2" />
      <g fill={f("cheese")}>
        <ellipse cx="40" cy="58" rx="3" ry="1.4" transform="rotate(-20 40 58)" />
        <ellipse cx="84" cy="66" rx="3" ry="1.4" transform="rotate(25 84 66)" />
        <ellipse cx="70" cy="56" rx="2.6" ry="1.2" />
      </g>
      <g fill={f("green")} stroke="none">
        <circle cx="52" cy="58" r="1.4" />
        <circle cx="76" cy="62" r="1.4" />
        <circle cx="62" cy="66" r="1.2" />
      </g>
    </>
  ),
  platter: (
    <>
      <path d="M2 88h116v18H2z" fill={f("cloth")} stroke="none" />
      <path d="M2 88h116" />
      <path d="M50 52c0 9 20 9 20 0Z" fill={f("bowl")} />
      <ellipse cx="60" cy="52" rx="10" ry="3" fill={f("tahini")} />
      <ellipse cx="34" cy="78" rx="28" ry="7" fill={f("metal")} />
      <path d="M14 76c4-14 36-14 40 0Z" fill={f("rice")} />
      <path d="M26 68c3-5 9-6 12-3-3 4-8 5-12 3ZM36 66c3-4 8-4 10-1" fill={f("meat")} />
      <ellipse cx="86" cy="78" rx="28" ry="7" fill={f("metal")} />
      <path d="M66 76c3-12 17-16 22-10 5-6 16-2 18 10Z" fill={f("green")} />
      <g fill={f("red")} stroke="none">
        <circle cx="78" cy="70" r="2" />
        <circle cx="90" cy="68" r="2" />
        <circle cx="98" cy="72" r="1.8" />
      </g>
      <ellipse cx="60" cy="96" rx="14" ry="4" fill={f("bread")} />
    </>
  ),
  storefront: (
    <>
      <path d="M14 44v60h92V44Z" fill={f("cream")} />
      <path d="M20 58h26v30H20zM74 58h26v30H74z" fill={f("glass")} />
      <path d="M52 66h16v38H52z" fill={f("wood")} />
      <path d="M30 12h60v14H30z" fill={f("cream")} />
      <path d="M38 19h44" stroke={f("red")} strokeWidth="2.4" />
      <path d="M8 30h104l-4 14H12z" fill={f("red")} />
      <path d={`M12 44 ${scallops}Z`} fill={f("red")} />
      <path d="M4 104h112" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type DrawingName = keyof typeof drawings;

export function Drawing({
  name,
  strokeWidth = 1.6,
  mono = false,
  className = "",
  ...props
}: { name: DrawingName; strokeWidth?: number; mono?: boolean } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="var(--f-line)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`illus ${mono ? "illus-mono" : ""} ${className}`}
      {...props}
    >
      {drawings[name]}
    </svg>
  );
}
