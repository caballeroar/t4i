import Image from "next/image";

export function About() {
  return (
    <section id="over-ons" className="py-20 md:py-28">
      <div
        className="relative overflow-hidden mx-auto lg:max-w-[1100px] lg:max-h-[1100px] lg:-left-[10%] lg:aspect-square lg:rounded-full my-20 w-full px-6 py-20 sm:py-[30%] lg:py-40"
        style={{
          backgroundImage: "url(/assets/Ellipse_white.svg)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="ml-4 flex -rotate-6 gap-4 md:ml-20 lg:ml-48">
            <Image
              className="transform -rotate-6"
              src="/assets/Eyes.svg"
              alt="Programme"
              width={72}
              height={72}
            />
            <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-base text-[#F15BB5] md:text-5xl">
              About
            </h2>
          </div>

          <div className="mt-16 flex flex-col gap-6 px-4 py-10 text-[#F15BB5] md:ml-20 md:w-4/6 lg:ml-32">
            <p className="ml-8 text-start text-xl font-semibold text-balance transform -rotate-2 md:text-xl">
              We believe meaningful innovation starts with listening to
              communities and working together to build solutions that matter.
            </p>
            <p className="ml-12 mt-6 text-start text-lg text-balance transform rotate-1 md:text-xl">
              Tech for Impact is a community-driven innovation initiative based
              in The Hague.
            </p>
            <p className="ml-16 mt-6 text-start text-lg text-balance transform -rotate-2 md:text-xl">
              The programme connects international talent with residents,
              neighbourhood initiatives and organisations to develop
              technology-based solutions for social and environmental
              challenges.
            </p>
            <p className="ml-20 mt-6 text-start text-lg text-balance transform rotate-2 md:text-xl">
              By bringing together community knowledge, technology and creative
              thinking, Tech for Impact turns the neighbourhood into a living
              lab for inclusive urban innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
