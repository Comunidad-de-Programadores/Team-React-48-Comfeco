import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import db from "../../../../../middlewares/db";
import MailService from "../../../../../services/MailService";
import TokenService from "../../../../../services/TokenService";
import UserService from "../../../../../services/user-service";

const userService = new UserService();
const tokenService = new TokenService();
const emailService = new MailService();

const handler = nextConnect();

handler.use(db);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.body;
    const user = await userService.getByEmail(email);
    const token = user.generateResetPasswordToken();
    await emailService.send(user, "Reset Password", token.token);
    await tokenService.create(token);
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  } 
});

export default handler;