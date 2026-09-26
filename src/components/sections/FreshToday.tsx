import { DEMO, demo } from "@/content/demo";
import type { Dict } from "@/content/i18n";

export type FreshItem = { item: string; note: string };

/**
 * "Fresh today" is edited by the shop in a Google Sheet, not in code:
 * File → Share → Publish to web → CSV, then set FRESH_TODAY_CSV_URL to that
 * link. Columns: item_en, note_en, item_ar, note_ar (first row = headers).
 * The page re-reads it every few minutes; an empty sheet hides the section.
 */
export async function loadFreshToday(): Promise<{ en: FreshItem[]; ar: FreshItem[] } | null> {
  const url = process.env.FRESH_TODAY_CSV_URL;
  if (!url) return DEMO ? demo.fresh : null;
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const rows = parseCsv(await res.text()).slice(1);
    const en = rows.filter((r) => r[0]?.trim()).map((r) => ({ item: r[0].trim(), note: (r[1] ?? "").trim() }));
    const ar = rows
      .filter((r) => (r[2] ?? r[0])?.trim())
      .map((r) => ({ item: (r[2] || r[0]).trim(), note: (r[3] || r[1] || "").trim() }));
    return en.length ? { en, ar } : null;
  } catch {
    return null;
  }
}

/** Minimal CSV parser: handles quoted fields, commas and newlines inside quotes. */
function parseCsv(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else cell += ch;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

/** A chalk-free specials board: a strip of price-tag style labels. */
export function FreshToday({ t, items }: { t: Dict; items: FreshItem[] }) {
  return (
    <section aria-labelledby="fresh-title" className="mx-auto mt-16 max-w-[92rem] px-4 sm:px-8 lg:mt-20">
      <div className="flex flex-col gap-6 border-y-2 border-ink py-6 lg:flex-row lg:items-center lg:gap-10">
        <div className="shrink-0">
          <h2 id="fresh-title" className="hand text-[2.6rem] leading-none text-paprika">
            {t.fresh.title}
          </h2>
          <p className="label mt-2 text-ink-soft">{t.fresh.note}</p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {items.map((it) => (
            <li key={it.item} className="tag bg-kraft py-2 pe-4">
              <span className="display text-[1.3rem]">{it.item}</span>
              {it.note && <span className="ms-2 font-editorial italic text-ink-soft">{it.note}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
