import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/client";

import usePasswordToggle from "./usePasswordToggle";
import signupValidator from "../utils/validators/signupValidator";
import useValidation from "./useValidation";

function useAuth() {
  const [session, loading] = useSession();
  const router = useRouter();
  const [apiError, setApiError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const {
    inputType: inputTypePassword,
    Icon: IconPassword,
  } = usePasswordToggle();
  const {
    inputType: inputTypeConfirmPassword,
    Icon: IconConfirmPassword,
  } = usePasswordToggle();
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const register = async () => {
    try {
      const response = await fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.code === 201) {
        signIn("credentials", {
          callbackUrl: window.location.origin,
          email: values.email,
          password: values.password,
        });
        setRegisterSuccess(true);
        setApiError(null);
        return;
      }

      setApiError(data?.error);
      setRegisterSuccess(false);
    } catch (error) {
      setApiError(error?.message);
    }
  };
  const { values, errors, handleChange, handleSubmit } = useValidation(
    initialState,
    signupValidator,
    register
  );

  return {
    session,
    loading,
    router,
    apiError,
    setApiError,
    registerSuccess,
    values,
    errors,
    handleChange,
    handleSubmit,
    inputTypeConfirmPassword,
    inputTypePassword,
    IconPassword,
    IconConfirmPassword,
  };
}

export default useAuth;
