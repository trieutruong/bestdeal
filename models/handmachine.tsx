import { Schema, model, models } from "mongoose";

const handmachine = new Schema(
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

const HandMachine = models.HandMachine || model("HandMachine", handmachine);

export default HandMachine;
