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
      id="collaborate"
      className="relative overflow-hidden my-20 py-20 md:py-32 lg:py-40 xl:py-[16%] "
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
            Tech 4 Impact brings together people and organisations who believe
            that technology and collaboration can help address social and
            environmental challenges in the city.
          </p>
          <div className="relative w-full overflow-hidden aspect-video max-h-[380px]">
            <Image
              src="/assets/SDG.svg"
              alt="Programme"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-semibold text-lg md:text-xl">
            The programme is built on collaboration and reflects the spirit of
            United Nations Sustainable Development{" "}
            <span className="underline">
              Goal 17: Partnerships for the Goals.
            </span>
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
                key={item.label}
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

      <div className="flex flex-col w-4/6 mx-auto justify-center align-center my-40 gap-6 text-center lg:flex-row lg:gap-4">
        <Image
          src="/assets/star_pink.svg"
          alt="Star"
          width={60}
          height={100}
          className="object-contain aspect-square"
        />
        <h5 className="text-xl lg:text-start font-semibold">
          Interested in collaborating with Tech 4 Impact?
        </h5>

        <a
          href="#contact"
          className="inline-flex self-center items-center justify-center gap-2 rounded-lg bg-[#FFF200] px-6 py-3.5 text-base font-semibold text-foreground transition-opacity hover:opacity-80"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
