import { connectToDB } from '@utils/database';
import Hackathon from '@models/hackathon';
import mongoose from 'mongoose';

export const GET = async(req, { params }) => {
    try {
        await connectToDB();
        // await Hackathon.create({
        //     logo:"https://shortio-ugc-public.s3.amazonaws.com/mainpages-logo/url.codingkaro.in/c335ea1a-9b4a-456f-bc07-58c8f976217b",
        //     title:"Pro Coders 2023 Number 2",
        //     organizer:"Shypt Solution Number 2",
        //     registerEndDate:new Date(),
        //     hackathonStartDate:new Date(),
        //     hackathonEndDate:new Date(),
        //     description:"You are invited to this event and win a grand prize of 1 Cr. Number 2",
        //     applicant:["Raunit Verma","Ajay Jeena"],
        //     rewards:"1 Cr Cash Prize Number 2",
        // })
        const hackathonDetails = await Hackathon.find({});
        return new Response(JSON.stringify(hackathonDetails), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to get Hackathon Details", {
            status: 500
        })
    }
}