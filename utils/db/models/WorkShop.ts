import mongoose from 'mongoose';

const WorkShopSchema = new mongoose.Schema({
  author: {
    type: String
  },
  profession: {
    type: String
  },
  emition_date: {
    type: Date
  }
});

const WorkShopModel = mongoose.models.WorkShopModel || mongoose.model('workshops', WorkShopSchema);

export default WorkShopModel;