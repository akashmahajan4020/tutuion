import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload?.name || !payload?.email || !payload?.phone || !payload?.course) {
    return NextResponse.json(
      { message: "Please complete the required registration fields." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message:
      "Registration request received. Our admissions coordinator will contact you shortly to complete onboarding.",
  });
}
