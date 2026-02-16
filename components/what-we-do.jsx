import { Monitor, UsersRound, Leaf, HeartHandshake, Compass } from "lucide-react"

const activities = [
  {
    icon: Monitor,
    text: "Praktische workshops en trainingen met digitale tools",
  },
  {
    icon: UsersRound,
    text: "Leren door doen, in kleine groepen",
  },
  {
    icon: Leaf,
    text: "Aandacht voor thema's zoals duurzaamheid, werk en maatschappelijke impact",
  },
  {
    icon: Compass,
    text: "Begeleiding die past bij het tempo en de leefwereld van jongeren",
  },
  {
    icon: HeartHandshake,
    text: "Samenwerking met scholen en wijkorganisaties",
  },
]

export function WhatWeDo() {
  return (
    <section id="wat-we-doen" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          {/* Left column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Wat we doen
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Leertrajecten waar technologie, toekomst en duurzaamheid samenkomen
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Wij organiseren leertrajecten waarin technologie, toekomst en duurzaamheid
              samenkomen. Alles is begrijpelijk, toepasbaar en gericht op de praktijk.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {activities.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-card-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
