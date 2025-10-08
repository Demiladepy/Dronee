import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Drone from "@/app/models/Drone";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const drone = await Drone.findById(params.id);
  if (!drone) {
    return NextResponse.json({ error: "Drone not found" }, { status: 404 });
  }
  return NextResponse.json(drone);
}
