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
            Creating an impact in Laak
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
            backgrounds and cultures, and to a growing network of community
            initiatives, residents, and organisations working to improve the
            environment and strengthen the community.
          </p>
          <p className="mt-3 w-full text-xl transform rotate-2 md:w-1/2 md:self-end md:text-2xl text-balance">
            At the same time, the neighbourhood faces common urban challenges
            that impact residents’ lives, including energy affordability, access
            to healthy and sustainable food, climate resilience and the quality
            of public spaces. 
            <br/>
            <br/>
            Because of these needs and the strong network of
            local initiatives, Tech 4 Impact focuses its programmes in Laak.
            This is a neighbourhood where practical, tech-focused solutions can
            make a real, lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}
