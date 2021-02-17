import HttpStatusCode from "../enums/HttpStatusCodes";

export interface IApplicationResponse {
  custom(
    code: HttpStatusCode,
    error: string,
    status: string,
    data?: any
  ): IApiResponse;

  serverError(message: string): any;
}

export interface IApiResponse {
  code: HttpStatusCode,
  message?: string,
  data?: any,
  status?: string,
  error?: string
}
