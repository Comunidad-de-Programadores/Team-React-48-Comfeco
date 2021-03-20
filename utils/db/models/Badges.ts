import mongoose from "mongoose";

const Badges = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    howToWin: {
      type: String,
    },
    ico: {
      type: String,
    },
  },
  { timestamps: true }
);

const BadgesModel = mongoose.models.Badges || mongoose.model("Badges", Badges);

export default BadgesModel;
