import HttpStatusCode from "../enums/HttpStatusCodes";
import IApiErrors from "../interfaces/IApiErrors";

class UserError extends IApiErrors {

  static readonly NOT_FOUND = new UserError(
    HttpStatusCode.NOT_FOUND,
    'error',
    'User not found.'
  );

  static readonly ALREADY_REGISTERED = new UserError(
    HttpStatusCode.UNAUTHORIZED,
    'error',
    'The user is already registered.'
  );

  static readonly BAD_CREDENTIALS = new UserError(
    HttpStatusCode.UNAUTHORIZED,
    'error',
    'Invalid email or password.'
  );

  static readonly TOKEN_EXPIRED = new UserError(
    HttpStatusCode.UNAUTHORIZED,
    'error',
    'Token expired.'
  );

  private constructor(
    public readonly code: HttpStatusCode,
    public readonly status: string,
    public readonly error: string,
    public readonly data?: any
  ) {
    super();
  }
}

export default UserError;