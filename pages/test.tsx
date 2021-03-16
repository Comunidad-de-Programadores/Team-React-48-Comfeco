import React, { ReactElement } from "react";
import { signIn } from "next-auth/client";

interface Props {}

export default function test({}: Props): ReactElement {
  return (
    <div>
      <div>
        test
        <button
          onClick={() =>
            signIn("credentials", {
              email: "nerivemu@gmail.com",
              password: "Bbl152800",
            })
          }
        >
          clickme
        </button>
      </div>
    </div>
  );
}
