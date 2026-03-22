import Image from "next/image";
import { Pill } from "./ui/pill";

const audiences = [
  {
    text: "Young professionals working in technology, design or sustainability",
    class: "transform -rotate-3",
  },
  // { text: "Technology", class: "transform -rotate-3" },
  {
    text: "Expats who want to connect with local initiatives",
    class: "transform rotate-3",
  },
  {
    text: "People curious about technology for social good",
    class: "transform rotate-3",
  },
  // { text: "Sustainability", class: "transform -rotate-3" },
  // { text: "Community Work", class: "transform rotate-3" },
  // { text: "Communications", class: "transform -rotate-3" },
  {
    text: "People with a migration background interested in innovation",
    class: "transform rotate-3",
  },
  {
    text: "International students studying in The Hague",
    class: "transform -rotate-3",
  },
  // { text: "Entrepreneurship", class: "transform rotate-3" },
];

export function ForWhom() {
  return (
    <section className="relative overflow-hidden  mt-[30%]">
      <div className="relative flex flex-col w-5/6 mx-auto  gap-8   items-start text-left xl:w-4/6">
        <div className="flex w-full items-center gap-4 ">
          <h2 className="font-heading text-3xl uppercase font-bold md:text-5xl">
            For Whom
          </h2>
          <Image
            src="/assets/Welcome.svg"
            alt="Welcome sticker"
            width={64}
            height={64}
          />
        </div>
        <p className="text-lg font-semibold md:text-xl text-balance">
          Tech 4 Impact welcomes international residents in The Hague who want
          to use their time, skills, and creativity to push community projects
          forward.
        </p>
      </div>
      <div className="relative">
        <div className="relative w-full min-h-[240px] aspect-[16/11]  sm:w-4/6 overflow-hidden rounded-3xl transform -rotate-2 xl:w-4/6 mx-auto mt-16">
          <Image
            src="/assets/participants.png"
            alt="Participants working together"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <Image
          src="/assets/programmer.svg"
          alt="No need to be a programmer"
          width={340}
          height={40}
          className="object-contain absolute -bottom-10 right-0 lg:bottom-[3%] lg:right-[4%] xl:w-[440px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 mx-auto py-20 w-5/6 text-center md:w-5/6">
        <p className="text-xl font-semibold md:text-2xl text-balance ">
          People we welcome to join the programme are
        </p>
        <div className="mx-auto flex flex-col w-full gap-2 flex-wrap sm:flex-row justify-center items-center ">
          {audiences.map((item, index) => {
            const words = item.text.trim().split(/\s+/);
            const isSingleWord = words.length <= 2;
            const colors = isSingleWord
              ? { bg: "#F15BB5", text: "#FFFFFF" }
              : { bg: "#FFFFFF", text: "#F15BB5" };

            return (
              <Pill
                key={`${item.text}-${index}`}
                text={item.text}
                color={colors.bg}
                textColor={colors.text}
                className={`${item.class ?? ""} text-base md:text-lg`}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col mt-8 mx-auto w-5/6 gap-8 text-center md:mt-10 md:w-4/6 md:px-12 lg:w-3/6">
        <p className="text-lg font-semibold md:text-xl">
          However, people from other backgrounds who are interested in
          contributing to social and environmental challenges are equally
          welcome to participate!{" "}
        </p>
        <a
          href="#contact"
          className="inline-flex self-center items-center justify-center gap-2 rounded-lg bg-[#FFF200] px-6 py-3.5 text-base font-semibold text-foreground transition-opacity hover:opacity-80"
        >
          Join the Next Tech 4 Impact
        </a>
      </div>
    </section>
  );
}
