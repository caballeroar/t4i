import {
  TrendingUp,
  Brain,
  Handshake,
  Sparkles,
  Building2,
} from "lucide-react";
import Image from "next/image";

const cards = [
  {
    icon: TrendingUp,
    title: "Tech for Impact contributes to the following impact goals:",
    text: "Meer digitale en toekomstgerichte vaardigheden bij jongeren",
  },
  {
    icon: Brain,
    title: "Tech for Impact contributes to the following impact goals:",
    text: "Meer bewustzijn over duurzaamheid en maatschappelijke vraagstukken",
  },
  {
    icon: Sparkles,
    title: "Tech for Impact contributes to the following impact goals:",
    text: "Meer zelfvertrouwen en perspectief op werk en opleiding",
  },
  {
    icon: Handshake,
    title: "Tech for Impact contributes to the following impact goals:",
    text: "Sterkere verbinding tussen jongeren, wijk en stad",
  },
];

export function Impact() {
  return (
    <section
      id="samenwerken"
      className="relative overflow-hidden py-20 md:py-32 lg:py-40 xl:py-[18%]"
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
          <h2 className="mt-3 font-heading text-xl font-bold tracking-base uppercase sm:text-3xl md:text-4xl lg:text-5xl">
            Impact
          </h2>
        </div>
        <div>
          <p className="text-lg md:text-xl">
            Tech for Impact contributes to several of the United Nations
            Sustainable Development Goals, translating global ambitions into
            local action in The Hague. In particular we contribute to
          </p>
          <div className="mx-auto flex flex-col w-5/6 gap-2 flex-wrap sm:flex-row justify-center items-center xl:w-4/6">
            {card.map((item) => (
              <div></div>
            ))}
          </div>
        </div>
        <div>
          <p>
            Tech for Impact brings together people and organisations who believe
            that technology and collaboration can help address real social and
            environmental challenges in the city.
          </p>
          <div>
            {cards.map((item) => (
              <div
                key={item.label}
                className="flex flex-col h-full items-start p-6"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={240}
                  height={240}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image src="/assets/star.svg" alt="Star" width={240} height={240} />
          <div>
            <h5 className="text-2xl w-5/6 font-medium">
              Interested in collaborating with Tech for Impact?
            </h5>
            <p>
              We welcome people, organisations and initiatives that want to
              share challenges, mentor teams, or support the development of new
              solutions.
            </p>
          </div>
          <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
