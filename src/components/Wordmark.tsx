/**
 * The name, set like a shop sign: "Market" and "Bakery" in the display
 * serif, the ampersand in paprika italic — the one flourish we allow.
 */
export function Wordmark({ className = "", as: Tag = "span" }: { className?: string; as?: "span" | "p" }) {
  return (
    <Tag className={`display inline-flex items-baseline whitespace-nowrap ${className}`}>
      <span>Orland Market</span>
      <span className="mx-[0.18em] font-editorial text-[1.12em] font-normal italic text-paprika" aria-hidden="true">
        &amp;
      </span>
      <span className="sr-only"> and </span>
      <span>Bakery</span>
    </Tag>
  );
}
