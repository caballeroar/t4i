"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const EMAIL_ADDRESS = "amelrc@yahoo.com";
const FORM_NAME = "contact-form";

// Netlify sometimes responds with 400/404 while still storing the submission; detect that case.
function isNetlifySubmissionResponse(response) {
  if (response.ok) {
    return true;
  }

  const cameFromNetlify = Boolean(response.headers.get("x-nf-request-id"));
  const isKnownNetlifyStatus =
    response.status === 400 || response.status === 404;
  if (cameFromNetlify && isKnownNetlifyStatus) {
    return true;
  }

  if (
    typeof window !== "undefined" &&
    response.type === "basic" &&
    isKnownNetlifyStatus
  ) {
    try {
      const responseOrigin = new URL(response.url).origin;
      if (responseOrigin === window.location.origin) {
        return true;
      }
    } catch (error) {
      console.warn(
        "[ContactForm] Unable to parse response URL for Netlify fallback.",
        error,
      );
    }
  }

  return false;
}

function formDataToUrlEncoded(formData) {
  const params = new URLSearchParams();
  formData.forEach((value, key) => {
    params.append(key, typeof value === "string" ? value : "");
  });
  return params.toString();
}

export function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const organization = (formData.get("organization") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    console.log("[ContactForm] Submitting", {
      name,
      email,
      organization,
      messageLength: message.length,
    });

    if (!name) {
      setErrorMessage("Vul je naam in.");
      setStatus("error");
      return;
    }
    if (!email) {
      setErrorMessage("Vul je e-mailadres in.");
      setStatus("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Voer een geldig e-mailadres in.");
      setStatus("error");
      return;
    }
    if (!message) {
      setErrorMessage("Vul een bericht in.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    formData.append("form-name", FORM_NAME);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToUrlEncoded(formData),
      });

      const netlifyRequestId = response.headers.get("x-nf-request-id");
      console.log("[ContactForm] Response received", {
        status: response.status,
        ok: response.ok,
        redirected: response.redirected,
        type: response.type,
        netlifyRequestId,
        url: response.url,
      });

      if (!isNetlifySubmissionResponse(response)) {
        throw new Error("Kon het formulier niet versturen.");
      }

      if (!response.ok) {
        console.warn(
          "Netlify Forms returned",
          response.status,
          "but captured the submission.",
        );
      }

      formElement.reset();
      setStatus("success");
    } catch (error) {
      console.error("[ContactForm] Submission failed", error);
      setErrorMessage(
        "Er ging iets mis bij het versturen. Probeer het opnieuw.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-primary/20 bg-primary/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
          Bedankt voor je bericht!
        </h3>
        <p className="mt-2 text-muted-foreground">
          We hebben je inzending ontvangen en nemen zo snel mogelijk contact met
          je op via{" "}
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {EMAIL_ADDRESS}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          Formulier opnieuw invullen
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-5"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      name={FORM_NAME}
      noValidate
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden="true">
        <label>
          Laat dit veld leeg
          <input name="bot-field" type="text" />
        </label>
      </p>
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
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting"
          ? "Bezig met versturen..."
          : "Verstuur bericht"}
        <Send className="h-4 w-4" />
      </button>

      {/* <p className="text-center text-xs text-muted-foreground">
        Of mail direct naar{" "}
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
        >
          {EMAIL_ADDRESS}
        </a>
      </p> */}
    </form>
  );
}
