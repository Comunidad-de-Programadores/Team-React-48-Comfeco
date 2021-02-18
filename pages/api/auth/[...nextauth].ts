import NextAuth from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import Providers from 'next-auth/providers'


const options = {
  site: process.env.NEXTAUTH_URL,
   providers: [
    Providers.Google({
      clientId:process.env.GOOGLE_ID ?process.env.GOOGLE_ID :"",
      clientSecret:process.env.GOOGLE_SECRET? process.env.GOOGLE_SECRET :""
    }),
    Providers.Facebook({
    clientId: process.env.FACEBOOK_CLIENT_ID ?  process.env.FACEBOOK_CLIENT_ID :"",
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET? process.env.FACEBOOK_CLIENT_SECRET :""
  })
  ],
  database: process.env.DATABASE_URL
}

export default (req:NextApiRequest, res:NextApiResponse) => NextAuth(req, res, options)