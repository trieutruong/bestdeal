import { Schema, model, models } from "mongoose";

const handtool = new Schema(
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

const HandTool = models.HandTool || model("HandTool", handtool);

export default HandTool;
