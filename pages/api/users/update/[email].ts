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
    // const isGroup = await userService.getGroups(email, data.badges.id);
    // const isWorkshop = await userService.getWorkshops(email, data.badges.id);
    // const isCommunity = await userService.getComunnities(email, data.badges.id);
    // if (isWorkshop) throw UserError.ALREADY_REGISTERED;
    // if (isGroup) throw UserError.ALREADY_GROUP;
    // if (isCommunity) throw UserError.ALREADY_COMMITY;

    const user = await userService.getByEmail(email);
    if (!user) throw UserError.NOT_FOUND;
    let { badges, groups, communities, workshops } = user;
    if (data.badges) {
      const isBadge = await userService.getBadges(email, data.badges.id);
      badges.push(data.badges);
      if (isBadge) throw UserError.ALREADY_BADGE;
    }

    if (data.groups) {
      const isGroup = await userService.getGroups(email, data.groups.id);
      if (isGroup) throw UserError.ALREADY_GROUP;
      groups.push(data.groups);
    }

    if (data.communities) {
      const isCommunity = await userService.getGroups(
        email,
        data.communities.id
      );
      if (isCommunity) throw UserError.ALREADY_GROUP;
      communities.push(data.communities);
    }

    if (data.workshops) {
      const isWorkshop = await userService.getGroups(email, data.workshops.id);
      if (isWorkshop) throw UserError.ALREADY_GROUP;
      workshops.push(data.workshops);
    }

    const updatedUser = new User({
      ...user,
      ...data,
      workshops,
      communities,
      badges,
      groups,
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
