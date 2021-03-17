import { NextApiRequest, NextApiResponse } from "next";

export default function errorHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) {
  console.log("==============================", res, req);
  // console.log("error", error);
  next();
}
