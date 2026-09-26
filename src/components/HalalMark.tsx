import { site } from "@/content/site";

/** A rubber-stamp "Halal · حلال" mark. Shown only because the owner confirmed it (site.facts.halal). */
export function HalalMark({ className = "" }: { className?: string }) {
  if (!site.facts.halal) return null;
  return (
    <span
      dir="ltr"
      className={`inline-flex -rotate-3 items-center gap-2 border-2 border-current px-3 py-1 outline outline-1 outline-offset-2 outline-current ${className}`}
    >
      <span className="font-[family-name:var(--font-courier)] text-[0.78rem] tracking-[0.2em] uppercase">Halal</span>
      <span aria-hidden="true" className="h-3 w-px bg-current opacity-60" />
      <span lang="ar" className="font-arabic text-[1.1rem] leading-none">
        حلال
      </span>
    </span>
  );
}
