import { Schema, model, models } from "mongoose";

const hotproduct = new Schema(
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

const HotProduct = models.HotProduct || model("HotProduct", hotproduct);

export default HotProduct;

