import { connectToDB } from '@utils/database';
import  User  from '@models/user';
import HR from '@models/hr'
import OTP from '@models/otp'
import mongoose from 'mongoose';

export const POST = async(request, { params }) => {
    const data = await request.json();
    const submittedOTP = data.otp;
    try {
        await connectToDB();
        if (params.id != "undefined") {
            // const userOTP = await OTP.findById(params.id);
            // if(!userOTP)return new Response("Unauthorized Request", { status: 500 })
            // if(userOTP.otp!=submittedOTP)return new Response("Wrong OTP, Try Again", { status: 500 })
            const currUser = await User.findById(params.id);
            currUser.role="HR";
            const currUserEmail=currUser.email;
            const upUser = await currUser.save();
            const HRExists = await HR.findOne({
                email:currUserEmail
            });
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
        return new Response("Error message while making HR ", { status: 500 })
    } catch (error) {
        return new Response("Failed to get User Details in HR Verification " + error.toString(), {
            status: 500
        })
    }

}