import User from '../domain/User';
import UserModel from '../utils/db/models/User';

class UserService {
  async create(user: User) {
    const userDB = new UserModel(user.toPersistence());
    await userDB.save();
  }

  async update(user: User): Promise<void> {
    await UserModel.updateOne({ _id: user.id }, {
      $set: user.toPersistence()
    });
  }

  async getByEmail(email: string): Promise<User> {
    const userDB = await UserModel.findOne({ email });
    const user = new User(userDB);
    return user;
  }

  async getById(id: string): Promise<User> {
    const userDB = await UserModel.findOne({ _id:  id});
    const user = new User(userDB);
    return user;
  }
}

export default UserService;
