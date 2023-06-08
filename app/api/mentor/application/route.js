import {MentorApplication} from "@models/mentorApplication";
import { connectToDB } from "@utils/database";

export const POST = async(request) => {
    const data = await request.json();
    try {
        await connectToDB();
        const newApplication = new MentorApplication({ 
            name:data.name,
            conpanyName:"data.companyName",
            email: data.email,
            mobileNo: data.mobileNo,
         });

        const addedObj = await newApplication.save();
        console.log(addedObj)
        return new Response("New application for mentor created", { status: 201 })
    } catch (error) {
        console.log("Error is this",error);
        return new Response("Failed to create a new application for mentor", { status: 500 });
    }
}