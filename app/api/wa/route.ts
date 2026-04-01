import { NextResponse } from "next/server";
import { WHATSAPP_PHONE } from "@/lib/config";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const message = url.searchParams.get("message") ?? "";

    if (!WHATSAPP_PHONE) {
      return NextResponse.json(
        { error: "WHATSAPP_PHONE not configured on the server" },
        { status: 500 }
      );
    }

    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
      message
    )}`;

    return NextResponse.redirect(waUrl, 307);
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
