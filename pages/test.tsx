import React, { ReactElement, useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import Layout from "../components/Layout";

interface Props {}

export default function test({}: Props): ReactElement {
  const [session, loading] = useSession();

  const getData = async () => {
    if (loading) {
    } else {
      const response = await fetch(`/api/groups`);
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <Layout>
      <div>
        test
        <button onClick={() => getData()}>clickme</button>
      </div>
    </Layout>
  );
}
