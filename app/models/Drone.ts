
import mongoose, { Schema, models } from "mongoose";

const DroneSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, default: 1 },
        date: { type: Date, default: Date.now }, // ✅ use Date type, not Number
      },
    ],
    total: { type: Number, required: true },
    status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" },
  },
  { timestamps: true }
);

const Drone = models.Drone || mongoose.model("Drone", DroneSchema);
export default Drone;
