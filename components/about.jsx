import Image from "next/image";

const info = [
  {
    src: "/assets/Star.svg",
    text1:
      "Works on community driven sustainability, social innovation and collaborative urban initiatives. His work focuses on bringing together community initiatives, institutions and innovators to create collaborations that lead to meaningful and lasting change.",
    text2:
      "At Tech for Impact he leads the social and environmental impact side of the programme. He connects participants with neighbourhood initiatives and helps teams understand the local context so that projects respond to real community needs.",
    name: "Jay Navarro Oviedo",
    class: "transform -rotate-2",
  },
  {
    src: "/assets/Star.svg",
    text1:
      "Works at the intersection of technology, creativity, and social innovation. He believes technology is most powerful when it is developed alongside the people it is meant to serve.",
    text2:
      "At Tech for Impact he leads the technology and design side of the programme. He supports participants in translating ideas into tangible concepts and prototypes, and helps teams explore how digital tools and design methods can support real-world challenges.",
    name: "Amel Caballero",
    class: "transform rotate-2",
  },
];

export function About() {
  return (
    <section id="over-ons" className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="/assets/Star.svg"
        alt="Star"
        width={200}
        height={200}
        className="absolute z-5 top-0 right-[-28%] md:w-[300px] md:h-[300px] sm:right-[5%]"
      />
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

      <div className="mx-auto flex flex-col md:flex-row mt-[-40%] md:w-5/6 md:mt-[-20%] gap-12 md:justify-between">
        {info.map((item, index) => (
          <div
            key={`${item.text1}-${index}`}
            className={`w-4/6 md:w-2/6 mx-auto flex flex-col justify-start py-20 gap-4 ${item.class}`}
          >
            <Image
              src={item.src}
              alt="Background pattern"
              width={160}
              height={160}
              className=" rounded-full object-contain aspect-square"
            />
            <h5 className="font-heading text-md">{item.name}</h5>

            <p>{item.text1}</p>

            <p>{item.text2}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
