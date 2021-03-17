import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import { NextApiRequest, NextApiResponse } from "next";
import Providers from "next-auth/providers";
import axios from "axios";

const providers = [
  Providers.Email({
    server: {
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME
          ? process.env.EMAIL_USERNAME
          : "teamreact48@gmail.com",
        pass: process.env.EMAIL_PASSWORD
          ? process.env.EMAIL_PASSWORD
          : "Tteam123456789",
      },
      tls: {
        rejectUnauthorized: false,
      },
    },
    from: process.env.EMAIL_FROM,
  }),
  Providers.Google({
    clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : "",
    clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : "",
  }),
  Providers.Facebook({
    clientId: process.env.FACEBOOK_CLIENT_ID
      ? process.env.FACEBOOK_CLIENT_ID
      : "",
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      ? process.env.FACEBOOK_CLIENT_SECRET
      : "",
  }),
  Providers.Credentials({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: "Credentials",
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      username: {
        label: "Email",
        type: "text",
        placeholder: "example@email.com",
      },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      // Add logic here to look up the user from the credentials supplied
      try {
<<<<<<< HEAD
        const user = await axios.post(
          "http://localhost:3000/api/login/",
          {
            password: credentials.password,
            email: credentials.email,
          },
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
=======

        const response = await axios.post('http://localhost:3000/api/login/',
        {
          password: credentials.password,
          email: credentials.email
        },
        {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
>>>>>>> a810b21 (Next auth with credentials)
          }
        );

        if (response) {
          console.log("user.data", response.data.data)
          return response.data.data;
        }
      } catch (e) {
        const errorMessage = e.response.data.message;
        // Redirecting to the login page with error message          in the URL
        throw new Error(errorMessage + "&email=" + credentials.email);
      }
    },
  }),
];

const callbacks = {
  async jwt(token, user, account, profile, isNewUser) {
    // if (user) {
    //   token.accessToken = user.data.token;
    // }
    console.log("token", token)
    return token;
  },

  async session(session, token) {
    session.accessToken = token.accessToken;
    return session;
  },
};

const options = {
  site: process.env.NEXTAUTH_URL,
  providers,
  callbacks,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: Adapters.TypeORM.Adapter(
    "mongodb+srv://teamadmin:hello123456@cluster0.wvic7.mongodb.net/nextauth?retryWrites=true&w=majority"
  ),
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
