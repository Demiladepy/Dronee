import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    avatar: { type: String, default: "/uploads/default-avatar.png" },

    // 👇 references instead of embedded
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Drone" }],

    // 👇 for password reset
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
