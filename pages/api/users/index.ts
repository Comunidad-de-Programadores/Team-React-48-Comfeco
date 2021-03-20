import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../../utils/sample-data";
import nextConnect from "next-connect";
import middleware from "../../../middlewares/middleware";
import UserService from "../../../services/user-service";
import User from "../../../domain/User";
import IdService from "../../../services/IdService";
import { ApiResponse } from "../../../utils/ApiResponse";
import UserError from "../../../errors/UserError";
import ErrorHandler from "../../../utils/ErrorHandler";

const userService = new UserService();
const idService = new IdService();
const errorHandler = new ErrorHandler();

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body;
    const user = await userService.getByEmail(data.email);
    const response = ApiResponse.ok("user data", user);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body;
    const id = idService.generate();
    let da = {
      genre: "Generp",
      country: "Pais",
      description: "Descripcion",
      social: {
        facebook: "facebook/username",
        twitter: "twitter/username",
        linkedin: "linkedin/username",
        github: "github/username",
      },
    };
    const user = new User({ ...data, ...da, id });

    const isRegistered = await userService.getByEmail(user.email);

    if (isRegistered) throw UserError.ALREADY_REGISTERED;

    user.hashPassword();
    await userService.create(user);
    const response = ApiResponse.created(
      "successful registration",
      user.toPresentation()
    );
    res.status(response.code).json(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

export default handler;
