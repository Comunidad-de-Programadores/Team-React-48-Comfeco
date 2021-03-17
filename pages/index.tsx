import React, { ReactElement } from "react";
import Lading from "../components/landing";
import Landing2 from "../components/landing/Landing2";
import { useSession } from "next-auth/client";

interface Props {}

export default function index({}: Props): ReactElement {
  const [session, loading] = useSession();

  return (
    <>
      {session ? <Lading /> : <Landing2 />}
      {console.log(loading)}
    </>
  );
}
