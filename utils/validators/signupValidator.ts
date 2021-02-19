import { Signup, SignupErrors } from "../../interfaces";

export default function signupValidator(values: Signup) : SignupErrors {
  let errors: SignupErrors = {
    username: null,    
    email: null,
    password: null,
    confirmPassword: null
  };

  if(!values.username) {
    errors.username = 'username is required';
  }

  if(values.username.length < 3 && values.username.length > 10) {
    errors.username = 'username should be between 3 to 10 characters';
  }

  if(!values.email) {
    errors.email = 'Email is required';
  }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
    errors.email = "Email no válido"
  }

  if(!values.password) {
    errors.password = 'Password is required';
  }else if(values.password.length < 6) {
    errors.password = 'Pasword must be at least 6 characters long';
  }

  if(values.confirmPassword !== values.password) {
    errors.confirmPassword = 'The confirmation password is not equal to password';
  }

  return errors
}