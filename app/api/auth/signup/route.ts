// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import  connectDB  from "@/app/lib/db";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();
    const { fullName, email, password, address, avatar } = data;

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "Full name, email, and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      address: address || "",
      avatar: avatar || "/uploads/default-avatar.png",
    });

    // 🔑 return the user so frontend knows who just signed up
    return NextResponse.json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        address: newUser.address,
        avatar: newUser.avatar,
        cart: newUser.cart,
        orders: newUser.orders,
      },
    });
  } catch (error) {
    console.error("❌ Signup error:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
