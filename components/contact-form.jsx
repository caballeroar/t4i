"use client"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

const EMAIL_ADDRESS = "info@techforimpact.nl"

export function ContactForm() {
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const name = (formData.get("name") || "").toString().trim()
    const email = (formData.get("email") || "").toString().trim()
    const organization = (formData.get("organization") || "").toString().trim()
    const message = (formData.get("message") || "").toString().trim()

    if (!name) {
      setErrorMessage("Vul je naam in.")
      setStatus("error")
      return
    }
    if (!email) {
      setErrorMessage("Vul je e-mailadres in.")
      setStatus("error")
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage("Voer een geldig e-mailadres in.")
      setStatus("error")
      return
    }
    if (!message) {
      setErrorMessage("Vul een bericht in.")
      setStatus("error")
      return
    }

    const subject = encodeURIComponent(
      `Contactformulier: bericht van ${name}${organization ? ` (${organization})` : ""}`
    )
    const body = encodeURIComponent(
      [
        `Naam: ${name}`,
        `E-mail: ${email}`,
        organization ? `Organisatie: ${organization}` : null,
        ``,
        `Bericht:`,
        message,
      ]
        .filter(Boolean)
        .join("\n")
    )

    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-primary/20 bg-primary/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
          Je e-mailprogramma is geopend!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Klik op versturen in je e-mailprogramma om het bericht te verzenden. Heb je geen
          e-mailprogramma? Stuur dan een mail naar{" "}
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {EMAIL_ADDRESS}
          </a>
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          Formulier opnieuw invullen
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-5"
      noValidate
    >
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex-1">
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Naam <span className="text-destructive">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Je volledige naam"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            E-mail <span className="text-destructive">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="naam@voorbeeld.nl"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-organization"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Organisatie
        </label>
        <input
          id="contact-organization"
          name="organization"
          type="text"
          placeholder="School, wijkorganisatie, gemeente..."
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Bericht <span className="text-destructive">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Vertel ons hoe we kunnen samenwerken..."
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg bg-destructive/10 p-4 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Verstuur bericht
        <Send className="h-4 w-4" />
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Of mail direct naar{" "}
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
        >
          {EMAIL_ADDRESS}
        </a>
      </p>
    </form>
  )
}
