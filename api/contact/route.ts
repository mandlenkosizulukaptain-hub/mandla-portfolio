const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxRequestBytes = 12_000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function errorResponse(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(contentLength) && contentLength > maxRequestBytes) {
    return errorResponse("Your message is too large.", 413);
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return errorResponse("Please submit a valid message.", 400);
  }

  if (!isRecord(payload)) {
    return errorResponse("Please submit a valid message.", 400);
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";
  const website =
    typeof payload.website === "string" ? payload.website.trim() : "";

  if (website) {
    return errorResponse("Please leave the website field empty.", 400);
  }

  if (
    !name ||
    name.length > 100 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    !message ||
    message.length > 5000
  ) {
    return errorResponse("Please check the name, email, and message fields.", 422);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact form email delivery is not configured.");
    return errorResponse(
      "The contact form is not ready yet. Please email me directly instead.",
      503,
    );
  }

  let providerResponse: Response;
  try {
    providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: "New portfolio contact form message",
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
  } catch {
    console.error("Could not reach the email provider for a contact message.");
    return errorResponse(
      "Your message could not be sent right now. Please try again or email me directly.",
      502,
    );
  }

  if (!providerResponse.ok) {
    console.error(
      `The email provider rejected a contact message (${providerResponse.status}).`,
    );
    return errorResponse(
      "Your message could not be sent right now. Please try again or email me directly.",
      502,
    );
  }

  return Response.json({ success: true });
}