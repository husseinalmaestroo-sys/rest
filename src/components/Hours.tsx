"use client";

import { useEffect, useState } from "react";
import { dictionaries, type Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { formatTime, groupHours, openState, type WeeklyHours } from "@/lib/hours";

/**
 * The weekly hours list. Renders nothing when hours aren't confirmed yet
 * (the caller shows "Call for today's hours" instead).
 */
export function HoursList({ locale, className = "" }: { locale: Locale; className?: string }) {
  const t = dictionaries[locale];
  if (!site.hours) return null;
  const rows = groupHours(site.hours as WeeklyHours);
  return (
    <ul className={className}>
      {rows.map((r) => (
        <li key={r.from} className="flex justify-between gap-4">
          <span>
            {t.hours.days[r.from]}
            {r.to !== r.from && ` – ${t.hours.days[r.to]}`}
          </span>
          <span dir="ltr" className="tabular-nums">
            {r.value ? `${formatTime(r.value[0], t.locale)} – ${formatTime(r.value[1], t.locale)}` : t.hours.closed}
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * "Open now · until 9pm" — worked out in the browser against the shop's
 * time zone, refreshed every minute. Hidden until real hours exist.
 */
export function OpenNow({ locale, className = "" }: { locale: Locale; className?: string }) {
  const t = dictionaries[locale];
  const [state, setState] = useState<ReturnType<typeof openState> | null>(null);

  useEffect(() => {
    if (!site.hours) return;
    const tick = () => setState(openState(site.hours as WeeklyHours));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!site.hours || !state) return null;

  const detail = state.open
    ? state.until && t.hours.closesAt(formatTime(state.until, t.locale))
    : state.next &&
      t.hours.opensAt(
        `${state.nextDay ? `${t.hours.days[state.nextDay]} ` : ""}${formatTime(state.next, t.locale)}`,
      );

  return (
    <p className={`label inline-flex items-center gap-2 ${className}`} aria-live="polite">
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${state.open ? "bg-olive shadow-[0_0_0_3px_rgb(74_77_42/0.2)]" : "bg-paprika"}`}
      />
      <span>{state.open ? t.hours.openNow : t.hours.closedNow}</span>
      {detail && <span className="text-ink-soft">· {detail}</span>}
    </p>
  );
}
