import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative min-h-[520px] sm:min-h-[760px] lg:min-h-[1120px]">
          <div className="absolute left-[-16%] top-[-30%] md:top-[-40%] flex h-[500px] w-[500px] flex-col items-center justify-center rounded-full bg-white text-center sm:h-[700px] sm:w-[700px] md:h-[800px] md:w-[800px] lg:h-[1000px] lg:w-[1000px] xl:h-[1100px] xl:w-[1100px]">
            <div className="z-10 flex w-full max-w-4xl flex-col items-center text-start mt-30 md:mt-40">
              <h1 className="mt-40 font-heading -rotate-2 text-2xl font-bold tracking-wide text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
                <span className="text-[#F15BB5]">Global </span>
                <span className="text-foreground">talent.</span>
                <br />
                <span className="text-[#F15BB5]">Local </span>
                <span className="text-foreground">solutions.</span>
              </h1>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#wat-we-doen"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFF200] px-6 py-3.5 text-base font-semibold text-foreground transition-opacity hover:opacity-80"
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
