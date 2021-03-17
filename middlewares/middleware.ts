import nextConnect from 'next-connect';
import db from './db';
import errorHandler from './error-handler';

const middleware = nextConnect();

middleware
  .use(db)
  .use(errorHandler);

export default middleware;