import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import nextConnect from 'next-connect';
import middleware from '../../../middlewares/middleware';
import UserService from '../../../services/user-service';
import User from '../../../domain/User';

const userService = new UserService();
const handler = nextConnect();

handler.use(middleware);

handler.get((_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(sampleUserData);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body;
    const user = new User(data);
    user.hashPassword();
    await userService.create(user);
    res.status(201).json("Created");
  } catch (error) {
    res.status(500).json(error.message);
  }
});


export default handler
