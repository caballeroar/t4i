const steps = [
  {
    number: "01",
    title: "Luisteren",
    description:
      "We luisteren naar jongeren en sluiten aan bij hun interesses en leefwereld.",
  },
  {
    number: "02",
    title: "Verbinden",
    description:
      "We werken samen met bestaande initiatieven in de wijk en verbinden leren aan echte maatschappelijke thema's.",
  },
  {
    number: "03",
    title: "Bouwen",
    description:
      "We denken in lange termijn impact, niet in losse activiteiten. Zo zorgen we dat kennis blijft hangen en wordt doorgegeven.",
  },
];

export function HowWeWork() {
  return (
    <section className=" py-20 md:py-28 bg-[#FFF200]/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F15BB5]">
            Hoe we werken
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl text-balance">
            Onze aanpak is lokaal en mensgericht
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-border md:block"
                />
              )}

              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-sm border border-border">
                <span className="font-heading text-2xl font-bold text-[#F15BB5]">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-secondary-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
