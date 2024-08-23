import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
      enum: ["admin", "user"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
