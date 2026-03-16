import { GraduationCap, School, Building, Landmark } from "lucide-react";
import Image from "next/image";
import { Pill } from "./ui/pill";

const StarIcon = ({
  width = 72,
  height = 72,
  color = "#FFF200",
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 362 352"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M215.793 4.83539C218.99 -3.44324 231.374 -0.341373 230.291 8.46685L218.773 102.174C217.994 108.516 224.97 112.885 230.336 109.416L309.62 58.1555C317.073 53.3371 325.269 63.1259 319.215 69.6155L254.818 138.656C250.459 143.329 253.535 150.964 259.915 151.311L354.187 156.443C363.049 156.925 363.926 169.662 355.214 171.354L262.534 189.357C256.262 190.575 254.262 198.56 259.219 202.592L332.471 262.155C339.357 267.754 332.58 278.574 324.537 274.822L238.976 234.911C233.185 232.21 226.874 237.494 228.515 243.669L252.767 334.914C255.046 343.49 243.204 348.26 238.902 340.498L193.141 257.917C190.044 252.328 181.832 252.894 179.53 258.854L145.518 346.927C142.32 355.206 129.936 352.104 131.019 343.296L142.537 249.589C143.316 243.247 136.34 238.877 130.974 242.347L51.6899 293.607C44.2374 298.425 36.0415 288.637 42.0948 282.147L106.493 213.107C110.851 208.434 107.775 200.798 101.395 200.451L7.1226 195.32C-1.7388 194.837 -2.61569 182.101 6.09599 180.408L98.7758 162.406C105.048 161.187 107.048 153.202 102.091 149.171L28.8388 89.6075C21.9533 84.0086 28.7303 73.189 36.7728 76.9406L122.334 116.852C128.125 119.553 134.436 114.269 132.795 108.093L108.544 16.8489C106.264 8.27219 118.106 3.50235 122.408 11.2647L168.169 93.8453C171.266 99.4343 179.478 98.8689 181.78 92.9082L215.793 4.83539Z"
      fill={color}
    />
  </svg>
);

const audiences = [
  {
    text: "Young professional working in technology, design or sustainability",
  },
  {
    text: "Expats who wants to connect with local initiatives",
  },
  {
    text: "Someone curious about technology for social good",
  },
  {
    text: "Someone with a migration background interested in innovation",
  },
  {
    text: "International students studying in The Hague",
  },
  {
    text: "Technology",
  },
  {
    text: "Community Work",
  },
  {
    text: "Communications",
  },
  {
    text: "Entrepreneurship",
  },
  {
    text: "Sustainability",
  },
];

const pillLayouts = [
  {
    wrapperClass: "md:absolute",
    pillClass: "md:-rotate-6",
    style: { top: "0%", left: "8%" },
  },
  {
    wrapperClass: "md:absolute",
    pillClass: "md:rotate-3",
    style: { top: "12%", right: "6%" },
  },
  {
    wrapperClass: "md:absolute",
    pillClass: "md:-rotate-2",
    style: { top: "26%", left: "18%" },
  },
  {
    wrapperClass: "md:absolute",
    pillClass: "md:rotate-6",
    style: { top: "38%", right: "12%" },
  },
  {
    wrapperClass: "md:absolute",
    pillClass: "md:-rotate-3",
    style: { top: "54%", left: "10%" },
  },
  {
    wrapperClass: "md:absolute",
    pillClass: "md:rotate-1",
    style: { top: "18%", left: "45%" },
  },
  {
    wrapperClass: "md:absolute",
    pillClass: "md:-rotate-4",
    style: { top: "32%", right: "32%" },
  },
  {
    wrapperClass: "md:absolute",
    pillClass: "md:rotate-2",
    style: { top: "66%", right: "18%" },
  },
  {
    wrapperClass: "md:absolute",
    pillClass: "md:-rotate-1",
    style: { top: "78%", left: "28%" },
  },
  {
    wrapperClass: "md:absolute",
    pillClass: "md:rotate-5",
    style: { top: "86%", right: "8%" },
  },
];

export function ForWhom() {
  return (
    <section id="voor-wie" className="bg-[#00BBF9] py-20 md:py-28">
      <StarIcon width={72} height={72} color="#F15BB5" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col">
          <div className="flex justify-end -rotate-2">
            <h2 className="mt-3 font-heading text-3xl  uppercase font-bold tracking-base  md:text-5xl">
              For Whom
            </h2>
            <Image
              src="/assets/Welcome.svg"
              alt="Programme"
              width={72}
              height={72}
            />
          </div>
          <p>
            Tech for Impact is designed for international residents in The Hague
            who want to use their time and skills for positive change.
          </p>
        </div>
        <Image
          className="transform -rotate-6"
          src="/assets/Scribble.svg"
          alt="Programme"
          width={72}
          height={72}
        />
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
        <div className="relative mt-14 grid w-full gap-6 md:block md:min-h-[900px]">
          {audiences.map((item, index) => {
            const words = item.text.trim().split(/\s+/);
            const isSingleWord = words.length <= 2;
            const colors = isSingleWord
              ? { bg: "#F15BB5", text: "#FFFFFF" }
              : { bg: "#FFFFFF", text: "#F15BB5" };
            const layout =
              pillLayouts[index] ?? pillLayouts[index % pillLayouts.length];

            return (
              <div
                key={item.text}
                className={`relative max-w-xl justify-self-center md:pointer-events-none ${layout?.wrapperClass ?? ""}`}
                style={layout?.style}
              >
                <Pill
                  text={item.text}
                  color={colors.bg}
                  textColor={colors.text}
                  className={`${layout?.pillClass ?? ""} text-lg`}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-6 py-20 px-10 w-3/6 mx-auto">
          <p className="font-semibold text-3xl text-center text-pretty">
            Small enough for meaningful collaboration. Big enough for real
            impact.
          </p>
          <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
