import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/app/lib/db";
import User from "@/app/models/User";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Generate token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + 1000 * 60 * 10; // 10 min expiry

    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    await user.save();

    // Send email with reset link
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/profile/ResetPassword?token=${resetToken}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `Click the link below to reset your password:\n\n${resetLink}\n\nThis link expires in 10 minutes.`,
    });

    return NextResponse.json({ message: "Reset link sent to your email." });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
