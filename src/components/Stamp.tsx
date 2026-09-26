import { Drawing, type DrawingName } from "./drawings";

/**
 * A round rubber stamp, like the one on a bakery bag. Printed at an angle
 * with multiply blending so it sits *in* the paper rather than on it.
 */
export function Stamp({
  id,
  text,
  drawing = "bread",
  className = "",
}: {
  /** Unique per page — names the circular text path. */
  id: string;
  text: string;
  drawing?: DrawingName;
  className?: string;
}) {
  return (
    <div className={`aspect-square mix-blend-multiply ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <defs>
          <path id={id} d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="56" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <text
          fill="currentColor"
          style={{ fontFamily: "var(--font-label)", fontSize: 15.5, letterSpacing: "0.2em", textTransform: "uppercase" }}
        >
          <textPath href={`#${id}`} textLength="455">
            {text}
          </textPath>
        </text>
      </svg>
      <Drawing name={drawing} className="absolute inset-[31%]" strokeWidth={2.2} />
    </div>
  );
}
