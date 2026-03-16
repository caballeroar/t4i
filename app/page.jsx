import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ForWhom } from "@/components/for-whom";
import { WhatWeDo } from "@/components/what-we-do";
import { Impact } from "@/components/impact";
import { Partners } from "@/components/partners";
import { WhyLaak } from "@/components/why-laak";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="  bg-[#1FC7FF]">
        <Hero />
        <WhatWeDo />
        <WhyLaak />
        <div
          className="absolute w-full h-full left-[-5%]"
          style={{
            backgroundImage: 'url("/assets/Star_pink.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
        <ForWhom />

        <Partners />
        <Impact />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
