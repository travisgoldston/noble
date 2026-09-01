import { NextResponse } from "next/server";

type AuditPayload = {
  name?: string;
  business?: string;
  website?: string;
  email?: string;
  phone?: string;
  city?: string;
  service?: string;
  improve?: string;
  noWebsite?: string | boolean;
  gbpStatus?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: AuditPayload;
  try {
    body = (await request.json()) as AuditPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const business = String(body.business || "").trim();
  const email = String(body.email || "").trim();

  if (!name || !business || !email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Name, business, and a valid email are required." },
      { status: 400 }
    );
  }

  const noWebsiteRaw = body.noWebsite;
  const noWebsite =
    noWebsiteRaw === true ||
    noWebsiteRaw === "true" ||
    noWebsiteRaw === "on" ||
    noWebsiteRaw === "1";
  const gbpStatus = String(body.gbpStatus || "").trim();

  const payload = {
    name,
    business,
    website: noWebsite ? "" : String(body.website || "").trim(),
    noWebsite,
    gbpStatus,
    email,
    phone: String(body.phone || "").trim(),
    city: String(body.city || "").trim(),
    service: String(body.service || "").trim(),
    improve: String(body.improve || "").trim(),
    submittedAt: new Date().toISOString(),
    source: "nobleseo.co/audit",
  };

  const webhook = process.env.AUDIT_WEBHOOK_URL;
  if (webhook) {
    const forwarded = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!forwarded.ok) {
      return NextResponse.json(
        { ok: false, error: "Could not deliver the audit request." },
        { status: 502 }
      );
    }
  } else {
    console.log(JSON.stringify({ event: "seo_audit_request", ...payload }));
  }

  return NextResponse.json({ ok: true });
}
