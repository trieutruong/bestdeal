import { Schema, model, models } from "mongoose";

const newsevent = new Schema(
  {
    link: { type: String, required: true },
    image: { type: String },
    description: { type: String }
  },
  {
    timestamps: true,
  }
);

const NewsEvent = models.NewsEvent || model("NewsEvent", newsevent);

export default NewsEvent;
