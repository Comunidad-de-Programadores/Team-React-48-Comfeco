import { Signup, SignupErrors } from "../../interfaces";

export default function signupValidator(values: Signup): SignupErrors {
  let errors: SignupErrors = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  };

  if (!values.username) {
    errors.username = "Usuario es requerido";
  }

  if (values.username.length < 3 && values.username.length > 10) {
    errors.username = "Username debe tener de 3 a 10 caracteres";
  }

  if (!values.email) {
    errors.email = "Email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email no válido";
  }

  if (!values.password) {
    errors.password = "Contraseña requerida";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener como minimo 6 carácteres";
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Contraseñas no coinciden";
  }

  return errors;
}
