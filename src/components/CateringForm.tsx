"use client";

import { useId, useMemo, useRef, useState } from "react";
import { dictionaries, type Locale } from "@/content/i18n";
import { site, telHref, whatsappHref } from "@/content/site";

/**
 * A counter order slip for planning a catering request. Nothing is sent
 * from the site: it builds a ready-made message the customer can send on
 * WhatsApp (when the shop's number is set in content/site.ts), copy, or
 * read out on the phone.
 */
export function CateringForm({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].cateringForm;
  const id = useId();
  const [fields, setFields] = useState({ name: "", date: "", guests: "", occasion: "", notes: "" });
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const previewRef = useRef<HTMLPreElement>(null);

  const message = useMemo(() => t.message(fields), [t, fields]);
  const wa = whatsappHref(message);
  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    setCopyState("idle");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopyState("copied");
    } catch {
      // Fall back to selecting the text so it can be copied by hand.
      const sel = window.getSelection();
      if (previewRef.current && sel) {
        const range = document.createRange();
        range.selectNodeContents(previewRef.current);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      setCopyState("failed");
    }
  };

  const field = "mt-1 w-full normal-case tracking-normal border-0 border-b border-ink/40 bg-transparent px-0 py-2 font-editorial text-lg outline-none placeholder:text-ink-soft/60 focus:border-paprika";

  return (
    <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-8 lg:mt-28" data-reveal="up">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative col-span-12 bg-paper px-6 pt-9 pb-8 shadow-[0_1px_0_rgb(35_26_19/0.1)] sm:px-9 lg:col-span-7"
      >
        {/* Perforated tear-off edge, like a counter order pad. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-2 bg-[radial-gradient(circle_at_5px_0,var(--color-paper-deep)_3px,transparent_3.5px)] bg-[length:12px_8px]"
        />
        <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
          <h3 className="display text-[clamp(1.8rem,3vw,2.4rem)]">{t.title}</h3>
          <span className="label hidden text-ink-soft sm:inline">{site.name}</span>
        </div>
        <p className="mt-3 max-w-[48ch] text-ink-soft">{t.intro}</p>

        <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          <label htmlFor={`${id}-occasion`} className="label text-ink-soft sm:col-span-2">
            {t.occasion}
            <input id={`${id}-occasion`} className={field} value={fields.occasion} onChange={set("occasion")} placeholder={t.occasionPlaceholder} />
          </label>
          <label htmlFor={`${id}-date`} className="label text-ink-soft">
            {t.date}
            <input id={`${id}-date`} type="date" className={field} value={fields.date} onChange={set("date")} />
          </label>
          <label htmlFor={`${id}-guests`} className="label text-ink-soft">
            {t.guests}
            <input id={`${id}-guests`} type="number" min={1} inputMode="numeric" className={field} value={fields.guests} onChange={set("guests")} />
          </label>
          <label htmlFor={`${id}-name`} className="label text-ink-soft sm:col-span-2">
            {t.name}
            <input id={`${id}-name`} autoComplete="name" className={field} value={fields.name} onChange={set("name")} />
          </label>
          <label htmlFor={`${id}-notes`} className="label text-ink-soft sm:col-span-2">
            {t.notes}
            <textarea id={`${id}-notes`} rows={2} className={`${field} resize-y`} value={fields.notes} onChange={set("notes")} placeholder={t.notesPlaceholder} />
          </label>
        </div>
      </form>

      {/* The carbon copy: what gets sent. */}
      <div className="col-span-12 flex flex-col lg:col-span-5 lg:pt-10">
        <p className="label text-ink-soft">{t.preview}</p>
        <pre
          ref={previewRef}
          className="mt-3 min-h-40 whitespace-pre-wrap border-s-2 border-paprika bg-paper/60 px-5 py-4 font-label text-[0.85rem] leading-relaxed text-ink"
        >
          {message}
        </pre>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex h-12 items-center bg-olive px-5 text-paper transition-colors hover:bg-ink"
            >
              {t.whatsapp}
            </a>
          )}
          <button
            type="button"
            onClick={copy}
            className="label inline-flex h-12 items-center border border-ink px-5 hover:border-paprika hover:text-paprika"
          >
            {copyState === "copied" ? t.copied : t.copy}
          </button>
          <a href={telHref} className="label link-ink ms-2">
            {t.call} <span dir="ltr">{site.phone.display}</span>
          </a>
        </div>
        <p className="mt-3 text-sm text-ink-soft" aria-live="polite">
          {copyState === "failed" ? t.copyFailed : ""}
        </p>
      </div>
    </div>
  );
}
