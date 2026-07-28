"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: "project-1",
    tabLabel: "VrouwenBuurtLab",
    imageSrc: "/assets/project-1.webp",
    imageAlt: "VrouwenBuurtLab team",
    heading: "VrouwenBuurtLab",
    description:
      "A women-led community space in Laak where women can meet, develop new skills, build social networks, and contribute to their community.",
    challenge:
      "How can digital communication help VrouwenBuurtLab reach more women and turn online visibility into real community engagement?",
    solution:
      "The team developed a digital communication strategy that creates a clearer journey from discovering VrouwenBuurtLab online to taking the first step through its doors. The solution includes a new brand narrative, audience personas, an online questionnaire, a social media content strategy, and an activities roadmap – all designed to help VrouwenBuurtLab find and engage with the women who need it.",
  },
  {
    id: "project-2",
    tabLabel: "Las Amazonas",
    imageSrc: "/assets/project-2.webp",
    imageAlt: "Las Amazonas team",
    heading: "Las Amazonas",
    description:
      "An inclusive community garden initiative in Laak, where people can meet, grow food and connect regardless of physical or language abilities.",
    challenge:
      "How can digital tools help turn the vision for the garden into something people can actually see, understand, and help bring to life?",
    solution:
      "Using digital design and visualisation tools, the team translated the idea into a tangible visual concept and a website. All the materials are designed to help residents, partners, and potential supporters imagine what the garden could be, understand the next steps, and begin to build it together.",
  },
  {
    id: "project-3",
    tabLabel: "Energiegelijk Laak",
    imageSrc: "/assets/project-3.webp",
    imageAlt: "Energiegelijk Laak team",
    heading: "Energiegelijk Laak",
    description:
      "A programme supporting households experiencing energy poverty through practical energy coaching and initiatives that help make homes warmer and more comfortable.",
    challenge:
      "How can better design make energy-support information more accessible, and how can data make the impact measurable for residents and partners?",
    solution:
      "The team redesigned communication materials in five languages, created visual energy-saving tips that don’t depend on language, and developed a simple before-and-after measurement system to track changes in residents’ experiences of warmth and comfort.",
  },
  {
    id: "project-4",
    tabLabel: "Bolster",
    imageSrc: "/assets/project-4.webp",
    imageAlt: "Bolster team",
    heading: "Bolster",
    description:
      "A new social and circular initiative bringing women together through weaving, as they transform repurposed textiles into handmade rugs while sharing their stories and skills.",
    challenge:
      "How can a growing initiative keep its human story and vision while making its work more discoverable online?",
    solution:
      "The team developed a brand concept designed to give Bolster a recognisable identity and a foundation for telling its story online. The concept connects the products with the people, materials, and story behind them, and also creates opportunities to build visibility and partnerships around the initiative.",
  },
];

export function Highlights() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const activeProject =
    projects.find((project) => project.id === activeProjectId) || projects[0];

  return (
    <section id="highlights" className="px-6 py-20 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-base text-foreground md:text-5xl">
            Highlights
          </h2>
          <p className="mt-6 text-base leading-relaxed md:text-lg">
            We’ve already started partnering with local initiatives to turn real
            challenges into practical results. In every 4-week programme,
            internationals work together with local initiatives to create tools,
            strategies, and prototypes that help them reach more people and move
            their work forward.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {projects.map((project) => {
            const isActive = project.id === activeProject.id;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProjectId(project.id)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/30 bg-transparent text-foreground hover:border-foreground"
                }`}
                aria-pressed={isActive}
              >
                {project.tabLabel}
              </button>
            );
          })}
        </div>

        <article className="mt-8 rounded-2xl border border-foreground/20 bg-white/80 p-6 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-video overflow-hidden ">
              <Image
                src={activeProject.imageSrc}
                alt={activeProject.imageAlt}
                width={1200}
                height={800}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                {activeProject.heading}
              </h3>

              <p className="mt-4 text-base leading-relaxed">
                {activeProject.description}
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
                    Challenge
                  </h4>
                  <p className="mt-2 text-base leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
                    Solution
                  </h4>
                  <p className="mt-2 text-base leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
