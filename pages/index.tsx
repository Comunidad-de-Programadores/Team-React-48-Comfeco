import React from "react";
import { useSession } from "next-auth/client";

import Lading from "../components/landing";
import Landing2 from "../components/landing/Landing2";

export default function index(): JSX.Element {
  const [session, loading] = useSession();

  return (
    <>
      {session ? <Lading /> : <Landing2 />}
      {console.log(loading)}
    </>
  );
}
