import React from "react";
import { useSession } from "next-auth/client";

<<<<<<< HEAD
import Lading from "../components/landing";
import Landing2 from "../components/landing/Landing2";
=======
const IndexPage = () => (
  <Layout title="Home">
    <Landing />
  </Layout>
);
>>>>>>> 1ec4541 (refactor(pages): asigning head titles)

export default function index(): JSX.Element {
  const [session, loading] = useSession();

  return (
    <>
      {session ? <Lading /> : <Landing2 />}
      {console.log(loading)}
    </>
  );
}
