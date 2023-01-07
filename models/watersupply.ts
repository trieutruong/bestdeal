import { Schema, model, models } from "mongoose";

const watersupply = new Schema(
  {
    name: { type: String, required: true },
    oldPrice: { type: Number },
    price: { type: Number },
    link: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const WaterSupply = models.WaterSupply || model("WaterSupply", watersupply);

export default WaterSupply;
