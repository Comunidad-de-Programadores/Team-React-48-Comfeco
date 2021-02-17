import HttpStatusCode from "../enums/HttpStatusCodes";
import { IApiResponse, IApplicationResponse } from "../interfaces/IApplicationResponse";

export class ApiResponse implements IApplicationResponse {
  public custom(code: HttpStatusCode, error: string, status: string, data?: any) : IApiResponse {
    const response: IApiResponse = {
      code,
      error,
      status,
      data
    };

    return response;
  } 
    
  public serverError(message: string) {
    const response : IApiResponse = {
      code: HttpStatusCode.SERVER_ERROR,
      error: message,
      status: 'Internal server error.'
    }

    return response;
  }

  public static created(message: string, data: any) {
    const response: IApiResponse = {
      code: HttpStatusCode.CREATED,
      message,
      data,
      status: 'created',
    };

    return response;
  }

  public static ok(message: string, data: any) {
    const response: IApiResponse = {
      code: HttpStatusCode.OK,
      message,
      data,
      status: 'success',
    };

    return response;
  }
}