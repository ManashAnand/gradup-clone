import MentorApplication from "@models/mentorApplication";
import { connectToDB } from "@utils/database";

export const POST = async(request) => {
    const data = await request.json();
    try {
        await connectToDB();
        const newApplication = new MentorApplication({ 
            name:data.name,
            conpanyName:data.companyName,
            mobileNo: data.mobileNo,
            email: data.email,
         });

        const addedObj = await newApplication.save();
        return new Response("New application for mentor created", { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new application for mentor", { status: 500 });
    }
}