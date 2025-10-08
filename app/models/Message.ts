import mongoose, { Schema, models } from "mongoose";

const messageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

const Message = models.Message || mongoose.model("Message", messageSchema);
export default Message;
