import {connectToDB} from '@utils/database';
import User from '@models/user';
import mongoose from 'mongoose';

export const GET = async(req) => {
    try{
        await connectToDB();
        const userDetails = await Jobs.findOne({})
        return new Response(JSON.stringify(userDetails),{status:201})
        return new Response("Error",{status:500})
    }
    catch(error){
        console.log(error);
        return new Response("Failed to get Jobs Details",{
            status:500
        })
    }

}