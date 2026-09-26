import { customerQuotes } from "@/content/copy";
import { reviewsHref, site } from "@/content/site";

/** Four full stars and a fifth filled to the decimal (4.6 → 60%). */
function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-1 text-paprika" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <svg key={i} viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7">
            <defs>
              <clipPath id={`star-fill-${i}`}>
                <rect x="0" y="0" width={24 * fill} height="24" />
              </clipPath>
            </defs>
            <path d={STAR} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <path d={STAR} fill="currentColor" clipPath={`url(#star-fill-${i})`} />
          </svg>
        );
      })}
    </span>
  );
}

const STAR = "M12 2.8l2.7 6 6.5.6-4.9 4.4 1.4 6.4L12 16.9 6.3 20.2l1.4-6.4L2.8 9.4l6.5-.6z";

/**
 * Social proof as a newspaper clipping, not a testimonial carousel.
 * Real quotes (from content/copy.ts) appear as pinned cuttings beside it;
 * none are invented.
 */
export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="mx-auto max-w-[92rem] px-4 pt-24 sm:px-8 lg:pt-36">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        {/* The clipping */}
        <article className="relative col-span-12 bg-[#f7f1e4] px-5 py-7 shadow-[0_1px_0_rgb(35_26_19/0.1),0_18px_36px_-28px_rgb(35_26_19/0.6)] sm:px-10 sm:py-10 lg:col-span-8 lg:-rotate-[0.6deg]" data-reveal="up">
          <div className="border-b-2 border-ink pb-2">
            <div className="label flex justify-between text-ink-soft">
              <span>Orland Park, Ill.</span>
              <span>Local</span>
            </div>
          </div>
          <div className="mt-[3px] border-t border-ink" />

          <h2 id="reviews-title" className="display mt-6 text-[clamp(2.8rem,7.4vw,6.8rem)] leading-[0.9]">
            Loved by the neighborhood.
          </h2>

          <div className="mt-8 grid gap-8 border-t border-rule pt-6 sm:grid-cols-[auto_1fr] sm:gap-10">
            {/* The number, set as big as a headline figure. */}
            <div className="sm:border-r sm:border-rule sm:pr-10">
              <p className="flex items-end gap-2 leading-none">
                <span className="display text-[6.5rem] sm:text-[8.5rem]">{site.rating.value}</span>
                <span className="mb-3 font-editorial text-2xl italic text-ink-soft">/ {site.rating.outOf}</span>
              </p>
              <div className="mt-3">
                <Stars value={Number(site.rating.value)} />
                <span className="sr-only">
                  Rated {site.rating.value} out of {site.rating.outOf}
                </span>
              </div>
              <p className="label mt-3">From {site.rating.count} reviews</p>
            </div>

            <div className="font-editorial text-[1.12rem] leading-[1.55] sm:columns-2 sm:gap-8 [&>p+p]:mt-4">
              <p className="first-letter:float-left first-letter:mr-1.5 first-letter:font-display first-letter:text-[3.3em] first-letter:leading-[0.82]">
                Four point six stars, across more than three hundred reviews — written by the people who stop in
                for bread on the way home, pick up dinner at the counter, and order trays for the family table.
              </p>
              <p>
                We&rsquo;d rather let them do the talking. Read what they have to say, and if you&rsquo;ve been in
                lately, add a few words of your own.
              </p>
              <p>
                <a href={reviewsHref} className="label link-ink text-paprika" target="_blank" rel="noopener noreferrer">
                  Read the reviews →
                </a>
              </p>
            </div>
          </div>
        </article>

        {/* Pinned cuttings: real quotes if we have them, otherwise a note. */}
        <div className="col-span-12 flex flex-col gap-8 sm:flex-row lg:col-span-4 lg:flex-col lg:pt-16">
          {customerQuotes.length > 0 ? (
            customerQuotes.slice(0, 3).map((q, i) => (
              <figure
                key={q.quote}
                className={`relative bg-[#f7f1e4] p-6 shadow-[0_14px_28px_-24px_rgb(35_26_19/0.7)] ${
                  ["rotate-[1.5deg]", "-rotate-[1deg] lg:ml-8", "rotate-[0.6deg]"][i]
                }`}
                data-reveal="up"
              >
                <span aria-hidden="true" className="absolute -top-2 left-6 h-4 w-4 rounded-full bg-paprika shadow" />
                <blockquote className="font-editorial text-[1.3rem] leading-snug italic">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="label mt-4 text-ink-soft">
                  — {q.name}, via {q.source}
                </figcaption>
              </figure>
            ))
          ) : (
            <div className="relative max-w-sm rotate-[2deg] bg-[#fbf6ec] p-7 shadow-[0_14px_28px_-24px_rgb(35_26_19/0.7)] lg:ml-6" data-reveal="up">
              <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-wheat/60 mix-blend-multiply" />
              <p className="hand text-[2.3rem] leading-[0.95] text-ink">Been in lately? Tell the neighborhood.</p>
              <a
                href={reviewsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="label mt-5 inline-block link-ink text-paprika"
              >
                Leave a review →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
