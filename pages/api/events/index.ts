import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { Events } from "../../../domain/Events";
import middleware from "../../../middlewares/middleware";
import { EventsServices } from "../../../services/EventsServices";
import IdService from "../../../services/IdService";
import { ApiResponse } from "../../../utils/ApiResponse";
import ErrorHandler from "../../../utils/ErrorHandler";

const handler = nextConnect();
const errorHandler = new ErrorHandler();
const idService = new IdService();
const eventService = new EventsServices();

handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { category, createdAt, title, description, image, slug } = req.body;
    const id = idService.generate();
    const event = new Events({
      id,
      category,
      createdAt,
      title,
      slug,
      description,
      image,
    });
    await eventService.create(event);
    const response = ApiResponse.created("event created successfully", event);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const events = await eventService.get();
    const response = ApiResponse.ok("event list", events);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

export default handler;
