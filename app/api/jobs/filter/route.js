import { connectToDB } from "@utils/database";
import Job from '@models/job';
import mongoose from "mongoose";
export const POST = async (request, { params }) => {
    try{
        const data = await request.json();
        const salary = parseInt(data.stipend);
        const titleArray = data.title;
        const locationArray = data.location;
        const page = parseInt(data.page);
        const limit = 6;
        const skip = (page - 1) * limit;
        let intern = data.intern === "true" ? true : false;
        let startup = data.startup === "true" ? true : false;
        var currentDate = new Date().toISOString();
        console.log(currentDate);
        var query = {};
        query.isIntern=intern
        query.isStartUp=startup
        if(locationArray.length>0)query.location={$in:locationArray};
        if(titleArray.length>0)query.title={$in:titleArray};
        query.stipend = {$gte:salary};
        // query.lastDateToApply = {gte:currentDate}
        await connectToDB();
        const JobDetails = await Job.find(query).skip(skip).limit(limit);
        return new Response(JSON.stringify(JobDetails),{status:201})
    }
    catch(error){
        console.log(error);
        return new Response(error,{
            status:500
        })
    }
} 