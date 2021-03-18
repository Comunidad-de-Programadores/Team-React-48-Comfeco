import { useSession } from "next-auth/client";
import React from "react";
import Landing from "../components/landing";
import Landing2 from "../components/landing/Landing2";

export default function index(): JSX.Element {
  const [session, loading] = useSession();

  return (
    <>
      {session ? <Landing /> : <Landing2 />}
      {console.log(loading)}
    </>
  );
}
