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
              email: "diangogavidia@gmail.com",
              password: "123456",
            })
          }
        >
          clickme
        </button>
      </div>
    </div>
  );
}
