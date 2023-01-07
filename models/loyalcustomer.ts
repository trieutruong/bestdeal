import { Schema, model, models } from "mongoose";

const loyalcustomer = new Schema(
  {
    img: { type: String },
    content: { type: String, required: true },
    programRuleTitle: { type: String, required: true },
    programRuleDescription: { type: String, required: true },
    subjectApplicationTitle: { type: String, required: true },
    subjectApplicationDescription: { type: String, required: true },
    appreciate: { type:  String, required: true }
  },
  {
    timestamps: true,
  }
);

const LoyalCustomer = models.LoyalCustomer || model("LoyalCustomer", loyalcustomer);

export default LoyalCustomer;
