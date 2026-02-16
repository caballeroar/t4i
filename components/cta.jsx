import { ContactForm } from "@/components/contact-form"

export function CTA() {
  return (
    <section id="contact" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Samen bouwen aan de toekomst?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Of je nu een school, wijkorganisatie, gemeente of fonds bent — wij staan open voor
            samenwerking. Neem contact met ons op en ontdek de mogelijkheden.
          </p>
        </div>
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
