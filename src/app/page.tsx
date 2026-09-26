import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallBar } from "@/components/CallBar";
import { Hero } from "@/components/sections/Hero";
import { Market } from "@/components/sections/Market";
import { Bakery } from "@/components/sections/Bakery";
import { Kitchen } from "@/components/sections/Kitchen";
import { Catering } from "@/components/sections/Catering";
import { About } from "@/components/sections/About";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Market />
        <Bakery />
        <Kitchen />
        <Catering />
        <About />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
