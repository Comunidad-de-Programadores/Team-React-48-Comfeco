import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import User from "../../../../../domain/User";
import UserError from "../../../../../errors/UserError";
import db from "../../../../../middlewares/db";
import TokenService from "../../../../../services/TokenService";
import UserService from "../../../../../services/user-service";
import { ApiResponse } from "../../../../../utils/ApiResponse";
import ErrorHandler from "../../../../../utils/ErrorHandler";

const tokenService = new TokenService();
const userService = new UserService();
const errorHandler = new ErrorHandler();
const handler = nextConnect();

handler.use(db);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.query.token.toString();
    const isValid = Boolean(await tokenService.getPasswordResetToken(token));
    const response = ApiResponse.ok("OK", isValid);
    res.status(response.code).send(response);
  } catch (error) {
    errorHandler.sendError(error, req, res);
  }
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const requestToken = req.query.token.toString();
    const { password } = req.body;
    const token = await tokenService.getPasswordResetToken(requestToken);
    
    if(!token) throw UserError.TOKEN_EXPIRED;
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
    const response = ApiResponse.ok("Update successful.", newUser.toPresentation());
    res.status(response.code).json(response);
  } catch (error) {
    errorHandler.sendError(error, req, res);
  }
});

export default handler;