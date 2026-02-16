import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#00BBF9] pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Subtle decorative circle */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white  md:h-[1100px] md:w-[1100px]"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="mb-4 inline-block rounded-full border border-[#F15BB5]/30 bg-[#F15BB5]/10 px-4 py-1.5 text-sm font-medium text-[#F15BB5]">
          Den Haag &middot; Wijk Laak
        </p>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
          <span className="text-foreground">Technologie voor een</span>
          <br />
          <span className="text-[#00BBF9]">eerlijke en duurzame</span>
          <br />
          <span className="text-[#00BBF9]">toekomst</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70 md:text-xl">
          Wij helpen jongeren om hun talent te ontwikkelen met technologie en om
          mee te bouwen aan een eerlijke en duurzame stad.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="#wat-we-doen"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFF200] px-6 py-3.5 text-base font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Ontdek wat we doen
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#samenwerken"
            className="inline-flex items-center justify-center gap-2 text-base font-medium text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Samenwerken
          </a>
        </div>

        <p className="mt-10 text-sm text-foreground/50">
          Een initiatief gestart in Den Haag, voor jongeren van 12-18 jaar
        </p>
      </div>
    </section>
  );
}
