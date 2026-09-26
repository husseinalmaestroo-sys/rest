import { about } from "@/content/copy";
import { photos } from "@/content/photos";
import { Photo } from "../Photo";
import { Folio } from "../SectionHead";

/** A short, honest note about the shop, set like an editor's letter. */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-[92rem] px-4 pt-24 sm:px-8 lg:pt-36">
      <Folio page="05" title="About the shop" />

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-10 lg:mt-14">
        <div className="col-span-12 lg:col-span-6">
          <h2 id="about-title" className="display text-[clamp(2.8rem,6.4vw,6rem)]" data-reveal="up">
            {about.title}
          </h2>

          {/* Three counters, set like a shop's hanging sign list. */}
          <ul className="mt-10 grid grid-cols-3 border-y border-ink" aria-label="What's inside">
            {["Market", "Bakery", "Kitchen"].map((c, i) => (
              <li key={c} className={`py-4 text-center ${i > 0 ? "border-l border-ink" : ""}`}>
                <span className="label block text-paprika">No. 0{i + 1}</span>
                <span className="display mt-1 block text-[1.5rem] sm:text-[2rem]">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <div className="space-y-5 font-editorial text-[1.25rem] leading-[1.5] sm:text-[1.35rem]" data-reveal="up">
            {about.body.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:float-left first-letter:mt-[0.08em] first-letter:mr-2 first-letter:font-display first-letter:text-[4.2em] first-letter:leading-[0.8] first-letter:text-paprika"
                    : "text-ink-soft"
                }
              >
                {p}
              </p>
            ))}
          </div>

          <figure className="mt-10 w-4/5 sm:w-3/5 lg:w-4/5">
            <div data-reveal="image">
              <Photo slot={photos.storefront} sizes="(min-width: 1024px) 30vw, 70vw" className="aspect-[4/3] w-full" brief={false} />
            </div>
            <figcaption className="label mt-3 text-ink-soft">Fig. 5 — 9005 151st St</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
