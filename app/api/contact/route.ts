import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

// Simple in-memory rate-limit (per-instance, not global — good enough for hobby scale).
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 requests/minute per IP
const ipBuckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);

  if (!bucket || now > bucket.resetAt) {
    ipBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true };
  }

  if (bucket.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { ok: true };
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const rl = rateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { error: `Te veel pogingen. Wacht ${rl.retryAfter}s en probeer opnieuw.` },
      { status: 429 },
    );
  }

  let body: {
    name?: string;
    email?: string;
    message?: string;
    website?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige request" }, { status: 400 });
  }

  // Honeypot — silently succeed for bots so they don't retry with different payload
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ success: true });
  }

  // Basic validation
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Vul alle velden in" },
      { status: 400 },
    );
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  if (name.length < 2 || name.length > 200) {
    return NextResponse.json(
      { error: "Naam ziet er niet goed uit" },
      { status: 400 },
    );
  }

  if (!email.includes("@") || email.length < 5 || email.length > 200) {
    return NextResponse.json(
      { error: "Email ziet er niet goed uit" },
      { status: 400 },
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Iets meer context graag (minimaal 10 tekens)" },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Bericht is te lang (max 5000 tekens)" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "jdrenting@gmail.com";
  // Resend allows sending from onboarding@resend.dev without domain
  // verification — handy until a proper from-address on a verified
  // domain is set up.
  const from = process.env.RESEND_FROM || "onboarding@resend.dev";

  if (!apiKey) {
    // Configured to gracefully fail when API key not set (e.g. preview deploys)
    console.error("RESEND_API_KEY not configured");
    return NextResponse.json(
      {
        error:
          "Inbox-systeem nog niet ingericht. Mail direct: jdrenting@gmail.com",
      },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[nathanrenting.dev] ${name} — inquiry`,
        text: [
          `Inquiry via nathanrenting.dev form.`,
          ``,
          `Naam:  ${name}`,
          `Email: ${email}  (hit reply om te beantwoorden)`,
          `IP:    ${ip}`,
          ``,
          `Bericht:`,
          `─────────────`,
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", res.status, errText);
      return NextResponse.json(
        {
          error:
            "Inbox-systeem reageert niet. Mail direct: jdrenting@gmail.com",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Send error:", err);
    return NextResponse.json(
      {
        error:
          "Iets ging mis tijdens versturen. Mail direct: jdrenting@gmail.com",
      },
      { status: 500 },
    );
  }
}
