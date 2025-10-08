
import connectDB from "@/app/lib/db";
import User from "@/app/models/User";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

type CartItem = { price?: number; quantity?: number };
type OrderItem = { total?: number };

// GET user profile
export async function GET(
  req: Request,
  { params }: { params: { id?: string } }
) {
  if (!params?.id) {
    return NextResponse.json({ error: "User ID missing" }, { status: 400 });
  }

  try {
    await connectDB();
    const user = await User.findById(params.id).select("-password");
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const cartTotal = user.cart.reduce(
      (sum: number, item: CartItem) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );

    const totalSpentOrders = user.orders.reduce(
      (sum: number, order: OrderItem) => sum + (order.total || 0),
      0
    );

    const totalSpentOverall = cartTotal + totalSpentOrders;

    return NextResponse.json({ user, cartTotal, totalSpentOrders, totalSpentOverall });
  } catch (err) {
    console.error("Profile fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
  }
}

// PUT update profile (name, address, avatar)
export async function PUT(
  req: Request,
  { params }: { params: { id?: string } }
) {
  if (!params?.id) {
    return NextResponse.json({ error: "User ID missing" }, { status: 400 });
  }

  try {
    await connectDB();
    const body = await req.json();
    const { fullName, address, avatar } = body;

    let avatarPath: string | undefined;
    if (avatar) {
      const base64Data = avatar.toString().replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");

      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

      const fileName = `avatar-${params.id}-${Date.now()}.png`;
      fs.writeFileSync(path.join(uploadsDir, fileName), buffer);
      avatarPath = `/uploads/${fileName}`;
    }

    const updatedUser = await User.findByIdAndUpdate(
      params.id,
      {
        ...(fullName && { fullName }),
        ...(address && { address }),
        ...(avatarPath && { avatar: avatarPath }),
      },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const cartTotal = updatedUser.cart.reduce(
      (sum: number, item: CartItem) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );
    const totalSpentOrders = updatedUser.orders.reduce(
      (sum: number, order: OrderItem) => sum + (order.total || 0),
      0
    );
    const totalSpentOverall = cartTotal + totalSpentOrders;

    return NextResponse.json({
      message: "Profile updated successfully",
      user: updatedUser,
      cartTotal,
      totalSpentOrders,
      totalSpentOverall,
    });
  } catch (err) {
    console.error("Profile update error:", err);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
