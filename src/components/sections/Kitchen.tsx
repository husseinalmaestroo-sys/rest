import type { CSSProperties } from "react";
import { kitchenMenu } from "@/content/copy";
import { photos } from "@/content/photos";
import { site, telHref } from "@/content/site";
import { Photo } from "../Photo";
import { Folio } from "../SectionHead";

const plates = [
  { slot: photos.kitchenShawarma, caption: "Shawarma" },
  { slot: photos.kitchenFalafel, caption: "Falafel" },
  { slot: photos.kitchenHummus, caption: "Hummus" },
  { slot: photos.kitchenRice, caption: "Rice & lamb" },
];

/** The counter menu: names, dotted leaders, no prices (ask at the counter). */
function CounterMenu() {
  return (
    <div>
      <div className="border-y-2 border-paper/80 py-1">
        <p className="label border-y border-paper/40 py-2 text-center text-paper/80">At the hot counter</p>
      </div>
      <ul className="mt-2">
        {kitchenMenu.map((dish, i) => (
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
        Wondering what&rsquo;s on today?{" "}
        <a href={telHref} className="link-ink whitespace-nowrap text-paper">
          call {site.phone.display}
        </a>{" "}
        and ask.
      </p>
    </div>
  );
}

/**
 * Prepared food on dark espresso ink: the one section that goes dark, so
 * the photography reads like it's under the counter lights.
 */
export function Kitchen() {
  return (
    <section id="kitchen" aria-labelledby="kitchen-title" className="bg-ink text-paper">
      <div className="mx-auto max-w-[92rem] px-4 pt-16 pb-24 sm:px-8 lg:pt-24 lg:pb-36">
        <Folio page="03" title="Prepared Food" tone="paper" />

        <div className="mt-10 grid grid-cols-12 gap-x-6 lg:mt-14">
          <div className="col-span-12 lg:col-span-7">
            <h2 id="kitchen-title" className="display text-[clamp(4rem,13vw,12rem)] leading-[0.84]" data-reveal="up">
              Come
              <br />
              <span className="font-editorial italic text-wheat">hungry.</span>
            </h2>
            <p className="mt-8 max-w-[36ch] font-editorial text-[1.3rem] leading-snug text-paper/80" data-reveal="up">
              Hot food from the kitchen counter, for lunch on the go or dinner for the whole house.
            </p>

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
              Swipe →
            </p>

            {/* Desktop: one big plate under the headline. */}
            <figure className="mt-16 hidden lg:block">
              <div data-reveal="image">
                <Photo slot={plates[0].slot} sizes="58vw" className="aspect-[4/5] w-full" drawingClassName="w-[58%]" />
              </div>
              <figcaption className="label mt-3 text-paper/60">Fig. 3 — {plates[0].caption}, off the spit</figcaption>
            </figure>
          </div>

          <div className="col-span-12 mt-14 lg:col-span-5 lg:mt-6">
            <div className="lg:sticky lg:top-28">
              <CounterMenu />
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
