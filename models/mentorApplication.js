import { Schema, model, models } from 'mongoose';


const MentorApplicationSchema = new Schema({
    name: {
        type: String,
        // required: [true, 'Name is required'],
    },
    companyName: {
        type: String,
        required: [true, 'Company Name is required from Mentor Model'],
    },
    email: {
        type: String,
        // unique: [true, "Email already exists"],
        required: [true, "Email is required"],
    },
    contactNo: {
        type: String,
        // length: 10,
    },
    
});


const MentorApplication = models.MentorApplication || model("MentorApplication", MentorApplicationSchema);

export {MentorApplication}