import React, { ReactElement } from "react";
import Layout from "../components/Layout";
import RecoverPaswordComponent from "../components/recover/RecoverPassword";

interface Props {}

export default function RecoverPassword({}: Props): ReactElement {
  return (
    <Layout title="Login">
      <RecoverPaswordComponent
        title="Recuperar Contraseña"
        description=" Ingresa tu correo electronico y te enviaremos un link para restaurar tu contraseña"
        type="recover"
        img="/images/Forgot password-bro.png"
      />
    </Layout>
  );
}
