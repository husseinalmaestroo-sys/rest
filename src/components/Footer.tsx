import { nav, site, telHref, directionsHref } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const socials = [
    { label: "Facebook", href: site.social.facebook },
    { label: "Instagram", href: site.social.instagram },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href));

  return (
    <footer className="border-t-2 border-ink pb-24 md:pb-0">
      <div className="mx-auto max-w-[92rem] px-4 pt-12 pb-10 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Wordmark as="p" className="text-[1.7rem] sm:text-[2.2rem]" />
            <p className="mt-3 max-w-[34ch] font-editorial text-ink-soft">
              Middle Eastern market, bakery, prepared food and catering in Orland Park, Illinois.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <p className="label text-ink-soft">The shop</p>
            <ul className="mt-3 space-y-1.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-paprika">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label text-ink-soft">Visit</p>
            <address className="mt-3 not-italic">
              <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="hover:text-paprika">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </a>
              <br />
              <a href={telHref} className="mt-2 inline-block tabular-nums hover:text-paprika">
                {site.phone.display}
              </a>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="label text-ink-soft">Hours</p>
            {site.hours ? (
              <ul className="mt-3 space-y-1">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.hours}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3">
                <a href={telHref} className="hover:text-paprika">
                  Call for today&rsquo;s hours
                </a>
              </p>
            )}
            {socials.length > 0 && (
              <ul className="mt-5 flex gap-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="label link-ink">
                      {s.label}
                    </a>
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
              صحتين
            </span>
            <span className="font-editorial italic">Sahtein — to your health.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
