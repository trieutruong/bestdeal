import { Schema, model, models } from "mongoose";

const rankmember = new Schema({
  rankMemberPolicy: [{
    img: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true}
  }],
  rankMemberBenefitsTitle: {
    title: { type: String, required: true },
    silver: { type: String, required: true },
    gold: { type: String, required: true },
    diamond: { type: String, required: true }
  },
  rankMemberBenefits: [{
    title: { type: String, required: true },
    silver: { type: Boolean || String , required: true },
    gold: { type: Boolean , required: true },
    diamond: { type: Boolean , required: true }
  }]
});

const RankMember = models.RankMember || model("RankMember", rankmember, "RankMember");

export default RankMember;
