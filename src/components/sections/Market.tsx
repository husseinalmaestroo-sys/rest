"use client";

import { useState } from "react";
import { marketAisles } from "@/content/copy";
import { Photo } from "../Photo";
import { Folio } from "../SectionHead";

/**
 * The market as a printed store directory: aisle numbers, big names,
 * one line each. On desktop the photo plate on the left follows whichever
 * aisle you point at; on phones each row carries its own small plate.
 */
export function Market() {
  const [active, setActive] = useState(0);

  return (
    <section id="market" aria-labelledby="market-title" className="mt-24 lg:mt-40">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-8">
        <Folio page="01" title="The Market" />

        <div className="mt-10 grid grid-cols-12 gap-x-6 lg:mt-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 id="market-title" className="display text-[clamp(3rem,7vw,6.4rem)]" data-reveal="up">
                Bring the market <em className="font-editorial italic text-paprika">home.</em>
              </h2>
              <p className="mt-6 max-w-[34ch] font-editorial text-[1.25rem] leading-snug text-ink-soft" data-reveal="up">
                A Middle Eastern grocery with the bakery, the fresh case and the kitchen all under one roof.
              </p>

              {/* Photo plate that follows the pointer (desktop only). */}
              <div className="relative mt-10 hidden aspect-[5/4] w-full max-w-[30rem] lg:block" aria-hidden="true">
                {marketAisles.map((aisle, i) => (
                  <div
                    key={aisle.name}
                    className={`absolute inset-0 transition-[opacity,clip-path] duration-700 ease-[var(--ease-print)] ${
                      active === i ? "opacity-100 [clip-path:inset(0)]" : "opacity-0 [clip-path:inset(0_0_0_100%)]"
                    }`}
                  >
                    <Photo slot={aisle.photo} sizes="30rem" className="h-full w-full" />
                  </div>
                ))}
                <p className="label absolute -bottom-7 left-0 text-ink-soft">
                  Aisle 0{active + 1} — {marketAisles[active].name}
                </p>
              </div>
            </div>
          </div>

          <ol className="col-span-12 mt-12 border-t-2 border-ink lg:col-span-7 lg:mt-0">
            {marketAisles.map((aisle, i) => (
              <li
                key={aisle.name}
                onMouseEnter={() => setActive(i)}
                className="group grid grid-cols-[1fr_5.5rem] gap-x-4 border-b border-rule py-6 sm:grid-cols-[4.5rem_1fr_7rem] lg:grid-cols-[5rem_1fr] lg:py-8"
                data-reveal="up"
              >
                <span className="label order-1 col-span-2 text-ink-soft sm:col-span-1 sm:pt-3">
                  <span className={active === i ? "lg:text-paprika" : undefined}>Aisle 0{i + 1}</span>
                </span>
                <div className="order-2 mt-2 sm:mt-0">
                  <h3
                    className={`display text-[clamp(2.1rem,4.6vw,3.9rem)] transition-[color,transform] duration-500 ease-[var(--ease-print)] lg:group-hover:translate-x-2 ${
                      active === i ? "lg:text-paprika" : ""
                    }`}
                  >
                    {aisle.name}
                  </h3>
                  <p className="mt-2 max-w-[42ch] font-editorial text-[1.1rem] leading-snug text-ink-soft">{aisle.note}</p>
                </div>
                <div className="order-3 mt-2 self-start sm:mt-0 lg:hidden" aria-hidden="true">
                  <Photo slot={aisle.photo} sizes="7rem" className="aspect-square w-full" brief={false} drawingClassName="w-[82%]" />
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 flex items-center justify-end gap-3 text-right lg:mt-10">
          <span className="hand text-[1.9rem] text-paprika">Can&rsquo;t find it? Ask at the counter.</span>
        </p>
      </div>
    </section>
  );
}
