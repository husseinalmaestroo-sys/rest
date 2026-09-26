import { directionsHref, site, telHref } from "@/content/site";

/**
 * Phones only: the two things people come to the site for, always within
 * thumb reach. Sits like a ticket stub along the bottom edge.
 */
export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-paper pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="grid grid-cols-[1.4fr_1fr]">
        <a href={telHref} className="flex h-16 flex-col items-center justify-center bg-ink text-paper active:bg-paprika">
          <span className="label text-[0.66rem] text-paper/70">Order / Call</span>
          <span className="font-editorial text-lg leading-tight tabular-nums">{site.phone.display}</span>
        </a>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="label flex h-16 items-center justify-center border-l-2 border-dashed border-ink/40 active:text-paprika"
        >
          Directions →
        </a>
      </div>
    </div>
  );
}
