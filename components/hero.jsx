import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-foreground pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Subtle decorative circle */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/80">
          Den Haag &middot; Wijk Laak
        </p>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">Technologie voor een</span>
          <br />
          <span className="text-primary">eerlijke en duurzame</span>
          <br />
          <span className="text-balance">toekomst</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
          Wij helpen jongeren om hun talent te ontwikkelen met technologie en om mee te bouwen aan
          een eerlijke en duurzame stad.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#wat-we-doen"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ontdek wat we doen
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#samenwerken"
            className="inline-flex items-center justify-center gap-2 text-base font-medium text-primary-foreground/70 underline underline-offset-4 transition-colors hover:text-primary-foreground"
          >
            Samenwerken
          </a>
        </div>

        <p className="mt-10 text-sm text-primary-foreground/50">
          Een initiatief gestart in Den Haag, voor jongeren van 12-18 jaar
        </p>
      </div>
    </section>
  )
}
