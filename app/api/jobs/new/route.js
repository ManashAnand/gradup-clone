import Job from "@models/job";
import { connectToDB } from "@utils/database";

export const POST = async(request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();
        const newJob = new Job({ creator: hrId, prompt, skills });

        await newJob.save();
        return new Response(JSON.stringify(newJob), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}