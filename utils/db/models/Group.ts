import mongoose from "mongoose";

const Groups = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const GroupsModel = mongoose.models.Groups || mongoose.model("Groups", Groups);

export default GroupsModel;
