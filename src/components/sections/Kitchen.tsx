import type { CSSProperties } from "react";
import type { Dict } from "@/content/i18n";
import { photos } from "@/content/photos";
import { site, telHref } from "@/content/site";
import { HalalMark } from "../HalalMark";
import { Photo } from "../Photo";
import { Folio } from "../SectionHead";

const plateSlots = [photos.kitchenShawarma, photos.kitchenFalafel, photos.kitchenHummus, photos.kitchenRice];

/** The counter menu: names, dotted leaders, no prices (ask at the counter). */
function CounterMenu({ t }: { t: Dict }) {
  const k = t.kitchen;
  return (
    <div>
      <div className="border-y-2 border-paper/80 py-1">
        <p className="label border-y border-paper/40 py-2 text-center text-paper/80">{k.counterTitle}</p>
      </div>
      <ul className="mt-2">
        {k.menu.map((dish, i) => (
          <li
            key={dish.name}
            className="border-b border-paper/15 py-4 lg:py-5"
            data-reveal="up"
            style={{ "--delay": `${i * 60}ms` } as CSSProperties}
          >
            <div className="flex items-baseline gap-3">
              <h3 className="display text-[clamp(1.9rem,3vw,2.6rem)]">{dish.name}</h3>
              <span className="leader text-paper" aria-hidden="true" />
              <span className="label text-wheat">0{i + 1}</span>
            </div>
            <p className="mt-1 font-editorial italic text-paper/65">{dish.note}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-paper/75">
        {k.askPre}{" "}
        <a href={telHref} className="link-ink whitespace-nowrap text-paper">
          {k.askCall} <span dir="ltr">{site.phone.display}</span>
        </a>{" "}
        {k.askPost}
      </p>
    </div>
  );
}

/**
 * Prepared food on dark espresso ink: the one section that goes dark, so
 * the photography reads like it's under the counter lights.
 */
export function Kitchen({ t }: { t: Dict }) {
  const k = t.kitchen;
  const plates = plateSlots.map((slot, i) => ({ slot, caption: k.plates[i] }));
  return (
    <section id="kitchen" aria-labelledby="kitchen-title" className="bg-ink text-paper">
      <div className="mx-auto max-w-[92rem] px-4 pt-16 pb-24 sm:px-8 lg:pt-24 lg:pb-36">
        <Folio prefix={t.page} page="03" title={k.folio} tone="paper" />

        <div className="mt-10 grid grid-cols-12 gap-x-6 lg:mt-14">
          <div className="col-span-12 lg:col-span-7">
            <h2 id="kitchen-title" className="display text-[clamp(4rem,13vw,12rem)] leading-[0.84]" data-reveal="up">
              {k.title1}
              <br />
              <span className="accent text-wheat">{k.title2}</span>
            </h2>
            <p className="mt-8 max-w-[36ch] font-editorial text-[1.3rem] leading-snug text-paper/80" data-reveal="up">
              {k.lead}
            </p>
            <HalalMark className="mt-6 text-wheat" />

            {/* Phones: a swipeable run of plates, like turning pages. */}
            <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:hidden">
              {plates.map((p) => (
                <figure key={p.caption} className="w-[78%] shrink-0 snap-center sm:w-[46%]">
                  <Photo slot={p.slot} sizes="(min-width: 640px) 46vw, 78vw" className="aspect-[4/5] w-full" />
                  <figcaption className="label mt-3 text-paper/70">{p.caption}</figcaption>
                </figure>
              ))}
            </div>
            <p className="label mt-2 text-paper/50 lg:hidden" aria-hidden="true">
              {k.swipe}
            </p>

            {/* Desktop: one big plate under the headline. */}
            <figure className="mt-16 hidden lg:block">
              <div data-reveal="image">
                <Photo slot={plates[0].slot} sizes="58vw" className="aspect-[4/5] w-full" drawingClassName="w-[58%]" />
              </div>
              <figcaption className="label mt-3 text-paper/60">{k.fig}</figcaption>
            </figure>
          </div>

          <div className="col-span-12 mt-14 lg:col-span-5 lg:mt-6">
            <div className="lg:sticky lg:top-28">
              <CounterMenu t={t} />
            </div>
          </div>
        </div>

        <div className="mt-20 hidden grid-cols-12 gap-x-6 lg:grid">
          {plates.slice(1).map((p, i) => (
            <figure key={p.caption} className={`col-span-4 ${["", "mt-20", "mt-40"][i]}`}>
              <div data-reveal="image" style={{ "--delay": `${i * 120}ms` } as CSSProperties}>
                <Photo slot={p.slot} sizes="33vw" className="aspect-[4/5] w-full" />
              </div>
              <figcaption className="label mt-3 text-paper/60">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
