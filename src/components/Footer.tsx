import type { Dict } from "@/content/i18n";
import { site, telHref, directionsHref } from "@/content/site";
import { HoursList, OpenNow } from "./Hours";
import { MaybeLink } from "./MaybeLink";
import { SocialIcon } from "./SocialIcon";
import { Wordmark } from "./Wordmark";

export function Footer({ t }: { t: Dict }) {
  const socials = [
    { label: "Facebook", href: site.social.facebook },
    { label: "Instagram", href: site.social.instagram },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href));

  const links = [...t.nav.map((n) => ({ ...n, href: `${t.home}${n.href}` })), { href: t.menuHref, label: t.header.fullMenu }];

  return (
    <footer className="border-t-2 border-ink pb-24 md:pb-0">
      <div className="mx-auto max-w-[92rem] px-4 pt-12 pb-10 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Wordmark as="p" className="text-[1.7rem] sm:text-[2.2rem]" />
            <p className="mt-3 max-w-[34ch] font-editorial text-ink-soft">{t.footer.tagline}</p>
            <a href={t.switchTo.href} hrefLang={t.switchTo.lang} lang={t.switchTo.lang} className="mt-5 inline-block link-ink">
              {t.switchTo.label}
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <p className="label text-ink-soft">{t.footer.shop}</p>
            <ul className="mt-3 space-y-1.5">
              {links.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-paprika">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label text-ink-soft">{t.footer.visit}</p>
            <address className="mt-3 not-italic">
              <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="hover:text-paprika">
                {t.header.streetLine}
                <br />
                {t.header.cityLine} {site.address.postalCode}
              </a>
              <br />
              <a href={telHref} dir="ltr" className="mt-2 inline-block tabular-nums hover:text-paprika">
                {site.phone.display}
              </a>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="label text-ink-soft">{t.footer.hours}</p>
            {site.hours ? (
              <>
                <OpenNow locale={t.locale} className="mt-3" />
                <HoursList locale={t.locale} className="mt-3 space-y-1" />
              </>
            ) : (
              <p className="mt-3">
                <a href={telHref} className="hover:text-paprika">
                  {t.footer.callHours}
                </a>
              </p>
            )}
            {socials.length > 0 && (
              <ul className="mt-5 flex flex-col gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <MaybeLink href={s.href} className="inline-flex items-center gap-2 hover:text-paprika">
                      <SocialIcon name={s.label} />
                      <span className="label">{s.label}</span>
                    </MaybeLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-4 border-t border-rule pt-5">
          <p className="label text-ink-soft">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="flex items-baseline gap-3 text-ink-soft">
            <span lang="ar" dir="rtl" className="font-arabic text-2xl text-paprika">
              {t.footer.sahteinScript}
            </span>
            <span className="font-editorial italic">{t.footer.sahtein}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
