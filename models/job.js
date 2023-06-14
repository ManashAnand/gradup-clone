import { Schema, model, models } from 'mongoose';
/// To add job descriptions 
/// Can change date to type date from string
const JobSchema = new Schema({
    id: {
        type: String,
    },
    logo:{
        type:String,
    },
    isStartUp:{
        type:Boolean,
    },
    title: {
        type: String,
        // required: [true, "Job title is required"],
    },
    location: {
        type: String,
        default:"remote",
    },
    isIntern: {
        type: Boolean,
        // required: [true, 'Whether it is Job/Intern is required'],
    },
    companyName: {
        type: String,
        // required: [true, "Company name is required"],
    },
    companyLink: {
        type: String,
    },
    duration: {
        type: String,
        // required: [true, "Duration is required"],
    },
    stipend: {
        type: Number,
        // required: [true, "Stipend is required"],
    },
    description:{
        type:String,
    },
    lastDate: {
        // type: Date,
        type:String,
        // required: [true, "Last date is required"],
    },
    expectedStartDate: {
        type: String,
    },
    skillsRequired: {
        type: [String],
    },
    eligiblilty: {
        type: [String],
    },
    perks: {
        type: [String],
    },
    noOfOpenings: {
        type: Number,
    },
    workingHours: {
        type: String
    },
    postedDate: {
        // type: Date,
        type:String,
    },
    responsilities:{
        type:[String],
    },
    appliedCandidates: {
        type: [String],
    }
});

const Job = models.Job || model("Job", JobSchema);

export default Job;