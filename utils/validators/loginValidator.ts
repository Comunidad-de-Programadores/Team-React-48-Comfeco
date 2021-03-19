import { Login, LoginErrors } from "../../interfaces";

export default function loginValidator(values: Login): LoginErrors {
  let errors: LoginErrors = {
    email: null,
    password: null,
  };

  if (!values.email) {
    errors.email = "Email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email no válido";
  }

  if (!values.password) {
    errors.password = "Contraseña es requerida";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener como minimo 6 carácteres";
  }
  return errors;
}
