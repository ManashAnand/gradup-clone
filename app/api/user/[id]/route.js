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