import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  genre: {
    type: String
  },
  country: {
    type: String,
  },
  social: {
    twitter: String,
    linkedin: String,
    facebook: String,
    github: String
  },
  description: {
    type: String
  },
  photo: {
    type: String
  }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;