import { Lightbulb, Users, Globe } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Lightbulb,
    title: "Innovatie",
    description:
      "Wij geloven dat technologie kan helpen bij grote vragen van deze tijd. Maar alleen als iedereen mee kan doen.",
  },
  {
    icon: Users,
    title: "Inclusie",
    description:
      "Door te starten in Laak werken we dichtbij huis. Samen bouwen we aan oplossingen die passen bij de wijk.",
  },
  {
    icon: Globe,
    title: "Duurzaamheid",
    description:
      "We verbinden technologie aan echte maatschappelijke thema's zoals duurzaamheid, werk en toekomst.",
  },
];

export function About() {
  return (
    <section id="over-ons" className="py-20 md:py-28 bg-[#FFF200]/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-end rotate-2">
          <Image
            className="transform -rotate-6"
            src="/assets/Scribble.svg"
            alt="Programme"
            width={72}
            height={72}
          />
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-base uppercase  md:text-5xl ">
            The Programme
          </h2>
          <Image
            src="/assets/Scribble-1.svg"
            alt="Programme"
            width={72}
            height={72}
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F15BB5]/10 text-[#F15BB5] transition-colors group-hover:bg-[#F15BB5] group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-card-foreground">
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
