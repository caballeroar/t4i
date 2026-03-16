import { School, Building, Landmark, Heart } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    src: "/assets/gemeente.svg",
    label: "Municipality of The Hague",
  },
  {
    src: "/assets/jcp.svg",
    label: "Just Common People",
  },
  {
    src: "/assets/logo.svg",
    label: "Duurzame Den Haag",
  },
  {
    src: "/assets/theater.svg",
    label: "Laak Theater",
  },
  {
    src: "/assets/ac.svg",
    label: "Amel Caballero Product Design",
  },
];

export function Partners() {
  return (
    <section
      id="samenwerken"
      className="relative overflow-hidden my-20 py-20 md:py-32 lg:py-40 xl:pt-[18%] xl:pb-[26%]"
      style={{
        backgroundImage: "url(/assets/Ellipse_white.svg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 mx-auto w-5/6 max-w-5xl space-y-16">
        <div className="flex items-center justify-center gap-4 -rotate-2 text-center">
          <Image
            className="-rotate-6"
            src="/assets/Scribble.svg"
            alt="Programme"
            width={72}
            height={72}
          />
          <h2 className="mt-3 font-heading text-xl font-bold tracking-base uppercase sm:text-3xl md:text-4xl lg:text-5xl">
            Collaborate
          </h2>
          <Image
            src="/assets/Scribble-1.svg"
            alt="Programme"
            width={72}
            height={72}
          />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-10">
          <p className="font-semibold text-lg md:text-xl">
            Tech for Impact brings together people and organisations who believe
            that technology and collaboration can help address real social and
            environmental challenges in the city.
          </p>
          <div className="relative w-full overflow-hidden aspect-video">
            <Image
              src="/assets/SDG.svg"
              alt="Programme"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-semibold text-lg md:text-xl">
            The programme is built on collaboration and reflects the spirit of
            United Nations Sustainable Development Goal 17: Partnerships for the
            Goals.
          </p>
        </div>

        <div className="space-y-8 text-center">
          <p className=" text-md">
            We work with partners who share a commitment to long-term community
            impact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((item) => (
              <Image
                src={item.src}
                alt={item.label}
                width={100}
                height={100}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-4/6 mx-auto justify-center my-40 gap-6 text-center lg:flex-row lg:gap-4">
        <Image
          src="/assets/star_pink.svg"
          alt="Star"
          width={60}
          height={100}
          className="object-contain aspect-square"
        />
        <div className="space-y-3 lg:w-3/6">
          <h5 className="text-xl lg:text-start font-semibold">
            Interested in collaborating with Tech for Impact?
          </h5>
          <p className="text-base lg:text-start">
            We welcome people, organisations, and initiatives that want to share
            challenges, mentor teams, or support the development of new
            solutions.
          </p>
        </div>
        <button className="rounded-xl bg-[#FFF200] self-center px-10 py-5 font-semibold text-lg transition hover:-translate-y-0.5">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
