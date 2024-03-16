import mongoose, { Schema } from "mongoose";
const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //One who is subscribing
      ref: "Users",
    },
    channel: {
      type: Schema.Types.ObjectId, //One to whom user is subscribing
      ref: "Users",
    },
  },
  { timestamp: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
