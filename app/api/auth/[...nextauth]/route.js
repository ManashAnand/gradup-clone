import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {User}  from '@models/user';

import { connectToDB } from '@utils/database';
const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:{
        async session({session}) {
            const sessionUser = await User.findOne({
                email:session.user.email
            })
    
            session.user.id = sessionUser._id.toString();
    
            return session;
        },
        async signIn({profile}) {
            try{
                await connectToDB();
                // check if a user already exists
                const userExists = await User.findOne({
                    email:profile.email
                });
                // if not, create a new user
                if(!userExists){
                    await User.create({
                        email:profile.email,
                        id:profile.email,
                        name:profile.name,
                        profilePhoto:profile.picture
                    })
                }
                return true;
            }catch(error){
                console.log("Error while signin", error.message);
            }
        }
    }
})

export {handler as GET, handler as POST};