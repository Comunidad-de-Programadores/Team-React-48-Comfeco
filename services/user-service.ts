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

  async getByEmail(email: string): Promise<User | null> {
    const userDB = await UserModel.findOne({ email });
    if(!userDB) return null;
    const user = new User({
      id: userDB._id,
      username: userDB.username,
      email: userDB.email,
      password: userDB.password
    });
    return user;
  }

  async getById(id: string): Promise<User | null> {
    const userDB = await UserModel.findOne({ _id:  id});
    if(!userDB) return null;
    const user = new User({
      id: userDB._id,
      username: userDB.username,
      email: userDB.email,
      password: userDB.password
    });

    return user;
  }
}

export default UserService;
