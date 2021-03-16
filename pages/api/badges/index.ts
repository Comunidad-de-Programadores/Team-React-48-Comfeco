import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { Badges } from "../../../domain/Badges";
import middleware from "../../../middlewares/middleware";
import { BadgesService } from "../../../services/BadgesService";
import IdService from "../../../services/IdService";
import { ApiResponse } from "../../../utils/ApiResponse";
import ErrorHandler from "../../../utils/ErrorHandler";

const handler = nextConnect();
const errorHandler = new ErrorHandler();
const idService = new IdService();
const badgesService = new BadgesService();

handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { howToWin, name, description, ico } = req.body;
    const id = idService.generate();
    const badge = new Badges({
      id,
      howToWin,
      name,
      description,
      ico,
    });
    await badgesService.create(badge);
    const response = ApiResponse.created("badge created successfully", badge);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const badges = await badgesService.get();
    const response = ApiResponse.ok("badges list", badges);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

export default handler;
