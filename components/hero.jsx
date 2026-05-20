import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="relative min-h-[100vh] sm:min-h-[600px] lg:min-h-[800px] xl:min-h-[800px]">
          <div className="absolute left-[-28%] md:top-[-38%] md:left-[-10%] flex h-[600px] w-[600px] flex-col items-center justify-center rounded-full bg-white text-center sm:h-[700px] sm:w-[700px] md:h-[800px] md:w-[800px] lg:h-[1000px] lg:w-[1000px] xl:h-[1100px] xl:w-[1100px]">
            <div className="z-10 flex w-full max-w-4xl flex-col items-center text-start mt-30 md:mt-40">
              <h1 className="w-full max-w-xs px-4 mt-24 font-heading -rotate-2 text-2xl font-bold leading-[0.95] tracking-[0.02em] text-primary-foreground sm:max-w-md sm:px-0 sm:text-4xl md:mt-32 md:max-w-xl md:text-5xl lg:max-w-4xl lg:text-6xl xl:text-7xl">
                <span className="text-[#F15BB5]">Global </span>
                <span className="text-foreground">talent.</span>
                <br />
                <span className="text-[#F15BB5]">Local </span>
                <span className="text-foreground">solutions.</span>
              </h1>
              <p className="w-full max-w-xs px-4 text-sm font-semibold leading-relaxed my-8 -rotate-2 sm:max-w-md sm:text-base sm:px-0 md:max-w-xl md:text-lg lg:max-w-2xl lg:text-xl">
                Tech 4 Impact is a community-driven initiative in The Hague,
                connecting international talent with local organisations to
                develop technology-based solutions to social and environmental
                challenges. We support existing initiatives and explore how new
                ideas and tools can strengthen their impact.{" "}
              </p>

              <div className="w-full max-w-xs px-4 mt-8 flex flex-col items-start gap-3 rotate-2 sm:mt-10 sm:max-w-md sm:flex-row sm:items-center sm:gap-4 sm:px-0 md:max-w-xl lg:max-w-2xl">
                <p className="max-w-[18rem] text-sm font-semibold leading-snug sm:max-w-none sm:text-base">
                  Ready to team up for local impact?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFF200] px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-80 sm:px-6 sm:py-3.5 sm:text-base"
                >
                  Join the Programme <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
