import React from "react";
import { useSession } from "next-auth/client";

import Landing from "../components/landing";
import Landing2 from "../components/landing/Landing2";

<<<<<<< HEAD
export default function index(): JSX.Element {
  const [session, loading] = useSession();
=======
const IndexPage = () => (
  <Layout title="Home">
    <Landing />
  </Layout>
);
>>>>>>> 1ec4541 (refactor(pages): asigning head titles)

  return (
    <>
      {session ? <Landing /> : <Landing2 />}
      {console.log(loading)}
    </>
  );
}
