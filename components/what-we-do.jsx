import Image from "next/image";
import { Pill } from "./ui/pill";

const pills = [
  { text: "Sustainable Food", class: "transform -rotate-3" },
  { text: "Climate Resilience", class: "transform rotate-3" },
  { text: "Cleaner Neighbourhoods", class: "transform rotate-3" },
  { text: "Climate Justice", class: "transform -rotate-3" },
];

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
      <div className="mx-auto w-full flex flex-col items-center md:gap-8 lg:w-5/6  ">
        <div className="flex items-center justify-center rotate-2 md:justify-end">
          <Image
            className="transform -rotate-6"
            src="/assets/Scribble.svg"
            alt="Programme"
            width={72}
            height={72}
          />
          <h2 className="mt-3 font-heading text-xl font-bold tracking-base uppercase sm:text-3xl md:text-4xl lg:text-5xl">
            The Programme
          </h2>
          <Image
            src="/assets/Scribble-1.svg"
            alt="Programme"
            width={72}
            height={72}
          />
        </div>

        <p className="mt-12 w-5/6 text-xl font-bold tracking-base transform -rotate-3 md:text-2xl lg:w-4/6 text-balance">
          Join a 10-week innovation journey working in small interdisciplinary
          teams to collaborate with local initiatives for exploring challenges
          such as
        </p>
        <Image src="/assets/Arrow_1.svg" alt="Arrow" width={100} height={100} />
      </div>

      <div className="mx-auto flex flex-col w-5/6 gap-2 flex-wrap sm:flex-row justify-center items-center xl:w-4/6">
        {pills.map((item) => (
          <Pill
            key={item.text}
            text={item.text}
            color="#F15BB5"
            className={item.class}
          />
        ))}
      </div>

      <div className=" w-5/6 sm:w-4/6 mx-auto py-20">
        <div className="transform -rotate-2">
          <h4 className="text-xl">
            Together we move through <strong>four</strong> stages
          </h4>

          <Image
            src="/assets/underline.svg"
            alt="Underline"
            width={900}
            height={20}
            className="w-full h-auto sm:w-5/6 lg:w-4/6 xl:w-3/6"
          />
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {activities.map((item) => (
            <div
              key={item.text}
              className="flex flex-col h-full items-start sm:p-6"
            >
              <Image src={item.src} alt={item.text} width={240} height={240} />
              <p className="text-xl w-full font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full mx-auto py-20 flex justify-center ">
        <p className="absolute left-8 lg:left-40 font-heading text-xl sm:text-2xl text-[#FFF200] transform -rotate-6">
          snapshot
        </p>

        <div
          className=" w-full max-w-[1224px] flex justify-center sm:h-[360px] sm:items-end lg:items-center"
          style={{
            backgroundImage: "url('/assets/circled.svg')",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-[300px] mt-20 sm:w-4/6 sm:h-[200px] lg:h-[150px]  sm:flex sm:justify-center">
            {snapshot.map((item) => (
              <div
                key={item.text}
                className="flex h-full w-full flex-col items-center justify-start  p-4 text-[#FFF200]"
              >
                <p className="text-5xl text-center w-5/6 font-bold sm:text-6xl">
                  {item.number}
                </p>
                <p className="text-md text-center font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-4/6 lg:w-3/6 mx-auto py-10">
        <Image
          src="/assets/Clock.svg"
          alt="Clock"
          width={100}
          height={100}
          className="transform -rotate-3"
        />
        <div className="flex flex-col gap-4">
          <h5 className="font-semibold text-2xl">Time commitment</h5>
          <p className="text-lg  text-pretty">
            3 to 4 hours per week, including a weekly session (usually on
            Saturdays) and some team collaboration in between.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 py-20 px-10 w-full md:w-4/6 lg:w-3/6 mx-auto">
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-center text-pretty">
          Small enough for meaningful collaboration. Big enough for real impact.
        </p>
        <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}
