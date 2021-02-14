import React, { ReactElement } from "react";
import Layout from "../components/Layout";
import RecoverPaswordComponent from "../components/recover/RecoverPassword";

interface Props {}

export default function NewPassword({}: Props): ReactElement {
  return (
    <Layout title="Login">
      <RecoverPaswordComponent
        title="Crea tu Nueva Contraseña"
        description="Sigue las instrucciones para crear una contraseña segura."
        type="newpassword"
        img="/images/Security-cuate.png"
      />
    </Layout>
  );
}
