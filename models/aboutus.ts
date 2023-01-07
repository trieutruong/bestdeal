import { Schema, model, models } from "mongoose";

const aboutus = new Schema(
  {
    link: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const AboutUs = models.AboutUs || model("AboutUs", aboutus);

export default AboutUs;
