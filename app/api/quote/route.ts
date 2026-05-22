import { NextResponse } from "next/server";

// Stub endpoint. Wire to Resend / Formspree / SMS forwarder once dan@oakvalleycurbing.com is live.
export async function POST(request: Request) {
  const data = await request.formData();

  // Honeypot — silently drop bot submissions.
  if (data.get("website")) {
    return NextResponse.redirect(new URL("/?sent=1#quote", request.url), 303);
  }

  const payload = {
    name: data.get("name"),
    phone: data.get("phone"),
    email: data.get("email"),
    address: data.get("address"),
    message: data.get("message"),
    receivedAt: new Date().toISOString(),
  };

  console.log("[oak-valley-curbing quote]", payload);

  // TODO: forward to dan@oakvalleycurbing.com via Resend once domain email is live.

  return NextResponse.redirect(new URL("/?sent=1#quote", request.url), 303);
}
