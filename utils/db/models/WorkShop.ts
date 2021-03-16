import mongoose from "mongoose";

const WorkShopSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  profession: {
    type: String,
  },
  emition_date: {
    type: Date,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  hour: {
    type: String,
  },
});

const WorkShopModel =
  mongoose.models.WORKSHOP || mongoose.model("WORKSHOP", WorkShopSchema);

export default WorkShopModel;
