import type { CSSProperties } from "react";
import { photos } from "@/content/photos";
import { site, telHref, directionsHref } from "@/content/site";
import { Photo } from "../Photo";

const contents = [
  { href: "#market", title: "The Market", note: "Groceries & staples" },
  { href: "#bakery", title: "The Bakery", note: "Breads, pies, pastries" },
  { href: "#kitchen", title: "The Kitchen", note: "Hot food to go" },
  { href: "#catering", title: "Catering", note: "For the big table" },
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-x-clip">
      <div className="mx-auto max-w-[92rem] px-4 pt-8 sm:px-8 lg:pt-12">
        <div className="grid grid-cols-12 gap-x-4 sm:gap-x-6 lg:grid-rows-[auto_1fr]">
          {/* Headline: runs over the photograph's left edge on desktop. */}
          <div className="pointer-events-none relative z-10 col-span-12 lg:col-span-8 lg:col-start-1 lg:row-start-1">
            <p className="label pointer-events-auto flex items-center gap-3 text-ink-soft" data-reveal="slide">
              <span className="tag shrink-0 whitespace-nowrap bg-paprika py-1 pr-2.5 text-paper">No. 9005</span>
              <span>151st Street · Orland Park<span className="hidden sm:inline">, Illinois</span></span>
            </p>

            <h1 id="hero-title" className="display mt-6 text-[clamp(3rem,8.6vw,8.6rem)] leading-[0.92] lg:mt-10">
              <span className="block" data-reveal="up">
                A little
              </span>
              <span
                className="block font-editorial text-[1.06em] leading-[0.9] italic tracking-[-0.03em] text-paprika"
                data-reveal="up"
                style={delay(80)}
              >
                taste of{" "}
                <span className="relative inline-block">
                  home,
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 20"
                    preserveAspectRatio="none"
                    className="absolute -bottom-[0.02em] left-0 h-[0.12em] w-full"
                  >
                    <path d="M3 14C40 6 90 4 130 8s55 6 67 2" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
              <span className="block" data-reveal="up" style={delay(160)}>
                right here in
              </span>
              <span className="block whitespace-nowrap" data-reveal="up" style={delay(240)}>
                Orland Park.
              </span>
            </h1>
          </div>

          {/* The photograph: tall, deckled, tucked under the end of the headline. */}
          <figure className="relative col-span-11 col-start-2 mt-10 -mr-4 sm:col-span-9 sm:col-start-4 sm:-mr-8 lg:col-span-5 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:mt-36 lg:mr-0 lg:self-start">
            <div data-reveal="image" style={delay(120)}>
              <Photo
                slot={photos.heroMain}
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
                briefAt="top"
                className="deckle aspect-[4/5] w-full"
                drawingClassName="w-[44%] max-w-64"
              />
            </div>

            <figcaption className="label mt-3 flex justify-end gap-4 pr-4 text-ink-soft sm:pr-8 lg:pr-0">
              <span>Fig. 1 — Off the bread rack</span>
            </figcaption>

            {/* Snapshot of the hot counter, pinned over the photo's corner. */}
            <div className="absolute -bottom-24 -left-10 z-10 w-[46%] max-w-60 sm:-left-20 lg:-bottom-20 lg:-left-28 lg:w-[42%]">
              <div className="-rotate-3 bg-paper p-2 pb-1.5 shadow-[0_1px_0_rgb(35_26_19/0.15),0_16px_30px_-18px_rgb(35_26_19/0.55)]">
                <div data-reveal="image" style={delay(380)}>
                  <Photo
                    slot={photos.heroCounter}
                    sizes="(min-width: 1024px) 15rem, 45vw"
                    className="aspect-square w-full"
                    brief={false}
                    drawingClassName="w-[50%]"
                  />
                </div>
                <p className="hand mt-1 text-center text-[1.4rem] text-ink-soft">the hot counter</p>
              </div>
            </div>
          </figure>

          {/* Right margin: the Arabic welcome, set vertically. */}
          <div className="hidden lg:col-span-1 lg:col-start-12 lg:row-span-2 lg:row-start-1 lg:mt-36 lg:flex lg:flex-col lg:items-center lg:gap-8">
            <p lang="ar" className="font-arabic text-[1.8rem] leading-none text-paprika [writing-mode:vertical-rl]">
              أهلاً وسهلاً
            </p>
            <span className="h-16 w-px bg-rule" aria-hidden="true" />
            <p className="label text-ink-soft [writing-mode:vertical-rl]">Ahlan wa sahlan — welcome</p>
          </div>

          {/* Supporting copy and the two actions that matter. */}
          <div className="col-span-12 mt-32 sm:col-span-9 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:mt-12">
            <p className="max-w-[28ch] font-editorial text-[1.4rem] leading-[1.3] sm:text-[1.65rem]" data-reveal="up">
              Fresh bakery, Middle Eastern groceries, prepared food and catering for the neighborhood.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5" data-reveal="up" style={delay(100)}>
              <a
                href={telHref}
                className="inline-flex items-center gap-4 bg-ink px-5 py-4 text-paper transition-colors hover:bg-paprika"
              >
                <span className="label">Call to order</span>
                <span className="font-editorial text-lg tabular-nums">{site.phone.display}</span>
              </a>
              <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="label link-ink">
                Get directions →
              </a>
            </div>
          </div>
        </div>

        {/* Contents, like the front page of a food magazine. */}
        <nav aria-label="On this page" className="mt-20 lg:mt-32">
          <div className="rule-double flex items-baseline justify-between">
            <p className="label">In the shop</p>
            <p className="label hidden text-ink-soft sm:block">{site.name}</p>
          </div>
          <ol className="-mx-4 mt-4 flex snap-x snap-mandatory overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-4 sm:px-0">
            {contents.map((c, i) => (
              <li key={c.href} className="w-[58%] shrink-0 snap-start border-l border-rule px-4 first:border-l-0 first:pl-0 sm:w-auto sm:px-5">
                <a href={c.href} className="group block py-2">
                  <span className="label text-paprika">p. 0{i + 1}</span>
                  <span className="display mt-2 block text-[1.7rem] transition-transform duration-500 group-hover:translate-x-1 lg:text-[2rem]">
                    {c.title}
                  </span>
                  <span className="mt-1 block font-editorial italic text-ink-soft">{c.note}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
