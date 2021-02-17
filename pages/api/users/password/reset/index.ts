import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import UserError from "../../../../../errors/UserError";
import db from "../../../../../middlewares/db";
import MailService from "../../../../../services/MailService";
import TokenService from "../../../../../services/TokenService";
import UserService from "../../../../../services/user-service";
import { ApiResponse } from "../../../../../utils/ApiResponse";
import ErrorHandler from "../../../../../utils/ErrorHandler";

const userService = new UserService();
const tokenService = new TokenService();
const emailService = new MailService();
const errorHandler = new ErrorHandler();
const handler = nextConnect();

handler.use(db);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.body;
    const user = await userService.getByEmail(email);
    if(!user) throw UserError.NOT_FOUND;

    const token = user.generateResetPasswordToken();
    
    await emailService.send(user, "Reset Password", token.token);
    await tokenService.create(token);
    const response = ApiResponse.ok("Token is valid", null);
    res.status(response.code).send(response);
  } catch (error) {
    errorHandler.sendError(error, req, res)
  } 
});

export default handler;