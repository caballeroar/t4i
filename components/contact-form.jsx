"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const EMAIL_ADDRESS = "webmaster@tech4impactlab.org";
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
    } catch {}
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

    if (!name) {
      setErrorMessage("Add your name.");
      setStatus("error");
      return;
    }
    if (!email) {
      setErrorMessage("Add your email address.");
      setStatus("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Enter a valid email address.");
      setStatus("error");
      return;
    }
    if (!message) {
      setErrorMessage("Enter a message.");
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

      if (!isNetlifySubmissionResponse(response)) {
        throw new Error("Could not submit the form.");
      }

      formElement.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        "Something went wrong while submitting. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-primary/20 bg-primary/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-bold text-foreground">
          Thank you for contacting us!
        </h3>
        <p className="mt-2 text-muted-foreground">
          We have received your submission and will get back to you as soon as
          possible via{" "}
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
          Fill out the form again
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
          Leave this field empty if you're human:{" "}
          <input name="bot-field" type="text" />
        </label>
      </p>
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex-1">
          <label
            htmlFor="contact-name"
            className="mb-1.5 text-[#0096C8] font-semibold block text-sm"
          >
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-lg border border-border bg-[#0096C8]/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00BBF9] focus:outline-none focus:ring-2 focus:ring-[#00BBF9]/20 transition-colors"
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="contact-email"
            className="mb-1.5 text-[#0096C8] font-semibold block text-sm"
          >
            E-mail <span className="text-destructive">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="name@example.com"
            className="w-full rounded-lg border border-border bg-[#0096C8]/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00BBF9] focus:outline-none focus:ring-2 focus:ring-[#00BBF9]/20 transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-organization"
          className="mb-1.5 text-[#0096C8] font-semibold block text-sm"
        >
          Organization
        </label>
        <input
          id="contact-organization"
          name="organization"
          type="text"
          placeholder="School, neighborhood organization, municipality..."
          className="w-full rounded-lg border border-border bg-[#0096C8]/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00BBF9] focus:outline-none focus:ring-2 focus:ring-[#00BBF9]/20 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 text-[#0096C8] font-semibold block text-sm"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can collaborate..."
          className="w-full resize-none rounded-lg border border-border bg-[#0096C8]/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#00BBF9] focus:outline-none focus:ring-2 focus:ring-[#00BBF9]/20 transition-colors"
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFF200] px-8 py-3.5 text-base font-semibold text-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Send message"}
        <Send className="h-4 w-4" />
      </button>

      {/* <p className="text-center text-xs text-muted-foreground">
        Or email directly to{" "}
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
