import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
  token: {
    type: String
  },
  userId: {
    type: String
  },
  type: {
    type: String
  },
  expireAt: {
    type: Date,
    required: true
  }
});

TokenSchema.index({ expireAt: 1 }, { expireAfterSeconds : 0 });
const Token = mongoose.models.Token || mongoose.model('Token', TokenSchema);

export default Token;