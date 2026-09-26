import { directionsHref, fullAddress, mapEmbedSrc, site, telHref } from "@/content/site";
import { Folio } from "../SectionHead";

/**
 * "Come find us": the street sign you'll actually see, the address set big,
 * and a map printed into the page (toned to match the paper).
 */
export function Location() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="mx-auto max-w-[92rem] px-4 pt-24 pb-24 sm:px-8 lg:pt-36 lg:pb-32">
      <Folio page="06" title="Visit" />

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-12 lg:mt-14">
        <div className="col-span-12 lg:col-span-5">
          <h2 id="visit-title" className="display text-[clamp(3.2rem,5.6vw,6.2rem)]" data-reveal="up">
            Come <span className="font-editorial italic text-paprika">find</span> us.
          </h2>

          {/* Street sign — the green blade on the pole outside. */}
          <div className="mt-10 inline-flex -rotate-[1.5deg] flex-col items-stretch" aria-hidden="true" data-reveal="slide">
            <div className="flex items-stretch border-2 border-paper bg-olive text-paper shadow-[0_0_0_2px_var(--color-olive)]">
              <span className="flex items-center border-r-2 border-paper px-3 font-sans text-sm font-bold tracking-wider">
                9005
              </span>
              <span className="px-5 py-2 font-sans text-[2rem] font-bold leading-none tracking-wide sm:text-[2.4rem]">
                151<sup className="text-[0.5em]">st</sup> St
              </span>
            </div>
            <span className="mx-auto h-10 w-1.5 bg-ink/70" />
          </div>

          <address className="mt-6 not-italic">
            <p className="display text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.05]">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
          </address>

          <dl className="mt-8 grid grid-cols-[6.5rem_1fr] gap-y-3 border-t border-ink pt-5">
            <dt className="label pt-1 text-ink-soft">Phone</dt>
            <dd>
              <a href={telHref} className="font-editorial text-xl tabular-nums link-ink">
                {site.phone.display}
              </a>
            </dd>
            <dt className="label pt-1 text-ink-soft">Hours</dt>
            <dd className="font-editorial text-lg">
              {site.hours ? (
                <ul>
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex gap-3">
                      <span className="w-24">{h.days}</span>
                      <span>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="italic text-ink-soft">Call for today&rsquo;s hours</span>
              )}
            </dd>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex h-14 items-center bg-ink px-6 text-paper transition-colors hover:bg-paprika"
            >
              Get directions →
            </a>
            <a href={telHref} className="label inline-flex h-14 items-center border border-ink px-6 hover:border-paprika hover:text-paprika">
              Call ahead
            </a>
          </div>
        </div>

        {/* The map, framed like a folded street map tucked into the page. */}
        <figure className="col-span-12 -mx-4 sm:mx-0 lg:col-span-7 lg:mt-6">
          <div className="relative border-y-2 border-ink bg-paper-deep p-2 sm:border-2" data-reveal="image">
            <iframe
              title={`Map showing ${site.name} at ${fullAddress}`}
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/5] w-full border-0 [filter:grayscale(0.55)_sepia(0.28)_contrast(0.96)] sm:aspect-[4/3]"
            />
            {/* Fold lines */}
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-2 left-1/3 w-px bg-ink/10" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-2 left-2/3 w-px bg-ink/10" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-2 top-1/2 h-px bg-ink/10" />
          </div>
          <figcaption className="label mt-3 flex justify-between gap-4 px-4 text-ink-soft sm:px-0">
            <span>
              Fig. 6 — 151st St<span className="hidden sm:inline">, Orland Park</span>
            </span>
            <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="link-ink">
              Open in Maps
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
