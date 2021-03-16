import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema({
  profession: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  icon: {
    type: String
  }
}, { timestamps: true });

const CommunityModel = mongoose.models.Community || mongoose.model("Community", CommunitySchema);

export default CommunityModel;