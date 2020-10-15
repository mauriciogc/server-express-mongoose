import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Messages = mongoose.model("Messages", messageSchema);

export default Messages;
