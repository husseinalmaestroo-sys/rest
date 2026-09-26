import { dictionaries, menuPrices, type Locale } from "@/content/i18n";
import { site, telHref } from "@/content/site";
import { CallBar } from "./CallBar";
import { Drawing, type DrawingName } from "./drawings";
import { Footer } from "./Footer";
import { HalalMark } from "./HalalMark";
import { Header } from "./Header";

type Line = { key: string; name: string; note: string; drawing?: DrawingName };

/**
 * The full menu as a single printed sheet: a double-ruled masthead, two
 * columns of dishes with dotted leaders, and prices only where the shop
 * has supplied them (content/i18n.ts → menuPrices). Otherwise: "Ask".
 */
export function MenuPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const m = t.menuPage;
  const b = t.bakery.items;

  const bakery: Line[] = [
    { key: "pita", ...b.pita, drawing: "pita" },
    { key: "cheese-pies", ...b.cheese, drawing: "cheesePie" },
    { key: "spinach-pies", ...b.spinach, drawing: "spinachPie" },
    { key: "pastries", ...b.pastries, drawing: "pastry" },
    { key: "bread", ...b.bread, drawing: "bread" },
  ];
  const kitchenKeys = ["shawarma", "falafel", "hummus", "rice", "lamb", "sandwiches"];
  const kitchenDrawings: (DrawingName | undefined)[] = ["shawarma", "falafel", "hummus", "rice", undefined, undefined];
  const kitchen: Line[] = t.kitchen.menu.map((d, i) => ({ key: kitchenKeys[i], ...d, drawing: kitchenDrawings[i] }));

  const Column = ({ title, lines, no }: { title: string; lines: Line[]; no: string }) => (
    <section aria-labelledby={`menu-${no}`}>
      <div className="flex items-baseline gap-3 border-b-2 border-ink pb-2">
        <span className="label text-paprika">
          {t.no} {no}
        </span>
        <h2 id={`menu-${no}`} className="display text-[2rem] sm:text-[2.4rem]">
          {title}
        </h2>
      </div>
      <ul>
        {lines.map((l) => (
          <li key={l.key} className="flex items-start gap-4 border-b border-rule py-5">
            <span className="mt-1 w-12 shrink-0 sm:w-14" aria-hidden="true">
              {l.drawing && <Drawing name={l.drawing} className="w-full" strokeWidth={2} />}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-3">
                <h3 className="display text-[1.6rem] sm:text-[1.85rem]">{l.name}</h3>
                <span className="leader text-ink" aria-hidden="true" />
                <span className="font-editorial text-lg tabular-nums whitespace-nowrap text-ink-soft">
                  {menuPrices[l.key] ?? m.askPrice}
                </span>
              </div>
              <p className="mt-1 font-editorial italic text-ink-soft">{l.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <>
      <Header locale={locale} />
      <main id="main" className="mx-auto max-w-[92rem] px-4 pt-10 pb-24 sm:px-8 lg:pt-16">
        <a href={t.home} className="label link-ink text-ink-soft">
          {locale === "ar" ? "→" : "←"} {m.back}
        </a>

        <article className="mx-auto mt-8 max-w-6xl bg-[#f7f1e4] px-5 py-10 shadow-[0_1px_0_rgb(35_26_19/0.1),0_24px_48px_-36px_rgb(35_26_19/0.6)] sm:px-12 sm:py-14">
          {/* Masthead */}
          <header className="text-center">
            <div className="border-y-2 border-ink py-1">
              <p className="label border-y border-ink py-2">{site.name}</p>
            </div>
            <h1 className="display mt-8 text-[clamp(3.4rem,10vw,7rem)]">{m.title}</h1>
            <HalalMark className="mt-3 text-paprika" />
            <p className="mx-auto mt-4 max-w-[52ch] font-editorial text-lg text-ink-soft">
              {m.intro}{" "}
              <a href={telHref} dir="ltr" className="link-ink whitespace-nowrap text-ink">
                {site.phone.display}
              </a>
              .
            </p>
          </header>

          <div className="mt-12 grid gap-x-14 gap-y-12 lg:grid-cols-2">
            <Column title={m.bakery} lines={bakery} no="01" />
            <Column title={m.kitchen} lines={kitchen} no="02" />
          </div>

          <section aria-labelledby="menu-03" className="mt-14 border-t-2 border-ink pt-8 text-center">
            <h2 id="menu-03" className="accent text-[2.4rem] text-paprika">
              {m.catering}
            </h2>
            <p className="mx-auto mt-3 max-w-[48ch] font-editorial text-lg">{m.cateringNote}</p>
            <a href={`${t.home}#catering`} className="label mt-6 inline-flex h-12 items-center bg-ink px-6 text-paper hover:bg-paprika">
              {t.catering.cta} {t.arrow}
            </a>
          </section>

          <p lang="ar" className="mt-12 text-center font-arabic text-2xl text-paprika" aria-hidden="true">
            صحتين
          </p>
        </article>
      </main>
      <Footer t={t} />
      <CallBar t={t} />
    </>
  );
}
