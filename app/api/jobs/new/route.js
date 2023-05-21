import Job from "@models/job";
import { connectToDB } from "@utils/database";

export const POST = async(request) => {
    const { title,isIntern,companyName,companyLink,duration,stipend,lastDate,
    expectedStartDate,skillsRequired,eligiblilty,perks,noOfOpenings,workingHours,
    postedDate,responsilities } = await request.json();

    try {
        await connectToDB();
        const newJob = new Job({ 
            title:title,
            isIntern: isIntern,
            companyName: companyName,
            companyLink: companyLink,
            duration: duration,
            stipend: stipend,
            lastDate: lastDate,
            expectedStartDate: expectedStartDate,
            skillsRequired: skillsRequired,
            eligiblilty: eligiblilty,
            perks: perks,
            noOfOpenings: noOfOpenings,
            workingHours: workingHours,
            postedDate: postedDate,
            responsilities:responsilities
         });

        await newJob.save();
        console.log("Job saved ");
        return new Response(JSON.stringify(newJob), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}