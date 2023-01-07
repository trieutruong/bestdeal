import { Schema, model, models } from "mongoose";

const coinpolicy = new Schema(
  {
    img: { type: String },
    step1: { type: String, required: true },
    step2: { type: String, required: true },
    step3: { type: String, required: true },
    step4: { type: String, required: true },
    step5: { type: String, required: true },
    notice: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CoinPolicy = models.CoinPolicy || model("CoinPolicy", coinpolicy);

export default CoinPolicy;
