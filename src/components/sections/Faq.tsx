import type { Dict } from "@/content/i18n";
import { directionsHref, site, telHref } from "@/content/site";
import { HoursList } from "../Hours";
import { MaybeLink } from "../MaybeLink";
import { Folio } from "../SectionHead";
import { orderOnlineLinks } from "./Location";

/**
 * Questions people actually ask, answered only with confirmed facts.
 * Anything the shop hasn't confirmed yet (halal, parking, delivery) stays
 * out until it's filled in under `facts` in content/site.ts.
 */
export function Faq({ t }: { t: Dict }) {
  const f = t.faq;
  const online = orderOnlineLinks();

  const items: { q: string; a: React.ReactNode }[] = [
    {
      q: f.where.q,
      a: (
        <>
          {f.where.a}{" "}
          <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="link-ink">
            {t.location.directions} {t.arrow}
          </a>
        </>
      ),
    },
    { q: f.order.q, a: f.order.a },
    { q: f.catering.q, a: f.catering.a },
    {
      q: f.hours.q,
      a: site.hours ? <HoursList locale={t.locale} className="max-w-xs" /> : f.hours.unknown,
    },
  ];
  if (site.facts.halal) items.push({ q: f.halal, a: site.facts.halal[t.locale] });
  if (site.facts.parking) items.push({ q: f.parking, a: site.facts.parking[t.locale] });
  if (site.facts.delivery) items.push({ q: f.delivery, a: site.facts.delivery[t.locale] });
  if (online.length)
    items.push({
      q: f.online.q,
      a: (
        <>
          {f.online.a}{" "}
          {online.map((o, i) => (
            <span key={o.label}>
              {i > 0 && " · "}
              <MaybeLink href={o.href} className="link-ink">
                {o.label}
              </MaybeLink>
            </span>
          ))}
        </>
      ),
    });

  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-[92rem] px-4 pt-24 sm:px-8 lg:pt-36">
      <Folio prefix={t.page} page="06" title={f.folio} />
      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 lg:mt-14">
        <h2 id="faq-title" className="display col-span-12 text-[clamp(2.6rem,5vw,4.8rem)] lg:col-span-4" data-reveal="up">
          {f.title}
        </h2>
        <div className="col-span-12 border-t-2 border-ink lg:col-span-8">
          {items.map((item, i) => (
            <details key={item.q} className="group border-b border-rule" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-baseline gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <span className="label w-8 shrink-0 text-paprika">0{i + 1}</span>
                <span className="font-editorial text-[1.35rem] leading-snug sm:text-[1.5rem]">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="ms-auto font-editorial text-2xl leading-none text-ink-soft transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="ps-12 pb-6 text-[1.08rem] leading-relaxed text-ink-soft">{item.a}</div>
            </details>
          ))}
          <p className="mt-6 text-ink-soft">
            <a href={telHref} className="link-ink">
              <span dir="ltr">{site.phone.display}</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
