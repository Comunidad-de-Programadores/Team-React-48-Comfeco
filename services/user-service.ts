import User from "../domain/User";
import UserModel from "../utils/db/models/User";

class UserService {
  async create(user: User) {
    const userDB = new UserModel(user.toPersistence());
    await userDB.save();
  }

  async update(user: User): Promise<void> {
    await UserModel.updateOne(
      { _id: user.id },
      {
        $set: user.toPersistence(),
      }
    );
  }

  async getByEmail(email: string): Promise<User | null> {
    const userDB = await UserModel.findOne({ email });
    if (!userDB) return null;
    const user = new User({
      id: userDB._id,
      ...userDB.toObject(),
    });
    return user;
  }
  async getBadges(email: string, bad: string): Promise<User | null> {
    const userDB = await UserModel.findOne({ email });
    console.log("userDB", userDB.toObject());
    const userd = userDB.toObject();
    let reee = false;
    userd.badges.forEach((element: any) => {
      if (element.id === bad) {
        reee = true;
      } else {
        reee = false;
      }
    });
    if (reee) {
      return userd;
    } else {
      return null;
    }
  }
}

export default UserService;
