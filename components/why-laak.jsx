import { MapPin } from "lucide-react";
import Image from "next/image";

export function WhyLaak() {
  return (
    <section className="py-20 md:py-28 ">
      <div className="relative flex w-5/6 flex-col gap-6 mx-auto md:flex-row md:gap-0 md:-space-x-6">
        <div className="relative w-full min-h-[260px] overflow-hidden aspect-video rounded-3xl transform -rotate-2 ">
          <Image
            src="/assets/laakimage.jpg"
            alt="Laak Neigbourhood"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full min-h-[260px] overflow-hidden aspect-video rounded-3xl transform rotate-2 ">
          <Image
            src="/assets/laakhood.jpg"
            alt="Programme"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="w-5/6 justify-between flex flex-col gap-10 items-center mx-auto">
        <div className="flex justify-end -rotate-2">
          <h2 className="inline-block mt-3 font-heading text-3xl font-bold tracking-base  md:text-5xl">
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
    </section>
  );
}
