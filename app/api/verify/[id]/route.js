import { connectToDB } from '@utils/database';
import  User  from '@models/user';
import HR from '@models/hr'
import OTP from '@models/otp'
import mongoose from 'mongoose';

export const POST = async(request, { params }) => {
    const data = await request.json();
    const submittedOTP = data.otp;
    console.log("yaha nahi pahucha bhaiii ioiiiiiiiiiiiiiiiiiiiiiiiiii");
    try {
        await connectToDB();
        if (params.id != "undefined") {
            const userOTP = await OTP.findById(params.id);
            console.log(userOTP," - > ", submittedOTP);
            console.log(data);
            console.log("yaha nahi pahucha bhaiii llllllllllllll");
            if(!userOTP)return new Response("Unauthorized Request", { status: 500 })
            console.log("yaha nahi pahucha bhaiii llllllllllllll");
            if(userOTP.otp!=submittedOTP)return new Response("Wrong OTP, Try Again", { status: 500 })
            console.log("yaha nahi pahucha bhaiii kkkkkkkkkkk");
            const currUser = await User.findById(params.id);
            currUser.role="HR";
            console.log("yaha nahi pahucha bhaiii mmmmmmmmmmmmmmmmmm");
            const currUserEmail=currUser.email;
            const upUser = await currUser.save();
            console.log("yaha nahi pahucha bhaiii ooooooooooooooooooo");
            const HRExists = await HR.findOne({
                email:currUserEmail
            });
            console.log("yaha nahi pahucha bhaiii llllllllllllll");
            if(!HRExists){
                await HR.create({
                    _id:params.id,
                    companyEmail:data.companyEmail,
                    email:currUser.email,
                    name:currUser.name,
                    companyName:data.companyName,
                    aboutCompany:data.aboutCompany,
                    posts:[],
                    contact:data.contact,
                    companyPhoto: data.companyPhoto,
                })
            }
            return new Response("You are now a HR. Mobile Number Verified.", { status: 201 })
        }
        return new Response("Error message while making HR ", { status: 502 })
    } catch (error) {
        return new Response("Failed to get User Details in HR Verification " + error.toString(), {
            status: 502
        })
    }

}