import { ContactForm } from "@/components/contact-form";
import Image from "next/image";

export function CTA() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h3 className="font-heading text-3xl font-bold text-[#04A6DC] md:text-4xl lg:text-5xl text-balance">
            Contact Us
          </h3>
          <p className="mx-auto text-[#04A6DC] mt-5 max-w-xl text-lg font-semibold text-pretty">
            Send us a message to join the programme, collaborate with us, or be
            part of the team.
          </p>
        </div>
        <div className="mt-12 space-y-10">
          <ContactForm />

          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:text-left">
            <p className="text-base font-semibold text-[#0096C8]">
              Prefer socials? Connect with us here:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/tech-4-impact-lab"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#0096C8]/30 px-5 py-2 text-sm font-semibold text-[#0096C8] transition hover:-translate-y-0.5 hover:border-[#0096C8]"
              >
                <Image
                  src="/assets/linkedin.svg"
                  alt="LinkedIn logo"
                  width={20}
                  height={20}
                  priority
                  className="object-contain"
                />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/t4i.lab?igsh=eTRla3p6NjZha3Jx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#0096C8]/30 px-5 py-2 text-sm font-semibold text-[#0096C8] transition hover:-translate-y-0.5 hover:border-[#0096C8]"
              >
                <Image
                  src="/assets/Instagram.svg"
                  alt="Instagram logo"
                  width={20}
                  height={20}
                  priority
                  className="object-contain"
                />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
