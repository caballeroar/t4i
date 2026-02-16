import { TrendingUp, Brain, Handshake, Sparkles, Building2 } from "lucide-react"

const impacts = [
  {
    icon: TrendingUp,
    text: "Meer digitale en toekomstgerichte vaardigheden bij jongeren",
  },
  {
    icon: Brain,
    text: "Meer bewustzijn over duurzaamheid en maatschappelijke vraagstukken",
  },
  {
    icon: Sparkles,
    text: "Meer zelfvertrouwen en perspectief op werk en opleiding",
  },
  {
    icon: Handshake,
    text: "Sterkere verbinding tussen jongeren, wijk en stad",
  },
  {
    icon: Building2,
    text: "Duurzame investering in talent en lokale ontwikkeling",
  },
]

export function Impact() {
  return (
    <section id="impact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Onze impact
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Wat jongeren hier leren, nemen zij mee naar hun toekomst
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Tech for Impact draagt bij aan een sterkere, meer verbonden en duurzame samenleving.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-card-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
