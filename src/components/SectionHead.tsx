/**
 * The small running head above each section, like a magazine folio:
 * "p. 02 ———— The Bakery". Not a card, not a pill — just a rule and a label.
 */
export function Folio({
  prefix,
  page,
  title,
  tone = "ink",
}: {
  prefix: string;
  page: string;
  title: string;
  tone?: "ink" | "paper";
}) {
  const muted = tone === "paper" ? "text-paper/70" : "text-ink-soft";
  return (
    <div className={`label flex items-center gap-4 ${muted}`} data-reveal="slide">
      <span className={tone === "paper" ? "text-wheat" : "text-paprika"}>
        {prefix} {page}
      </span>
      <span className={`h-px flex-1 ${tone === "paper" ? "bg-paper/25" : "bg-rule"}`} aria-hidden="true" />
      <span>{title}</span>
    </div>
  );
}
