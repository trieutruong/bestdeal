import { Schema, model, models } from "mongoose";

const banner = new Schema(
  {
    link: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Banner = models.Banner || model("Banner", banner);

export default Banner;
