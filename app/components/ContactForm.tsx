"use client";

import { useState, type FormEvent } from "react";

type SubmissionStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

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
        <p className="eyebrow">Send a message</p>
        <h2 id="contact-form-heading">Let&apos;s talk about your idea.</h2>
        <p>Your message will be sent directly to my email.</p>
      </div>

      <form
        aria-labelledby="contact-form-heading"
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

        <button
          className="button button-primary contact-form-submit"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

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
