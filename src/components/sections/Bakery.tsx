import type { CSSProperties } from "react";
import { bakeryItems } from "@/content/copy";
import type { PhotoSlot } from "@/content/photos";
import { Photo } from "../Photo";
import { Folio } from "../SectionHead";
import { Stamp } from "../Stamp";

type Item = { name: string; note: string; photo: PhotoSlot };

/** The words under a bakery photo: number, name, one line, a short rule. */
function Entry({ no, item, className = "" }: { no: string; item: Item; className?: string }) {
  return (
    <div className={className} data-reveal="up">
      <p className="label flex items-center gap-3 text-ink-soft">
        <span>No. {no}</span>
        <span className="h-px w-8 bg-ink/40" aria-hidden="true" />
        <span>From the oven</span>
      </p>
      <h3 className="display mt-3 text-[clamp(2.3rem,4.2vw,3.6rem)]">{item.name}</h3>
      <p className="mt-2 max-w-[30ch] font-editorial text-[1.12rem] leading-snug text-ink-soft">{item.note}</p>
    </div>
  );
}

function Plate({
  item,
  className,
  sizes,
  delay,
  drawing,
}: {
  item: Item;
  className: string;
  sizes: string;
  delay?: number;
  drawing?: string;
}) {
  return (
    <div data-reveal="image" style={delay ? ({ "--delay": `${delay}ms` } as CSSProperties) : undefined}>
      <Photo slot={item.photo} sizes={sizes} className={className} drawingClassName={drawing} />
    </div>
  );
}

/**
 * The bakery sits on kraft paper with a torn bag-top edge. Oversized
 * photographs, staggered like a magazine spread; names do the talking.
 */
export function Bakery() {
  const { pita, cheese, spinach, pastries, bread } = bakeryItems;

  return (
    <section id="bakery" aria-labelledby="bakery-title" className="relative mt-28 lg:mt-44">
      {/* Serrated top, like the fold of a paper bakery bag. */}
      <div
        aria-hidden="true"
        className="h-3 bg-kraft [mask:conic-gradient(from_135deg_at_top,#000_90deg,#0000_0)_50%/14px_100%]"
      />
      <div className="bg-kraft pb-24 lg:pb-36">
        <div className="mx-auto max-w-[92rem] px-4 pt-12 sm:px-8 lg:pt-20">
          <Folio page="02" title="The Bakery" />

          {/* Headline + stamp */}
          <div className="relative mt-10 lg:mt-14">
            <h2
              id="bakery-title"
              className="display max-w-[11ch] text-[clamp(3.6rem,12vw,11.5rem)] leading-[0.86]"
              data-reveal="up"
            >
              Fresh from the <span className="font-editorial italic text-paprika">oven.</span>
            </h2>
            <Stamp
              id="bakery-stamp"
              text="Orland Market & Bakery · 151st St · Orland Park ·"
              drawing="pita"
              className="absolute top-[2.9rem] right-0 w-24 rotate-[-12deg] text-paprika sm:top-0 sm:w-40 lg:top-6 lg:right-[6%] lg:w-52"
            />
          </div>

          {/* 01 — Pita: the big one, bleeding off the left edge. */}
          <div className="mt-12 grid grid-cols-12 items-end gap-x-6 lg:mt-20">
            <div className="col-span-12 -mx-4 sm:-mx-8 lg:col-span-8 lg:mr-0">
              <Plate item={pita} className="aspect-[4/3] w-full lg:aspect-[16/10]" sizes="(min-width: 1024px) 66vw, 100vw" drawing="w-[34%] max-w-72" />
            </div>
            <Entry no="01" item={pita} className="col-span-12 mt-6 lg:col-span-4 lg:mt-0 lg:pb-4" />
          </div>

          {/* 02 & 03 — tall and square, staggered. */}
          <div className="mt-16 grid grid-cols-12 gap-x-6 lg:mt-28">
            <div className="col-span-9 lg:col-span-4 lg:col-start-2">
              <Plate item={cheese} className="aspect-[3/4] w-full" sizes="(min-width: 1024px) 33vw, 75vw" />
              <Entry no="02" item={cheese} className="mt-6" />
            </div>
            <div className="col-span-10 col-start-3 mt-16 lg:col-span-5 lg:col-start-7 lg:mt-48">
              <Plate item={spinach} className="aspect-square w-full" sizes="(min-width: 1024px) 40vw, 85vw" delay={120} />
              <Entry no="03" item={spinach} className="mt-6" />
            </div>
          </div>

          {/* A hairline and a note, like a margin annotation. */}
          <div className="my-16 flex items-center gap-5 lg:my-24" aria-hidden="true">
            <span className="h-px flex-1 bg-ink/30" />
            <span className="hand -rotate-2 text-[2rem] text-ink-soft">pick one for now, one for later</span>
            <span className="h-px flex-1 bg-ink/30" />
          </div>

          {/* 04 & 05 — wide pastries, tall bread tucked up alongside. */}
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 -mx-4 sm:mx-0 lg:col-span-7">
              <Plate item={pastries} className="aspect-[5/4] w-full sm:aspect-[16/10]" sizes="(min-width: 1024px) 58vw, 100vw" />
              <Entry no="04" item={pastries} className="mt-6 px-4 sm:px-0" />
            </div>
            <div className="col-span-8 col-start-5 mt-16 sm:col-span-6 sm:col-start-7 lg:col-span-4 lg:col-start-9 lg:-mt-10">
              <Plate item={bread} className="aspect-[3/4] w-full" sizes="(min-width: 1024px) 33vw, 66vw" delay={120} />
              <Entry no="05" item={bread} className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
