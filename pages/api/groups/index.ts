import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { Group } from "../../../domain/Groups";
import middleware from "../../../middlewares/middleware";
import { GroupService } from "../../../services/Groupservices";
import IdService from "../../../services/IdService";
import { ApiResponse } from "../../../utils/ApiResponse";
import ErrorHandler from "../../../utils/ErrorHandler";

const handler = nextConnect();
const errorHandler = new ErrorHandler();
const idService = new IdService();
const groupService = new GroupService();

handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { type, name, description, image } = req.body;
    const id = idService.generate();
    const group = new Group({
      id,
      type,
      name,
      description,
      image,
    });
    await groupService.create(group);
    const response = ApiResponse.created("group created successfully", group);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const group = await groupService.get();
    const response = ApiResponse.ok("group list", group);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

export default handler;
