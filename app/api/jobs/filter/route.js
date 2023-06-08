import { connectToDB } from "@utils/database";
import Job from '@models/job';
import mongoose from "mongoose";
export const POST = async (request, { params }) => {
    try{
        const data = await request.json();
        const salary = data.stipend;
        const titleArray = data.title;
        const locationArray = data.location;
        var query = {};
        if(locationArray.length>0)query.location={$in:locationArray};
        if(titleArray.length>0)query.title={$in:titleArray};
        // query.stipend = {$gte:salary};
        await connectToDB();
        const JobDetails = await Job.find(query);
        return new Response(JSON.stringify(JobDetails),{status:201})
    }
    catch(error){
        console.log(error);
        return new Response("Failed to get User Details",{
            status:500
        })
    }
} 