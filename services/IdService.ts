import mongoose from 'mongoose';

class IdService {
  generate(): string {
    return mongoose.Types.ObjectId().toString();
  }
}

export default IdService;