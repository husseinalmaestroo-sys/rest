"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site, telHref, directionsHref } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="label sr-only z-[70] bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      {/* Masthead strip — the line under a newspaper nameplate. */}
      <div className="label border-b border-rule text-ink-soft">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-4 py-2 sm:px-8">
          <span>
            {site.address.street} <span className="hidden sm:inline">· {site.address.city}, Illinois</span>
          </span>
          <span className="hidden md:inline">Market — Bakery — Kitchen — Catering</span>
          <a href={telHref} className="hidden hover:text-paprika sm:inline">
            Tel. {site.phone.display}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 bg-paper/95 backdrop-blur-[2px] transition-[border-color] duration-300 ${
          scrolled ? "border-b border-rule" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-4 py-3 sm:px-8 lg:py-4">
          <a href="#top" className="shrink-0 text-[1.14rem] leading-none min-[400px]:text-[1.28rem] sm:text-[1.5rem]" aria-label={`${site.name} — home`}>
            <Wordmark />
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-baseline gap-6 font-editorial text-[1.05rem] xl:gap-8">
              {nav.map((item, i) => (
                <li key={item.href}>
                  <a href={item.href} className="group inline-flex items-baseline gap-1.5 whitespace-nowrap hover:text-paprika">
                    <span className="label text-[0.6rem] text-ink-soft group-hover:text-paprika">0{i + 1}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref}
              className="group hidden items-center gap-3 border border-ink bg-ink px-4 py-2.5 text-paper transition-colors hover:border-paprika hover:bg-paprika sm:inline-flex"
            >
              <span className="label text-[0.68rem] whitespace-nowrap">Order / Call</span>
              <span className="h-4 w-px bg-paper/40 lg:max-xl:hidden" aria-hidden="true" />
              <span className="font-editorial text-[0.98rem] whitespace-nowrap tabular-nums lg:max-xl:hidden">
                {site.phone.display}
              </span>
            </a>

            <button
              ref={toggleRef}
              type="button"
              className="label inline-flex h-11 shrink-0 items-center gap-2.5 border border-ink px-3 lg:hidden"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
            >
              <span aria-hidden="true" className="flex w-4 flex-col gap-[5px]">
                <span className="h-px w-full bg-ink" />
                <span className="h-px w-2/3 bg-ink" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu, set like a paper menu card. */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-0 z-50 overflow-y-auto bg-paper lg:hidden"
      >
        <div className="flex min-h-full flex-col px-5 pt-4 pb-8">
          <div className="flex items-center justify-between">
            <Wordmark className="text-[1.28rem]" />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              className="label inline-flex h-11 items-center border border-ink px-3.5"
            >
              Close
            </button>
          </div>

          <div className="mt-10 border-y-2 border-ink py-1.5">
            <p className="label border-y border-ink py-2 text-center">— The Menu —</p>
          </div>

          <nav aria-label="Mobile" className="mt-2">
            <ul>
              {nav.map((item, i) => (
                <li key={item.href} className="border-b border-rule">
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 py-4"
                  >
                    <span className="display text-[2.35rem]">{item.label}</span>
                    <span className="leader text-ink" aria-hidden="true" />
                    <span className="label text-ink-soft">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-10">
            <p className="hand text-[2rem] text-paprika -rotate-2">ahlan — come on in</p>
            <p className="mt-4 font-editorial text-lg leading-snug">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <a href={telHref} className="label flex h-14 items-center justify-center bg-ink text-paper">
                Call the shop
              </a>
              <a href={directionsHref} className="label flex h-14 items-center justify-center border border-ink">
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
