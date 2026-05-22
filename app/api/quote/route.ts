import { NextResponse } from "next/server";

// Stub endpoint. Wire to Resend / Formspree / SMS forwarder once contact details are confirmed.
export async function POST(request: Request) {
  const data = await request.formData();
  const payload = {
    name: data.get("name"),
    phone: data.get("phone"),
    email: data.get("email"),
    address: data.get("address"),
    message: data.get("message"),
    receivedAt: new Date().toISOString(),
  };

  console.log("[oak-valley-curbing quote]", payload);

  // TODO: forward to Oak Valley Curbing inbox + SMS once confirmed.

  // For now, redirect back with a basic confirmation hash.
  return NextResponse.redirect(new URL("/?sent=1#quote", request.url), 303);
}
