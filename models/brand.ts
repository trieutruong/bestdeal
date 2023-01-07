import { Schema, model, models } from "mongoose";

const brand = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Brand = models.Brand || model("Brand", brand);

export default Brand;
