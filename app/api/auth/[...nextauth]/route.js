import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';
import CredentialsProvider from "next-auth/providers/credentials"
// import Providers from 'next-auth/providers';
import User from '@models/user';

import { connectToDB } from '@utils/database';

const bcrypt = require('bcrypt');



const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0"
        }),
        // Providers.Credentials({
        //     name: 'Credentials',
        //     credentials: {
        //         username: { label: "Username", type: "text" },
        //         password: { label: "Password", type: "password" }
        //     },
        //     authorize: async (credentials) => {
        //         try {
        //             await connectToDB();
        //             const user = await User.findOne({ username: credentials.username });

        //             if (!user || user.password !== credentials.password) {
        //                 return Promise.resolve(null);
        //             }

        //             return Promise.resolve(user);
        //         } catch (error) {
        //             console.error('Error during authentication:', error);
        //             return Promise.resolve(null);
        //         }
        //     }
        // })
        // providers: [
        //     GoogleProvider({
        //         clientId: process.env.GOOGLE_ID,
        //         clientSecret: process.env.GOOGLE_CLIENT_SECRET
        //     }),

        //     GitHubProvider({
        //         clientId: process.env.GITHUB_CLIENT_ID,
        //         clientSecret: process.env.GITHUB_CLIENT_SECRET,
        //     }),

        //     TwitterProvider({
        //         clientId: process.env.TWITTER_CLIENT_ID,
        //         clientSecret: process.env.TWITTER_CLIENT_SECRET,
        //     }),

        //     Providers.Credentials({
        //         name: 'Credentials',
        //         credentials: {
        //             username: { label: "Username", type: "text" },
        //             password: { label: "Password", type: "password" }
        //         },
        //         authorize: async (credentials) => {
        //             try {
        //                 await connectToDB();
        //                 const user = await User.findOne({ username: credentials.username });

        //                 if (!user || user.password !== credentials.password) {
        //                     return Promise.resolve(null);
        //                 }

        //                 return Promise.resolve(user);
        //             } catch (error) {
        //                 console.error('Error during authentication:', error);
        //                 return Promise.resolve(null);
        //             }
        //         }
        //     })
        
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //       email,
        //       password 
        //     },
        //     async authorize(credentials, req) {
        //             console.log(credentials)
              
        //             try {

        //                 await connectToDB();

        //                     const saltRounds = 10;
        //                     bcrypt.hash(credentials.password, saltRounds, async (err, hashedPassword) => {
        //                         if (err) {
        //                           console.error(err);
        //                         } else {
        //                             await User.create({
        //                                 email: credentials.email,
        //                                 id: credentials.email,
        //                                 name: "x" ,
        //                                 profilePhoto: "",
        //                                 contactNo: "",
        //                                 appliedJobs: [],
        //                                 education: [],
        //                                 resume: "",
        //                                 project: [],
        //                                 bio: "",
        //                                 experience: [],
        //                                 social: [],
        //                                 skills: "",
        //                                 interest: "",
        //                                 location: "",
        //                                 gender: false,
        //                                 achievement: [],
        //                                 role: "User",
        //                                 isAlumni: false,
        //                                 joinDate: new Date(),
        //                                 password: hashedPassword
        //                             })
        //                         }
        //                       });
                             
                          
        //         return  '/loginuser'
                        
                        
        //             } catch (error) {
        //                 console.log(error)
        //             }

        //       return null
        //     }
        //   })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    page:{
        signIn:'/signup'
    },
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();
                // check if a user already exists
                console.log("++++++++++++++++++++++++++Working++++++++++++++++++++")
                const userExists = await User.findOne({
                    email: profile.email
                }); 
                // if not, create a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        id: profile.email,
                        name: profile.name,
                        profilePhoto: profile.picture,
                        contactNo: "",
                        appliedJobs: [],
                        education: [],
                        resume: "",
                        project: [],
                        bio: "",
                        experience: [],
                        social: [],
                        skills: "",
                        interest: "",
                        location: "",
                        gender: false,
                        achievement: [],
                        role: "User",
                        isAlumni: false,
                        joinDate: new Date()
                    })
                }
                return true;
            } catch (error) {
            }
        }
    }
})

export { handler as GET, handler as POST };