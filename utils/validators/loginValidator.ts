import { Login, LoginErrors } from "../../interfaces";

export default function loginValidator(values: Login): LoginErrors {
  let errors: LoginErrors = {
    email: null,
    password: null,
  };

  if (!values.email) {
<<<<<<< HEAD
    errors.email = "Email es requerido";
=======
    errors.email = "Email is required";
>>>>>>> 226795e (feat(notfound): add page for not found route)
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email no válido";
  }

  if (!values.password) {
<<<<<<< HEAD
    errors.password = "Contraseña es requerida";
=======
    errors.password = "Password is required";
>>>>>>> 226795e (feat(notfound): add page for not found route)
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener como minimo 6 carácteres";
  }
  return errors;
}
