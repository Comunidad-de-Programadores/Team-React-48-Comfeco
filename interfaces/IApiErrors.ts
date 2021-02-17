import HttpStatusCode from "../enums/HttpStatusCodes";

abstract class IApiErrors {
  abstract code: HttpStatusCode;
  abstract status: string;
  abstract error: string;
  abstract data?: any;
}

export default IApiErrors;