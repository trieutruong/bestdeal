import { Schema, model, models } from "mongoose";

const consumablesupply = new Schema(
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

const ConsumableSupply = models.ConsumableSupply || model("ConsumableSupply", consumablesupply);

export default ConsumableSupply;
