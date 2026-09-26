import { cateringOccasions } from "@/content/copy";
import { photos } from "@/content/photos";
import { site, telHref } from "@/content/site";
import { Photo } from "../Photo";
import { Folio } from "../SectionHead";

/**
 * Catering is written like a recipe card left on the counter — handwritten
 * title, the occasions ticked off, and a short "method" for getting in
 * touch. The warmest, most personal part of the page.
 */
export function Catering() {
  return (
    <section id="catering" aria-labelledby="catering-title" className="overflow-x-clip bg-paper-deep">
      <div className="mx-auto max-w-[92rem] px-4 pt-16 pb-24 sm:px-8 lg:pt-24 lg:pb-36">
        <Folio page="04" title="Catering" />

        <h2
          id="catering-title"
          className="display mt-10 max-w-[16ch] text-[clamp(2.9rem,7vw,6.8rem)] lg:mt-14"
          data-reveal="up"
        >
          For tables worth <span className="font-editorial italic text-paprika">gathering</span> around.
        </h2>

        <div className="mt-12 grid grid-cols-12 gap-x-6 lg:mt-16">
          {/* The spread */}
          <figure className="col-span-12 -mx-4 sm:mx-0 lg:col-span-8 lg:col-start-1 lg:row-start-1">
            <div data-reveal="image">
              <Photo
                slot={photos.cateringTable}
                sizes="(min-width: 1024px) 66vw, 100vw"
                briefAt="top"
                className="deckle aspect-[4/3] w-full lg:aspect-[3/2]"
                drawingClassName="w-[58%] max-w-[28rem]"
              />
            </div>
            <figcaption className="label mt-3 px-4 text-ink-soft sm:px-0">Fig. 4 — Set out for the whole family</figcaption>
          </figure>

          {/* The recipe card */}
          <div className="relative z-10 col-span-12 -mt-16 sm:col-span-10 sm:col-start-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-28">
            <article
              aria-label="How catering works"
              className="relative rotate-[0.6deg] bg-[#fbf6ec] lg:rotate-[1.2deg] px-6 pt-7 pb-8 shadow-[0_1px_0_rgb(35_26_19/0.12),0_22px_40px_-26px_rgb(35_26_19/0.55)] sm:px-9"
              style={{
                backgroundImage:
                  "linear-gradient(transparent 0, transparent 2.35rem, rgb(176 65 42 / 0.55) 2.35rem, rgb(176 65 42 / 0.55) calc(2.35rem + 1px), transparent calc(2.35rem + 1px)), repeating-linear-gradient(transparent 0 calc(2.2rem - 1px), rgb(70 110 150 / 0.2) calc(2.2rem - 1px) 2.2rem)",
                backgroundPosition: "0 0, 0 4.55rem",
              }}
            >
              {/* A strip of tape holding the card down. */}
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-3 bg-wheat/60 mix-blend-multiply"
              />
              <p className="label flex justify-between text-ink-soft">
                <span>From the kitchen of</span>
                <span className="hidden sm:inline">Card no. 04</span>
              </p>
              <p className="hand mt-3 text-[2.5rem] leading-[2.2rem] text-paprika">Catering, for a crowd</p>

              <p className="label mt-7 text-ink-soft">Good for</p>
              <ul className="mt-1">
                {cateringOccasions.map((o) => (
                  <li key={o} className="flex h-[2.2rem] items-center gap-3">
                    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-paprika" aria-hidden="true">
                      <path d="M3 11l4 4 10-11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="hand text-[1.85rem] leading-none text-ink">{o}</span>
                  </li>
                ))}
              </ul>

              <p className="label mt-6 text-ink-soft">Method</p>
              <p className="mt-2 font-editorial text-[1.15rem] leading-[2.2rem]">
                Call the shop with the date, roughly how many guests, and what you&rsquo;re celebrating. We&rsquo;ll
                talk through the food from there.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={telHref}
                  className="label inline-flex h-14 items-center justify-center bg-paprika px-6 text-paper transition-colors hover:bg-paprika-deep"
                >
                  Ask about catering
                </a>
                <a href={telHref} className="font-editorial text-lg tabular-nums link-ink self-start sm:self-auto">
                  {site.phone.display}
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
