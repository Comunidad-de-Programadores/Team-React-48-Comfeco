import HttpStatusCode from "../enums/HttpStatusCodes";
import IApiErrors from "../interfaces/IApiErrors";

class UserError extends IApiErrors {
  static readonly NOT_FOUND = new UserError(
    HttpStatusCode.NOT_FOUND,
    "error",
    "Usuario no encontrado"
  );

  static readonly ALREADY_REGISTERED = new UserError(
    HttpStatusCode.UNAUTHORIZED,
    "error",
    "El usuario introducido ya esta registrado"
  );

  static readonly ALREADY_BADGE = new UserError(
    HttpStatusCode.UNAUTHORIZED,
    "error",
    "Ya has obtenido esta medalla"
  );
  static readonly ALREADY_GROUP = new UserError(
    HttpStatusCode.UNAUTHORIZED,
    "error",
    "Ya perteneces a este grupo"
  );
  static readonly ALREADY_COMMITY = new UserError(
    HttpStatusCode.UNAUTHORIZED,
    "error",
    "Ya perteneces a esta comunidad"
  );
  static readonly BAD_CREDENTIALS = new UserError(
    HttpStatusCode.UNAUTHORIZED,
    "error",
    "Email o contraseña incorrectos"
  );

  static readonly TOKEN_EXPIRED = new UserError(
    HttpStatusCode.UNAUTHORIZED,
    "error",
    "Token expired."
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
