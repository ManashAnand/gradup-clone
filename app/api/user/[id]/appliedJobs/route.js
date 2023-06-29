import { connectToDB } from '@utils/database';
import Job from '@models/job';
import mongoose from 'mongoose';
import Application from '@models/application';
import {User} from '@models/user';
let page = 1;
const pageSize = 25;

export const GET = async(req, { params }) => {
    try {
        await connectToDB();
        const userId = params.id;
        const search=new URL(req.url).search;
        const urlParams=new URLSearchParams(search);
        page = urlParams.get('page');
        const user = await User.findOne({_id:userId});
        const appliedJobs = user.appliedJobs;
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, appliedJobs.length);
        let paginatedJobs;
        if (startIndex >= appliedJobs.length) { paginatedJobs = []; } else { paginatedJobs = appliedJobs.slice(startIndex, endIndex); }
        let appliedData = [];
        console.log(paginatedJobs,"JObs applied",appliedJobs)
        for(let i = 0; i<paginatedJobs.length; i++){
            const currUserData = await Job.findOne({_id:paginatedJobs[i]});
            appliedData.push(currUserData);
        }
        return new Response(JSON.stringify(appliedData), { status: 201 })
    } catch (error) {
        // console.log(error);
        return new Response(error, {
            status: 500
        })
    }
}