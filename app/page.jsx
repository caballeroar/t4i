import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ForWhom } from "@/components/for-whom";
import { WhatWeDo } from "@/components/what-we-do";
import { HowWeWork } from "@/components/how-we-work";
import { Impact } from "@/components/impact";
import { Partners } from "@/components/partners";
import { WhyLaak } from "@/components/why-laak";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-[#1FC7FF]">
        <Hero />
        <WhatWeDo />
        <WhyLaak />
        <ForWhom />
        <HowWeWork />
        <Impact />
        <Partners />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
