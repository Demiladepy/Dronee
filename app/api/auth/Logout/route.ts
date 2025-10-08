import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Clear auth cookie (assuming you store JWT in cookie)
    const response = NextResponse.json({ message: "Logged out successfully" });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
