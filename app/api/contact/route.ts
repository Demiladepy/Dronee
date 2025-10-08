
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Message from "@/app/models/Message";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, email, message, userId } = body;

    // 🔹 Check required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 🔹 Validate name (letters + spaces only)
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return NextResponse.json(
        { error: "Name must contain only letters and spaces" },
        { status: 400 }
      );
    }

    // 🔹 Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // 🔹 Create new message
    const newMessage = await Message.create({
      name,
      email,
      message,
      userId: userId || null,
    });

    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
