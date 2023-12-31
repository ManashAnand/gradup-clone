//total users
//total hrs
//last seven days registered users
//total alumni

import { connectToDB } from '@utils/database';
import User from '@models/user';
import HR from '@models/hr'
import Job from '@models/job';
import mongoose from 'mongoose';

export const GET = async(request, { params }) => {
    try {
        await connectToDB();
        const search = new URL(request.url).search;
        const urlParams = new URLSearchParams(search);
        const email = urlParams.get('email');
        if(email!="tanmayrajr@gmail.com"){
            return new Response("Not authorized to see admin data", {status:201});
        }
        let totalNoOfUsers = 0, totalHRs = 0, lastSevenDaysRegisteresUsers = 0, totalAlumni = 0, totalActiveJobs = 0, totalJobs = 0
        await User.countDocuments({}).then((count)=>{
            totalNoOfUsers = count
        })
        await HR.countDocuments({}).then((count)=>{
            totalHRs = count
        })
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        await User.countDocuments({ joinDate: { $gte: sevenDaysAgo } })
        .then((count) => {
            lastSevenDaysRegisteresUsers = count
        })

        await User.countDocuments({ isAlumni: true })
        .then((count) => {
            totalAlumni = count
        })
        
        await Job.countDocuments({}).then((count)=>{
            totalJobs = count
        })

        await Job.countDocuments({ isActive: true })
        .then((count) => {
            totalActiveJobs = count
        })

        const data = {
            totalNoOfUsers:totalNoOfUsers,
            totalHRs:totalHRs,
            lastSevenDaysRegisteresUsers:lastSevenDaysRegisteresUsers,
            totalAlumni:totalAlumni,
            totalActiveJobs:totalActiveJobs,
            totalJobs:totalJobs
        }

        return new Response(JSON.stringify(data), { status: 201 })
    } catch (error) {
        return new Response("Failed to get Admin-access Details", {
            status: 500
        })
    }
}