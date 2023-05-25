import { connectToDB } from '@utils/database';
import { User } from '@models/user';
import HR from '@models/hr'
import mongoose from 'mongoose';

export const POST = async(req, { params }) => {
    try {
        await connectToDB();
        console.log(params.id, "params in HR verify");
        if (params.id != "undefined") {
            const currUser = await User.findById(params.id);
            currUser.role="HR";
            const upUser = await currUser.save();
            const HRExists = await HR.findOne({
                email:currUser.email
            });
            if(!HRExists){
                await HR.create({
                    _id:params.id,
                    email:currUser.email,
                    name:currUser.name,
                    companyName:"Shypt Solution",
                    posts:[],
                    contact:""
                })
            }
            return new Response("You are now a HR.", { status: 201 })
        }
        return new Response("Error", { status: 500 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to get User Details in HR Verification", {
            status: 500
        })
    }

}