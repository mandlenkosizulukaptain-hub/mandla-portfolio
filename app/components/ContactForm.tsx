"use client";

import { useState, type FormEvent } from "react";

type SubmissionStatus = "idle" | "sending" | "success" | "error";
type ContactFormHeadingLevel = "h1" | "h2";

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.221-.253-4.556-1.111-4.556-4.945 0-1.092.39-1.985 1.029-2.684-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.684 0 3.844-2.338 4.69-4.566 4.938.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.012C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

function CanvaIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="url(#canvaGradient)" />
      <defs>
        <linearGradient id="canvaGradient" x1="4" y1="3" x2="20" y2="21">
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <path
        d="M15.82 8.1c-.52-.5-1.2-.75-2.04-.75-1.02 0-1.88.37-2.58 1.12-.7.75-1.05 1.7-1.05 2.87 0 1.04.28 1.87.85 2.49.57.62 1.31.93 2.22.93.9 0 1.64-.29 2.23-.88l.7.82c-.76.79-1.75 1.19-2.98 1.19-1.32 0-2.4-.43-3.23-1.29-.83-.86-1.24-1.99-1.24-3.39 0-1.5.47-2.71 1.42-3.64.95-.93 2.17-1.39 3.66-1.39.98 0 1.84.25 2.58.74l-.54 1.18Z"
        fill="white"
      />
    </svg>
  );
}

export default function ContactForm({
  headingLevel = "h1",
}: {
  headingLevel?: ContactFormHeadingLevel;
}) {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const Heading = headingLevel;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
          website: String(formData.get("website") ?? ""),
        }),
      });
      const result: unknown = await response.json();

      if (!response.ok) {
        const errorMessage =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "Your message could not be sent. Please try again.";
        throw new Error(errorMessage);
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Thanks! Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again.",
      );
    }
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-intro">
        <Heading>
          <span className="connect-heading-first-line glass-text">
            LET&apos;S TALK ABOUT
          </span>
          <span className="connect-heading-second-line glass-text">
            YOUR IDEA.
          </span>
        </Heading>
        <p>Your message will be sent directly to my email.</p>
      </div>

      <form
        aria-label="Send a message"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="contact-form-grid">
          <div className="contact-form-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              autoComplete="name"
              id="contact-name"
              maxLength={100}
              name="name"
              required
            />
          </div>
          <div className="contact-form-field">
            <label htmlFor="contact-email">Your email</label>
            <input
              autoComplete="email"
              id="contact-email"
              maxLength={254}
              name="email"
              required
              type="email"
            />
          </div>
          <div className="contact-form-field contact-form-field-wide">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              maxLength={5000}
              name="message"
              required
              rows={6}
            />
          </div>
        </div>

        <div className="contact-form-honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input
            autoComplete="off"
            id="contact-website"
            name="website"
            tabIndex={-1}
          />
        </div>

        <div className="contact-form-actions">
          <button
            className="button button-primary contact-form-submit"
            disabled={status === "sending"}
            type="submit"
          >
            <SendIcon />
            <span>{status === "sending" ? "Sending..." : "Send message"}</span>
          </button>
          <a className="button button-primary social-link" href="tel:+263777133443">
            <PhoneIcon />
            <span>Call me</span>
          </a>
          <a
            className="button button-outline social-link"
            href="https://github.com/mandlenkosizulukaptain-hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            <span>Find me on GitHub</span>
          </a>
          <a
            className="button button-outline social-link"
            href="https://www.canva.com/design/DAHStkf2L_M/sV2XAKSavkRslKHDxX_llw/edit"
            target="_blank"
            rel="noreferrer"
          >
            <CanvaIcon />
            <span>View design work</span>
          </a>
        </div>

        {statusMessage && (
          <p
            className="contact-form-status"
            data-state={status}
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
}
