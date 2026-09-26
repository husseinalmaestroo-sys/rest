import type { Locale } from "@/content/i18n";
import type { Weekday } from "@/content/site";

export const weekdays: Weekday[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export type WeeklyHours = Record<Weekday, [string, string] | null>;

const TZ = "America/Chicago";

/** "08:00" → "8am" / "8 ص" */
export function formatTime(hhmm: string, locale: Locale) {
  const [h, m] = hhmm.split(":").map(Number);
  const h12 = ((h + 11) % 12) + 1;
  const mins = m ? `:${String(m).padStart(2, "0")}` : "";
  if (locale === "ar") return `${h12}${mins} ${h < 12 ? "ص" : "م"}`;
  return `${h12}${mins}${h < 12 ? "am" : "pm"}`;
}

/** Consecutive days with identical hours collapse into one row: "Mon – Fri". */
export function groupHours(hours: WeeklyHours) {
  const rows: { from: Weekday; to: Weekday; value: [string, string] | null }[] = [];
  for (const day of weekdays) {
    const value = hours[day];
    const last = rows[rows.length - 1];
    if (last && JSON.stringify(last.value) === JSON.stringify(value)) last.to = day;
    else rows.push({ from: day, to: day, value });
  }
  return rows;
}

/** Day and minutes-since-midnight right now in the shop's time zone. */
export function shopNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = get("weekday").toLowerCase().slice(0, 3) as Weekday;
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** Whether the shop is open now, and the next change ("until 9pm" / "opens 8am"). */
export function openState(hours: WeeklyHours, date = new Date()) {
  const { day, minutes } = shopNow(date);
  const today = hours[day];
  if (today) {
    const [open, close] = today.map(toMinutes);
    const closeAdj = close <= open ? close + 24 * 60 : close; // past midnight
    if (minutes >= open && minutes < closeAdj) return { open: true, until: today[1] };
    if (minutes < open) return { open: false, next: today[0] };
  }
  // Next day with hours.
  const idx = weekdays.indexOf(day);
  for (let i = 1; i <= 7; i++) {
    const d = weekdays[(idx + i) % 7];
    const h = hours[d];
    if (h) return { open: false, next: h[0], nextDay: d };
  }
  return { open: false };
}
