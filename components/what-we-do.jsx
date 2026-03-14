import Image from "next/image";
import { Pill } from "./ui/pill";

const activities = [
  {
    src: "/assets/Discover.svg",
    text: "Explore the neighbourhood and learn from residents and local initiatives.",
  },
  {
    src: "/assets/Define.svg",
    text: "Identify opportunities where technology could support community work.",
  },
  {
    src: "/assets/Build.svg",
    text: "Develop and test prototypes that respond to real needs.",
  },
  {
    src: "/assets/Showcase.svg",
    text: "Present solutions to local organisations, investors and other stakeholders.",
  },
];
const snapshot = [
  {
    number: "10",
    text: "weeks",
  },
  {
    number: "4",
    text: "interdisciplinary teams",
  },
  {
    number: "16",
    text: "participants",
  },
  {
    number: "4",
    text: "neighbourhood initiatives",
  },
];

export function WhatWeDo() {
  return (
    <section id="wat-we-doen" className="py-20 md:py-28 ">
      <div className="flex flex-col  gap-10 w-4/6 mx-auto ">
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
        <div className="w-4/6 justify-start flex flex-col gap-10 items-center">
          <p className="mt-3 text-xl font-bold tracking-base transform -rotate-3 md:text-2xl text-balance">
            Join a 10-week innovation journey working in small interdisciplinary
            teams to collaborate with local initiatives for exploring challenges
            such as
          </p>
          <Image
            src="/assets/Arrow_1.svg"
            alt="Arrow"
            width={100}
            height={100}
          />
        </div>
        <div className="mx-auto flex flex-col gap-8">
          <div>
            <Pill
              className="transform -rotate-3"
              text="Sustainable Food"
              color="#F15BB5"
            />
            <Pill
              className="transform rotate-3"
              text="Climate Resilience"
              color="#F15BB5"
            />
          </div>
          <div>
            <Pill
              className="transform -rotate-3"
              text="Cleaner Neighbourhoods"
              color="#F15BB5"
            />
            <Pill
              className="transform -rotate-3"
              text="Climate Justice"
              color="#F15BB5"
            />
          </div>
        </div>
      </div>

      <div className="w-4/6 mx-auto py-20">
        <div className="transform -rotate-2">
          <h4 className="text-xl ">
            Together we move through <strong>four</strong> stages
          </h4>

          <Image
            src="/assets/underline.svg"
            alt="Underline"
            width={1200}
            height={20}
            className="w-3/6 h-auto"
          />
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {activities.map((item) => (
            <div
              key={item.text}
              className="flex flex-col h-full items-start p-6"
            >
              <Image src={item.src} alt={item.text} width={240} height={240} />
              <p className="text-2xl w-5/6 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-4/6 mx-auto py-20 min-h-[360px]">
        <p className="absolute font-heading text-2xl text-[#FFF200] transform -rotate-6">
          snapshot
        </p>
        <Image
          src="/assets/circled.svg"
          alt="Underline"
          fill
          className="transform -rotate-3"
        />

        <div className="flex justify-center gap-6 mt-10">
          {snapshot.map((item) => (
            <div
              key={item.text}
              className="flex flex-col h-full w-1/6 items-center justify-center p-6 text-[#FFF200]"
            >
              <p className="text-6xl text-center w-5/6 font-bold">
                {item.number}
              </p>
              <p className="text-xl text-center font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6 w-3/6 mx-auto py-10">
        <Image
          src="/assets/Clock.svg"
          alt="Clock"
          width={160}
          height={160}
          className="transform -rotate-3"
        />
        <div className="flex flex-col ">
          <h5 className="font-semibold text-2xl">Time commitment</h5>
          <p className="text-lg  text-pretty">
            3 to 4 hours per week, including a weekly session (usually on
            Saturdays) and some team collaboration in between.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 py-20 px-10 w-3/6 mx-auto">
        <p className="font-semibold text-3xl text-center text-pretty">
          Small enough for meaningful collaboration. Big enough for real impact.
        </p>
        <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}
