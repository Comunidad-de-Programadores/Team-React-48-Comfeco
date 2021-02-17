import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import User from "../../../../../domain/User";
import UserError from "../../../../../errors/UserError";
import db from "../../../../../middlewares/db";
import TokenService from "../../../../../services/TokenService";
import UserService from "../../../../../services/user-service";

const tokenService = new TokenService();
const userService = new UserService();
const handler = nextConnect();

handler.use(db);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.query.token.toString();
    const isValid = Boolean(await tokenService.getPasswordResetToken(token));
    res.status(200).json(isValid);
  } catch (error) {
    res.status(500).json(error.message)
  }
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const requestToken = req.query.token.toString();
    const { password } = req.body;

    const token = await tokenService.getPasswordResetToken(requestToken);
    if(!token) return res.status(403).json("Token expired");
    const user = await userService.getById(token.userId);
    if(!user) throw UserError.NOT_FOUND;
    const newUser = new User({
      id: user.id,
      username: user.username,
      email: user.email,
      password
    });

    newUser.hashPassword();

    await userService.update(newUser);
    res.status(200).json(newUser.toPresentation());
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default handler;