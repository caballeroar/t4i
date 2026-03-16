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
];
const pills = [
  {
    text: "Young professional working in technology, design or sustainability",
  },
  {
    text: "Expats who wants to connect with local initiatives",
  },
  {
    text: "Someone curious about technology for social good",
  },
  {
    text: "Someone with a migration background interested in innovation",
  },
];

export function Impact() {
  return (
    <section id="samenwerken" className="bg-white ">
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
        <div>
          <p>
            ;Tech for Impact brings together people and organisations who
            believe that technology and collaboration can help address real
            social and environmental challenges in the city.
          </p>
          <Image
            className="transform -rotate-6"
            src="/assets/Scribble.svg"
            alt="Programme"
            width={72}
            height={72}
          />
          <p>
            ;The programme is built on collaboration and reflects the spirit of
            United Nations Sustainable Development Goal 17: Partnerships for the
            Goals, which recognises that meaningful change happens when
            organisations, communities and individuals work together.
          </p>
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
