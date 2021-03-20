import User, { UserSchema } from "./UserTypeOrm";

export default {
  User: {
    model: User,
    schema: UserSchema,
  },
};
