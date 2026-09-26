import type { Dict } from "@/content/i18n";
import { activeSeason, site, telHref } from "@/content/site";

/**
 * A seasonal notice for Ramadan and the Eids, shown only inside the date
 * windows set in content/site.ts. Hung like a paper banner under the header.
 */
export function SeasonBanner({ t }: { t: Dict }) {
  const season = activeSeason();
  if (!season) return null;
  const s = t.season[season];

  return (
    <aside aria-label={s.title} className="bg-olive text-paper">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-4 px-4 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          {/* Crescent and star, cut from paper. */}
          <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0 text-wheat" aria-hidden="true">
            <path d="M30 6a18 18 0 1 0 12 30A15 15 0 1 1 30 6Z" fill="currentColor" />
            <path d="M36 13l1.6 3.8 4 .3-3 2.6.9 4-3.5-2.1-3.5 2.1.9-4-3-2.6 4-.3Z" fill="currentColor" />
          </svg>
          <div>
            <p className="accent text-[2rem] leading-none text-wheat">{s.title}</p>
            <p className="mt-2 max-w-[60ch] text-paper/85">{s.body}</p>
          </div>
        </div>
        <a
          href={telHref}
          className="label inline-flex h-12 shrink-0 items-center gap-3 self-start border border-paper/60 px-5 hover:bg-paper hover:text-olive md:self-auto"
        >
          {s.cta} <span dir="ltr">{site.phone.display}</span>
        </a>
      </div>
    </aside>
  );
}
