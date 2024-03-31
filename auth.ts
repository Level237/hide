import NextAuth from "next-auth";
import { authConfig } from './auth.config';
import {z} from "zod"
import CredentialsProvider from "@auth/core/providers/credentials";
import getUser from "./db/queries/users/getUser";
import { compare } from "bcrypt";



export const {handlers:{GET,POST},auth,signIn,signOut}=NextAuth({
  secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
          credentials: {
            
            email: {
                label: 'email',
                type: 'email',
                placeholder: 'grafbase',
              },
              password: { label: 'Password', type: 'password' },
          },
          async authorize(credentials, req) {
            const { email, password } = credentials as {
                email: string
                password: string
              }
            // Add logic here to look up the user from the credentials supplied
           const user=await getUser(credentials?.email)
          if(credentials.email===user?.email){
            const isValid = await compare(password, user?.password || "")
            if (!isValid) {
                throw new Error('Wrong credentials. Try again.')
              }
            return {id:user?.id,email:user?.email,name:user?.name,phone:user?.phone}
          }
          
            return null;
          }
        }),
       
      ],
     callbacks:{
      async jwt({token,user,session}){
        console.log("jwt callback",{token,user,session});
       if(user){
        return {
          ...token,
          id:user.id,
          phone:user.phone,
          profile:user.profile,
          email:user.email,
          name:user.name
        }
       }
     return token;
      },
      async session({session,token,user}){
        console.log("session callback",{session,token,user});
       
        return {
          ...session,
          user:{
            ...session.user,
            id:token.id,
            phone:token.phone,
            
          }
        }
            return session
      }
     },
     session:{
      strategy:"jwt",
     }
})