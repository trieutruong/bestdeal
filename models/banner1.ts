import { Schema, model, models } from "mongoose";

const banner1 = new Schema(
  {
    link: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Banner1 = models.Banner1 || model("Banner1", banner1);

export default Banner1;
