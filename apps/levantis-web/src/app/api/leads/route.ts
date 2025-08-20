import { NextResponse } from "next/server";

const API_BASE = process.env.LEVANTIS_API_BASE ?? "http://localhost:8000/api/v1";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const res = await fetch(`${API_BASE}/leads/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    // If your API needs auth, forward cookies/headers here
  });

  const text = await res.text();
  return new NextResponse(text, { status: res.status, headers: { "Content-Type": res.headers.get("Content-Type") ?? "application/json" }});
}