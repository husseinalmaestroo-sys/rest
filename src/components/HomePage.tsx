import { dictionaries, type Locale } from "@/content/i18n";
import { CallBar } from "./CallBar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { About } from "./sections/About";
import { Bakery } from "./sections/Bakery";
import { Catering } from "./sections/Catering";
import { Faq } from "./sections/Faq";
import { FreshToday, loadFreshToday } from "./sections/FreshToday";
import { Hero } from "./sections/Hero";
import { Kitchen } from "./sections/Kitchen";
import { Location } from "./sections/Location";
import { Market } from "./sections/Market";
import { Reviews } from "./sections/Reviews";
import { SeasonBanner } from "./sections/SeasonBanner";

export async function HomePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const fresh = await loadFreshToday();

  return (
    <>
      <Header locale={locale} />
      <SeasonBanner t={t} />
      <main id="main">
        <Hero t={t} />
        {fresh && <FreshToday t={t} items={fresh[locale]} />}
        <Market locale={locale} />
        <Bakery t={t} />
        <Kitchen t={t} />
        <Catering t={t} />
        <About t={t} />
        <Reviews t={t} />
        <Faq t={t} />
        <Location t={t} />
      </main>
      <Footer t={t} />
      <CallBar t={t} />
    </>
  );
}
