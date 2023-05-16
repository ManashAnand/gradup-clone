import {connectToDB} from '@utils/database';
import User from '@models/user';
import mongoose from 'mongoose';

export const GET = async(req,{params}) => {
    try{
        await connectToDB();
        console.log(params, "params in user")
        if(params.id!="undefined"){
        const userDetails = await User.findOne({_id:new mongoose.Types.ObjectId(params.id)})
        return new Response(JSON.stringify(userDetails),{status:201})
        }
        return new Response("Error",{status:500})
    }
    catch(error){
        console.log(error);
        return new Response("Failed to get User Details",{
            status:500
        })
    }

}

export const PATCH = async (request, { params }) => {
    const data = await request.json();
    console.log(data);
    try {
        await connectToDB();
        console.log(params)
        const existingUser = await User.findById(params.id);

        if (!existingUser) {
            return new Response("User not found", { status: 404 });
        }
        await existingUser.save();
        return new Response("Successfully updated the User Data", { status: 200 });
    } catch (error) {
        return new Response("Error Updating User Data", { status: 500 });
    }
};
