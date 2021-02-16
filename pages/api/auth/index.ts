import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import middleware from "../../../middlewares/middleware";
import UserService from "../../../services/user-service";

const userService = new UserService();
const handler = nextConnect();

handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {email, password} = req.body;
    const user = await userService.getByEmail(email);
    if(!user.isAuthenticate(password)) return res.status(403).json("Bad Credentials");
    res.status(200).json(user.toPresentation());
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default handler
