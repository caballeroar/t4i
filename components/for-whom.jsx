import { GraduationCap, School, Building, Landmark } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Jongeren",
    description:
      "Jongeren die willen leren, groeien en nadenken over hun toekomst en hun rol in de samenleving.",
  },
  {
    icon: School,
    title: "Scholen",
    description:
      "Scholen die jongeren praktische vaardigheden willen meegeven en aandacht hebben voor duurzaamheid en burgerschap.",
  },
  {
    icon: Building,
    title: "Wijkorganisaties",
    description:
      "Organisaties die dichtbij jongeren staan en samen willen werken aan sterke en inclusieve wijken.",
  },
  {
    icon: Landmark,
    title: "Gemeente en financiers",
    description:
      "Partijen die willen investeren in gelijke kansen, duurzame ontwikkeling en maatschappelijke impact in Den Haag.",
  },
];

export function ForWhom() {
  return (
    <section id="voor-wie" className="bg-[#00BBF9] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FFF200]">
            Voor wie
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl text-balance">
            We werken samen met iedereen die verschil wil maken
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F15BB5]/10 text-[#F15BB5] transition-colors group-hover:bg-[#F15BB5] group-hover:text-[#FFFFFF]">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
