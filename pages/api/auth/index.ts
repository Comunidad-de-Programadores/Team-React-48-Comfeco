import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import UserError from "../../../errors/UserError";
import middleware from "../../../middlewares/middleware";
import UserService from "../../../services/user-service";
import { ApiResponse } from "../../../utils/ApiResponse";
import ErrorHandler from "../../../utils/ErrorHandler";

const userService = new UserService();
const errorHandler = new ErrorHandler();
const handler = nextConnect();

handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {email, password} = req.body;
    const user = await userService.getByEmail(email);

    if(!user) throw UserError.NOT_FOUND;
    if(!user.isAuthenticate(password)) throw UserError.BAD_CREDENTIALS;
    
    const response = ApiResponse.ok('Success login', user.toPresentation());
    res.status(response.code).json(response);
  } catch (error) {
    errorHandler.sendError(error, req, res);
  }
});

export default handler
