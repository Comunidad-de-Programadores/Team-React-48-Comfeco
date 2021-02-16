import User from '../domain/User';
import UserModel from '../utils/db/models/User';

class UserService {
  async create(user: User) {
    const userDB = new UserModel(user.toPersistence());
    await userDB.save();
  }
}

export default UserService;
