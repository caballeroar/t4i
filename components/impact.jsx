import Image from "next/image";
import { Pill } from "./ui/pill";

const cards = [
  {
    src: "/assets/9.svg",
    title: "Industry, Innovation and Infrastructure",
    text: "Exploring how technology and innovation can support communities and local initiatives.",
  },
  {
    src: "/assets/11.svg",
    title: "Sustainable Cities and Communities",
    text: "Supporting stronger communities and neighbourhoods.",
  },
  {
    src: "/assets/13.svg",
    title: "Climate Action",
    text: "Exploring ideas related to sustainability and climate resilience.",
  },
  {
    src: "/assets/17.svg",
    title: "Partnerships for the Goals",
    text: "Building collaborations between communities, organisations and international talent.",
  },
];

const pills = [
  {
    text: "Develop practical solutions for local challenges",
    class: "transform -rotate-3",
  },
  {
    text: "Support local initiatives with new ideas",
    class: "transform rotate-2",
  },
  {
    text: "Connect internationals with local communities",
    class: "transform rotate-3",
  },
  {
    text: "Build a network working on local impact",
    class: "transform -rotate-2",
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden my-20 py-20 md:py-32 lg:py-40 xl:py-[18%]"
      style={{
        backgroundImage: "url(/assets/Ellipse_yellow.svg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-center rotate-2">
          <Image
            className="transform -rotate-6"
            src="/assets/Face.svg"
            alt="Programme"
            width={72}
            height={72}
          />
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-base uppercase sm:text-3xl md:text-4xl lg:text-5xl">
            Our Impact
          </h2>
        </div>
        <div className="flex flex-col mt-10 items-center space-y-10 md:w-5/6 mx-auto">
          <p className="text-lg text-center md:text-xl text-balance lg:w-4/5">
            Tech 4 Impact contributes to several of the United Nations
            Sustainable Development Goals, translating global ambitions into
            local action in The Hague. In particular we contribute to the
            following local impact goals:
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((item, index) => (
              <div
                key={`${item.text}-${index}`}
                className="flex flex-col h-full gap-4 rounded-lg bg-white p-6 lg:flex-row "
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <div className="gap-6">
                  <p className="text-xs my-2">{item.title}</p>
                  <p className="text-md mt-4 font-semibold text-slate-900">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 py-10 text-center ">
          <p className="text-lg font-semibold text-balance md:text-xl">
            Each cohort brings together around 16 participants working in small
            interdisciplinary teams with local initiatives in The Hague.
            Together we aim to
          </p>
          <div className="flex flex-col items-center my-20">
            {pills.map((item, index) => (
              <Pill
                key={`${item.text}-${index}`}
                showStar
                text={item.text}
                textColor="#000000"
                className={item.class}
                maxWidth="800px"
              />
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex self-center items-center justify-center gap-2 rounded-lg bg-[#F15BB5] px-6 py-3.5 text-base font-semibold text-foreground transition-opacity hover:opacity-80"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
