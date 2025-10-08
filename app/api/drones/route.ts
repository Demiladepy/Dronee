import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Drone from "@/app/models/Drone";

export async function GET() {
  try {
    await connectDB();
    const drones = await Drone.find();
    return NextResponse.json(drones, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch drones" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const newDrone = await Drone.create(data);
    return NextResponse.json(newDrone, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create drone" }, { status: 500 });
  }
}
