import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import nextConnect from 'next-connect';
import middleware from '../../../middlewares/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get((_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(sampleUserData);
});

export default handler
