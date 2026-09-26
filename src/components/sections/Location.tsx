import type { Dict } from "@/content/i18n";
import { directionsHref, mapEmbedSrc, site, telHref } from "@/content/site";
import { HoursList, OpenNow } from "../Hours";
import { MaybeLink } from "../MaybeLink";
import { Folio } from "../SectionHead";

const onlineLabels = { doordash: "DoorDash", ubereats: "Uber Eats", grubhub: "Grubhub" } as const;

export function orderOnlineLinks() {
  return (Object.keys(onlineLabels) as (keyof typeof onlineLabels)[])
    .map((k) => ({ label: onlineLabels[k] as string, href: site.orderOnline[k] as string | null }))
    .filter((l): l is { label: string; href: string } => Boolean(l.href));
}

/**
 * "Come find us": the street sign, the address set big, and a map printed
 * into the page (toned to match the paper).
 */
export function Location({ t }: { t: Dict }) {
  const l = t.location;
  const online = orderOnlineLinks();

  return (
    <section id="visit" aria-labelledby="visit-title" className="mx-auto max-w-[92rem] px-4 pt-24 pb-24 sm:px-8 lg:pt-36 lg:pb-32">
      <Folio prefix={t.page} page="07" title={l.folio} />

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-12 lg:mt-14">
        <div className="col-span-12 lg:col-span-5">
          <h2 id="visit-title" className="display text-[clamp(3.2rem,5.6vw,6.2rem)]" data-reveal="up">
            {l.titlePre} <span className="accent text-paprika">{l.titleEm}</span>
            {l.titlePost === "." ? "." : ` ${l.titlePost}`}
          </h2>

          {/* Street sign, in the style of the green blades on the poles. */}
          <div dir="ltr" className="mt-10 inline-flex -rotate-[1.5deg] flex-col items-stretch" aria-hidden="true" data-reveal="slide">
            <div className="flex items-stretch border-2 border-paper bg-olive text-paper shadow-[0_0_0_2px_var(--color-olive)]">
              <span className="flex items-center border-r-2 border-paper px-3 font-[Alegreya_Sans,sans-serif] text-sm font-bold tracking-wider">
                9005
              </span>
              <span className="px-5 py-2 font-[Alegreya_Sans,sans-serif] text-[2rem] font-bold leading-none tracking-wide sm:text-[2.4rem]">
                151<sup className="text-[0.5em]">st</sup> St
              </span>
            </div>
            <span className="mx-auto h-10 w-1.5 bg-ink/70" />
          </div>

          <address className="mt-6 not-italic">
            <p className="display text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.05]">
              {t.header.streetLine}
              <br />
              {t.header.cityLine} {site.address.postalCode}
            </p>
          </address>

          <dl className="mt-8 grid grid-cols-[6.5rem_1fr] gap-y-3 border-t border-ink pt-5">
            <dt className="label pt-1 text-ink-soft">{l.phone}</dt>
            <dd>
              <a href={telHref} dir="ltr" className="font-editorial text-xl tabular-nums link-ink">
                {site.phone.display}
              </a>
            </dd>
            <dt className="label pt-1 text-ink-soft">{l.hours}</dt>
            <dd className="font-editorial text-lg">
              {site.hours ? (
                <>
                  <OpenNow locale={t.locale} className="mb-2" />
                  <HoursList locale={t.locale} className="max-w-xs space-y-0.5" />
                </>
              ) : (
                <span className="italic text-ink-soft">{l.callHours}</span>
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
              {l.directions} {t.arrow}
            </a>
            <a href={telHref} className="label inline-flex h-14 items-center border border-ink px-6 hover:border-paprika hover:text-paprika">
              {l.callAhead}
            </a>
          </div>

          {online.length > 0 && (
            <div className="mt-8 border-t border-rule pt-5">
              <p className="label text-ink-soft">{l.orderOnline}</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {online.map((o) => (
                  <li key={o.label}>
                    <MaybeLink href={o.href} className="inline-flex h-11 items-center border border-ink px-4 font-editorial text-lg hover:border-paprika hover:text-paprika">
                      {o.label}
                    </MaybeLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* The map, framed like a folded street map tucked into the page. */}
        <figure className="col-span-12 -mx-4 sm:mx-0 lg:col-span-7 lg:mt-6">
          <div className="relative border-y-2 border-ink bg-paper-deep p-2 sm:border-2" data-reveal="image">
            <iframe
              title={l.mapTitle}
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
              {l.fig}
              <span className="hidden sm:inline">{l.figCity}</span>
            </span>
            <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="link-ink">
              {l.openMaps}
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
