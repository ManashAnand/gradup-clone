import { Schema, model, models } from 'mongoose';


const MentorApplicationSchema = new Schema({
    id: {
        type: String,
        unique: [true, 'UserId already exists'],
        required: [true, 'UserId is required from User Model'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
    },
    contactNo: {
        type: String,
        length: 10,
    },
    
});


export const MentorApplication = models.MentorApplication || model("MentorApplication", UserSchema);