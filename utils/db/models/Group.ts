import mongoose from "mongoose";

const Groups = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    discord: {
      type: String,
    },
    type: {
      type: [Object],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const GroupsModel = mongoose.models.Groups || mongoose.model("Groups", Groups);

export default GroupsModel;
