import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import nextConnect from 'next-connect';
import middleware from '../../../middlewares/middleware';
import UserService from '../../../services/user-service';
import User from '../../../domain/User';
import IdService from '../../../services/IdService';
import { ApiResponse } from '../../../utils/ApiResponse';
import UserError from '../../../errors/UserError';
import ErrorHandler from '../../../utils/ErrorHandler';

const userService = new UserService();
const idService = new IdService();
const errorHandler = new ErrorHandler();

const handler = nextConnect();

handler.use(middleware);

handler.get((_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(sampleUserData);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body;
    const id = idService.generate();
    const user = new User({...data, id});
    const isRegistered = await userService.getByEmail(user.email);

    if(isRegistered) throw UserError.ALREADY_REGISTERED;
    
    user.hashPassword();
    await userService.create(user);
    const response = ApiResponse.created('successful registration', user.toPresentation());
    res.status(response.code).json(response);
  } catch (error) {
    errorHandler.sendError(error, req, res);
  }
});


export default handler
