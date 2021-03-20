import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../utils/sample-data";
import nextConnect from "next-connect";
import middleware from "../../../middlewares/middleware";
import UserService from "../../../services/user-service";
import User from "../../../domain/User";
import { ApiResponse } from "../../../utils/ApiResponse";
import UserError from "../../../errors/UserError";
import ErrorHandler from "../../../utils/ErrorHandler";

const userService = new UserService();
const errorHandler = new ErrorHandler();

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.query.id.toString();
  try {
    const user = await userService.getByEmail(email);
    const response = ApiResponse.ok("user data", user);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id.toString();
    const data = req.body;

    const user = await userService.getById(id);
    if (!user) throw UserError.NOT_FOUND;

    const updatedUser = new User({
      ...user,
      ...data,
      password: user.password,
      id: user.id,
      email: user.email,
    });

    await userService.update(updatedUser);
    const response = ApiResponse.created(
      "Update Succesfully",
      updatedUser.toPresentation()
    );
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

export default handler;
