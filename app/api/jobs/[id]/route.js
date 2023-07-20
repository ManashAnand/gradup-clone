import { connectToDB } from "@utils/database";
import Job from '@models/job';
import mongoose from "mongoose";
export const GET = async (request, { params }) => {
    // try {
    //     await connectToDB();
    //     const response =await Job.findById({id});
    //     return new Response(JSON.stringify(response), { status: 200 })
    // } catch (error) {
    //     return new Response("Failed to fetch the Jo with given Id", { status: 500 })
    // }
    try{
        await connectToDB();
        if(params.id!="undefined"){
        const userDetails = await Job.findOne({_id:new mongoose.Types.ObjectId(params.id)})
        return new Response(JSON.stringify(userDetails),{status:201})
        }
        return new Response("Error",{status:500})
    }
    catch(error){
        return new Response("Failed to get User Details",{
            status:500
        })
    }
} 