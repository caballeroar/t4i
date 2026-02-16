import { School, Building, Landmark, Heart } from "lucide-react";

const partners = [
  {
    icon: School,
    label: "Scholen en onderwijsinstellingen",
  },
  {
    icon: Building,
    label: "Wijkorganisaties en jongerenwerk",
  },
  {
    icon: Landmark,
    label: "Gemeente Den Haag",
  },
  {
    icon: Heart,
    label: "Fondsen en maatschappelijke financiers",
  },
];

export function Partners() {
  return (
    <section id="samenwerken" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#00BBF9]">
              Samenwerken
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl text-balance">
              Samen zorgen we dat technologie bijdraagt aan een eerlijke stad
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Samen zorgen we dat technologie bijdraagt aan een eerlijke,
              duurzame en inclusieve stad. Tech for Impact werkt samen met
              partijen die dezelfde visie delen.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {partners.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00BBF9]/10 text-[#00BBF9]">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-card-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
