
import mongoose, { Schema, models } from "mongoose";

const CartSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        productId: { type: String, required: true },
        name: String,
        price: Number,
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

const Cart = models.Cart || mongoose.model("Cart", CartSchema);
export default Cart;
