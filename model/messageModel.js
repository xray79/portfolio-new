import { Schema, model, models } from "mongoose";

const messagesSchema = Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Message || model("Message", messagesSchema);
