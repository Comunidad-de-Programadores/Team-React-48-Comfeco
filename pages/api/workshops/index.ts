import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect';
import { WorkShop } from '../../../domain/WorkShop';
import middleware from '../../../middlewares/middleware';
import IdService from '../../../services/IdService';
import { WorkShopService } from '../../../services/WorkShopService';
import { ApiResponse } from '../../../utils/ApiResponse';
import ErrorHandler from '../../../utils/ErrorHandler';

const handler = nextConnect();
const errorHandler = new ErrorHandler();
const idService = new IdService();
const workShopService = new WorkShopService();

handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { author, profession, emition_date, title, description, hour } = req.body;
    const id = idService.generate();
    const workshop = new WorkShop({ author, profession, emition_date, id, title, description, hour});
    await workShopService.create(workshop);
    const response = ApiResponse.created("workshop created successfully", workshop);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const workshops = await workShopService.get();
    const response = ApiResponse.ok("Workshops list", workshops);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

export default handler;