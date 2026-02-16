import { MapPin } from "lucide-react";

export function WhyLaak() {
  return (
    <section className="py-20 md:py-28 bg-[#00BBF9]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F15BB5]/10 text-[#F15BB5]">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F15BB5]">
              Waarom Laak
            </p>
          </div>

          <h2 className="mt-6 font-heading text-2xl font-bold tracking-tight text-card-foreground md:text-3xl text-balance">
            Gestart in de wijk Laak, Den Haag
          </h2>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Laak is een jonge en diverse wijk. Er wonen veel jongeren met
              idee&euml;n, energie en talent. Tegelijk zijn er minder kansen en
              minder toegang tot netwerken en digitale kennis.
            </p>
            <p>
              Door te starten in Laak werken we dichtbij huis. Zo bouwen we
              samen aan oplossingen die passen bij de wijk en bijdragen aan een
              duurzame toekomst voor de stad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
