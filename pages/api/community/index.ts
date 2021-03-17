import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect';
import { Community } from '../../../domain/Community';
import middleware from '../../../middlewares/middleware';
import { CommunityService } from '../../../services/CommunityService';
import IdService from '../../../services/IdService';
import { ApiResponse } from '../../../utils/ApiResponse';
import ErrorHandler from '../../../utils/ErrorHandler';

const handler = nextConnect();
const errorHandler = new ErrorHandler();
const idService = new IdService();
const communityService = new CommunityService();

handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { profession, createdAt, title, description, icon } = req.body;
    const id = idService.generate();
    const community = new Community({ id, profession, createdAt, title, description, icon});
    await communityService.create(community);
    const response = ApiResponse.created("workshop created successfully", community);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const communities = await communityService.get();
    const response = ApiResponse.ok("Communities list", communities);
    res.status(response.code).send(response);
  } catch (error) {
    console.log(error);
    errorHandler.sendError(error, req, res);
  }
});

export default handler;