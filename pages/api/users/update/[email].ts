import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import middleware from "../../../../middlewares/middleware";
import UserService from "../../../../services/user-service";
import User from "../../../../domain/User";
import UserError from "../../../../errors/UserError";
import { ApiResponse } from "../../../../utils/ApiResponse";
import ErrorHandler from "../../../../utils/ErrorHandler";

const userService = new UserService();
const errorHandler = new ErrorHandler();

const handler = nextConnect();

handler.use(middleware);

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const email = req.query.email.toString();
    const data = req.body;
    const isBadge = await userService.getBadges(email, data.badges.id);
    if (isBadge) throw UserError.ALREADY_REGISTERED;

    const user = await userService.getByEmail(email);
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
