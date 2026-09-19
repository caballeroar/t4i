import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { HeroVideo } from "@/components/hero-video";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 z-0 h-[180vw] w-[180vw] max-h-[900px] max-w-[900px] -translate-x-1/2 rounded-full bg-white sm:h-[800px] sm:w-[800px] lg:h-[900px] lg:w-[900px] xl:h-[1000px] xl:w-[1000px]"
      />

      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-center justify-items-center gap-8 pt-16 px-4 text-center lg:grid-cols-[3fr_2fr] lg:justify-items-stretch lg:gap-12 lg:text-left">
        <div className="flex flex-col items-center  lg:items-start">
          <h1 className="font-heading -rotate-2 text-3xl font-bold leading-[0.95] tracking-[0.02em] text-primary-foreground sm:text-5xl lg:text-5xl xl:text-6xl">
            <span className="text-[#F15BB5]">Global </span>
            <span className="text-foreground">talent.</span>
            <br />
            <span className="text-[#F15BB5]">Local </span>
            <span className="text-foreground">solutions.</span>
          </h1>

          <p className="mt-6 max-w-md -rotate-2 text-sm font-semibold leading-relaxed sm:text-base lg:max-w-lg lg:text-lg">
            Tech 4 Impact is a community-driven initiative in The Hague,
            connecting international talent with local organisations to develop
            technology-based solutions to social and environmental challenges.
            We support existing initiatives and explore how new ideas and tools
            can strengthen their impact.
          </p>

          <div className="mt-8 flex w-full max-w-sm rotate-2 flex-col items-center gap-3 sm:max-w-md sm:flex-row sm:justify-center sm:gap-4 lg:max-w-none lg:justify-start">
            <p className="text-sm font-semibold leading-snug sm:text-base">
              Ready to team up for local impact?
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#FFF200] px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-80 sm:px-6 sm:py-3.5 sm:text-base"
            >
              Join the Programme <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 w-full rotate-2 max-w-sm sm:max-w-md lg:mt-0 lg:max-w-none">
          <HeroVideo youtubeUrl="https://www.youtube.com/watch?v=eMbz1DxKinY" />
        </div>
      </div>

      {/* <div className="relative z-10 mt-10 flex flex-col items-center lg:absolute lg:bottom-8 lg:right-8 lg:mt-0">
        <Image
          src="/assets/jcp_long.svg"
          alt="Just Common People logo"
          width={320}
          height={80}
          className="h-auto w-40 sm:w-40 md:w-48"
        />
        <p className="text-xs font-medium md:text-sm">
          Powered by Just Common People
        </p>
      </div> */}
    </section>
  );
}
