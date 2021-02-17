import { NextApiRequest, NextApiResponse } from "next";
import IApiErrors from "../interfaces/IApiErrors";
import { IApplicationResponse } from "../interfaces/IApplicationResponse";
import { ApiResponse } from "./ApiResponse";

class ErrorHandler {
  private _formatter: IApplicationResponse;

  constructor() {
    this._formatter = new ApiResponse();
  }

  public sendError(error: any, _req: NextApiRequest, res: NextApiResponse)  {
    const response = this._format(error);
    res.status(response.code).json(response);
  };

  private _format(error: any) {
    this._formatter = new ApiResponse();

    if(error instanceof IApiErrors) {
      const applicationError = <IApiErrors>error;

      return this._formatter.custom(
        applicationError.code,
        applicationError.error,
        applicationError.status,
        applicationError.data
      )
    } else {
      return this._formatter.serverError(error.message);
    }
  }
}

export default ErrorHandler;