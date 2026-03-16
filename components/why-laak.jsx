import { MapPin } from "lucide-react";
import Image from "next/image";

export function WhyLaak() {
  return (
    <section className="py-20 md:py-28 ">
      <div className="flex">
        <Image src="/assets/Love.svg" alt="Programme" width={72} height={72} />
        <Image src="/assets/Love.svg" alt="Programme" width={72} height={72} />
      </div>
      <div className="w-5/6 justify-between flex flex-col gap-10 items-center mx-auto">
        <div className="flex justify-end -rotate-2">
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-base  md:text-5xl">
            It takes place in Laak
          </h2>
          <Image
            src="/assets/Love.svg"
            alt="Programme"
            width={72}
            height={72}
          />
        </div>
        <div className="flex w-full flex-col justify-between gap-10">
          <p className="mt-3 w-full text-xl transform -rotate-2 md:w-1/2 md:self-start md:text-2xl text-balance">
            <strong>Laak</strong> is home to people from many different
            backgrounds and cultures. The neighbourhood also hosts a growing
            network of community initiatives, residents and organisations that
            are actively working on improving their environment and
            strengthening the community.
          </p>
          <p className="mt-3 w-full text-xl transform rotate-2 md:w-1/2 md:self-end md:text-2xl text-balance">
            At the same time <strong>Laak</strong> faces challenges that are
            shared by many urban neighbourhoods. Issues such as energy
            affordability, access to healthy and sustainable food, climate
            resilience and the quality of public space affect everyday life for
            many residents.
          </p>
        </div>
      </div>

      <div className="relative mx-auto flex w-3/6 min-h-[360px] items-center justify-center py-20">
        <p className="absolute font-heading text-2xl text-[#FFF200] transform -rotate-6">
          GOAL
        </p>
        <Image
          src="/assets/circled_2.svg"
          alt="Underline"
          width={700}
          height={700}
          className="absolute left-[43%] top-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-3"
        />
        <p className="absolute  left-1/2 top-1/2 w-4/6 -translate-x-1/2 -translate-y-1/2 text-start text-3xl font-bold -rotate-3  text-[#FFF200]">
          Support already working initiatives and explore how new ideas and
          tools can strengthen their impact.
        </p>
      </div>
    </section>
  );
}
